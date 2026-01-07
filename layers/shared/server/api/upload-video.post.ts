import {
  useDirectusClient
} from '../directus'
import * as DirectusSdk from '@directus/sdk'
const Directus = (DirectusSdk as any).Directus || (DirectusSdk as any).default || DirectusSdk
import type {
  H3Event
} from 'h3'
import {
  Client as MinioClient
} from 'minio'
import {
  v4 as uuidv4
} from 'uuid'
import { Formidable } from 'formidable'
import fs from 'node:fs/promises'
import {
  createError,
  defineEventHandler
} from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  // 1. Authenticate user via Directus access token (from Authorization header or sb:token cookie)
  const authHeader = event.node.req.headers.authorization || ''
  const headerToken = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null
  const cookieHeader = event.node.req.headers.cookie || ''
  const cookieMatch = RegExp(/access_token=([^;]+)/).exec(cookieHeader) || cookieHeader.match(/sb:token=([^;]+)/)
  const cookieToken = cookieMatch?.[1] ? decodeURIComponent(cookieMatch[1]) : null

  const tokenToCheck = headerToken || cookieToken
  if (!tokenToCheck) {
    return createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }

  // Validate token with Directus SDK by creating a temp client with the provided token
  let user: any = null
  try {
    const tempClient = new Directus(process.env.DIRECTUS_URL || '')
    tempClient.auth.static(tokenToCheck)
    user = await tempClient.users.me.read()
  } catch (err) {
    user = null
  }

  if (!user) return createError({
    statusCode: 401,
    statusMessage: 'Unauthorized'
  })

  // 2. Parse uploaded file
  const form = new Formidable({ uploadDir: "/uploads/", keepExtensions: false });

  const [fields, files] = (await form.parse(event.req)) as any
  const file = (files.video)
  if (!file || Array.isArray(file)) {
    return createError({
      statusCode: 400,
      statusMessage: 'Invalid file'
    })
  }

  const fileBuffer = await fs.readFile(file.filepath)
  const fileExt = file.originalFilename?.split('.').pop() || 'mp4'
  const fileId = uuidv4()
  const minioKey = `videos/${user.id}/${fileId}.${fileExt}`

  // 3. Upload to MinIO (using Minio JS client)
  const minioEndpoint = process.env.MINIO_ENDPOINT || 'http://127.0.0.1:9000'
  let endpointHost = '127.0.0.1'
  let endpointPort = 9000
  let useSSL = false
  try {
    const parsed = new URL(minioEndpoint)
    endpointHost = parsed.hostname
    endpointPort = parsed.port ? parseInt(parsed.port, 10) : (parsed.protocol === 'https:' ? 443 : 80)
    useSSL = parsed.protocol === 'https:'
  } catch (e) {
    // fallback to simple host:port parse if URL() fails
    const match = (minioEndpoint || '').match(/^(https?:)?\/\/(.+?):?(\d+)?$/)
    if (match) {
      useSSL = !!match[1] && match[1] === 'https:'
      endpointHost = match[2] as any
      endpointPort = match[3] ? parseInt(match[3], 10) : (useSSL ? 443 : 80)
    }
  }

  const minioClient = new MinioClient({
    endPoint: endpointHost,
    port: endpointPort,
    useSSL,
    accessKey: process.env.MINIO_USER || 'MINIO_USER',
    secretKey: process.env.MINIO_PASS || 'MINIO_PASS',
  })

  await minioClient.putObject(
    'vibez-uploads',
    minioKey,
    fileBuffer,
    fileBuffer.length, {
      'Content-Type': file.mimetype || 'video/mp4'
    }
  )

  // 4. Insert metadata into Directus 'videos' collection using service token
  const adminClient = useDirectusClient()
  const payload = {
    id: fileId,
    user_id: (user && (user.data?.id || user.id)) || null,
    title: fields.title || 'Untitled',
    minio_key: minioKey,
    status: 'uploaded',
  }

  const itemsApi = adminClient.items('videos')
  const createResp = await itemsApi.create(payload)
  if (!createResp || createResp.errors) {
    return createError({
      statusCode: 500,
      statusMessage: JSON.stringify(createResp)
    })
  }

  return {
    success: true,
    id: fileId
  }
})

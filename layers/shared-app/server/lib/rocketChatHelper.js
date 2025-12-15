// server/lib/rocketChatHelper.js
import fetch from 'node-fetch'

const RC_URL = 'https://chat.meeovicms.com'
const RC_USER = process.env.ROCKETCHAT_USER
const RC_PASS = process.env.ROCKETCHAT_PASS

let authToken = null
let userId = null

async function rocketChatLogin() {
  if (authToken) return { authToken, userId }
  const res = await fetch(`${RC_URL}/api/v1/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: RC_USER, password: RC_PASS })
  })
  const data = await res.json()
  authToken = data.data.authToken
  userId = data.data.userId
  return { authToken, userId }
}

function slugify(title) {
  return 'comments-' + title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumerics
    .replace(/^-+|-+$/g, '')     // trim dashes
}

export async function ensureChannelForContent(title) {
  const { authToken, userId } = await rocketChatLogin()
  const channelName = slugify(title)

  // check if channel exists
  let res = await fetch(`${RC_URL}/api/v1/channels.info?roomName=${channelName}`, {
    headers: {
      'X-Auth-Token': authToken,
      'X-User-Id': userId
    }
  })
  let data = await res.json()

  if (data.success) return channelName

  // create channel
  res = await fetch(`${RC_URL}/api/v1/channels.create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': authToken,
      'X-User-Id': userId
    },
    body: JSON.stringify({ name: channelName })
  })
  data = await res.json()

  if (!data.success) throw new Error('Failed to create channel')
  return channelName
}
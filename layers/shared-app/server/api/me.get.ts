import { getServerSession } from "next-auth"

// server/api/me.get.ts
export default defineEventHandler(async (event) => {
  const session = await getServerSession(event)
  if (!session) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }
  return { user: session.user }
})
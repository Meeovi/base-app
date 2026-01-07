// server/api/comments/channel/[id].js (Nuxt 3 server route style)

import { ensureChannelForContent } from '../../../lib/rocketChatHelper'

// Example: GET /api/comments/channel/123
export default defineEventHandler(async (event) => {
  const contentId = event.context.params.id

  // Fetch content from your DB
  const content = await getContentById(contentId) // implement this
  if (!content) {
    return { error: 'Content not found' }
  }

  // Ensure Rocket.Chat channel exists for this content title
  const channelName = await ensureChannelForContent(content.title)

  // Return channel name to frontend
  return { channelName }
})
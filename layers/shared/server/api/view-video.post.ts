import { useDirectusClient } from '../directus'
import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const { videoId } = await readBody(event)
  if (!videoId) return { success: false }

  const admin = useDirectusClient()

  try {
    // Read the current view_count, then update with +1 to avoid race conditions as best-effort
    const resp = await admin.items('videos').readByQuery({ filter: { id: { _eq: videoId } }, limit: 1, fields: ['id', 'view_count'] })
    const item = (resp && (resp as any).data && (resp as any).data[0]) || resp?.data || (Array.isArray(resp) ? resp[0] : null)
    const current = (item && (item.view_count || 0)) || 0
    const newCount = Number(current) + 1

    // Directus SDK items().update/updateOne may vary by version; use items('videos').update(id, payload) if available
    // We'll attempt the canonical REST-style update via items('videos').update
    if (typeof admin.items === 'function') {
      // try update with id
      try {
        await admin.items('videos').update(videoId, { view_count: newCount })
      } catch (err) {
        // fallback: try updateOne or create a patch via request
        if ((admin as any).items && (admin as any).items('videos') && (admin as any).items('videos').updateOne) {
          await (admin as any).items('videos').updateOne(videoId, { view_count: newCount })
        } else {
          // final fallback: use request to patch
          await admin.request?.({ method: 'PATCH', url: `/items/videos/${videoId}`, body: { view_count: newCount } } as any)
        }
      }
    }

    return { success: true }
  } catch (err) {
    // ignore errors but return failure
    return { success: false, error: String(err) }
  }
})
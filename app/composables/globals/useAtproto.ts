// composables/useAtproto.ts
import { AtpAgent } from '@atproto/api'

export const useAtproto = () => {
  const config = useRuntimeConfig()
  const agent = new AtpAgent({ service: `${config.public.atprotoPds}` })

  const login = async (identifier: string, password: string) => {
    await agent.login({ identifier, password })
    return agent.session
  }

  const getTimeline = async () => {
    return await agent.getTimeline({ limit: 20 })
  }

  return { agent, login, getTimeline }
}
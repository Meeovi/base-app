import Keycloak from "next-auth/providers/keycloak"
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  // a) Never hardcode your secret in your code!! and b) use a secure secret, `test-123` is **not** secure!!
  secret: process.env.AUTH_SECRET ?? 'test-123',
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    Keycloak.default({
      clientId: process.env.KEYCLOAK_CLIENT_ID ?? 'nuxt-app',
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET ?? 'your-keycloak-client-secret',
      issuer: process.env.KEYCLOAK_ISSUER ?? 'http://localhost:8080/realms/nuxt'
    }),
  ]
})
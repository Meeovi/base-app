import {
  H3Event,
  EventHandlerRequest,
  sendRedirect
} from "h3";

export default defineOAuthXEventHandler({
  config: {
    authorizeUrl: `${process.env.DIRECTUS_URL}/oauth/authorize`,
    tokenUrl: `${process.env.NUXTUS_DIRECTUS_STATIC_TOKEN}/oauth/token`,
    scope: ['openid', 'profile', 'email'],
  }as any,

  async onSuccess(event: H3Event < EventHandlerRequest > , {
    user,
    tokens
  }: any) {
    // user = profile returned by provider
    // tokens = access_token, refresh_token, etc.

    await setUserSession(event, {
      user: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        // spread extra fields as any to avoid assigning unknown properties directly on the User type
        ...({
            email: user.email
          } as any)
      },
      loggedInAt: Date.now()
    });

    return sendRedirect(event, '/');
  },

  onError(event: H3Event < EventHandlerRequest > , error: any) {
    console.error('OAuth error:', error);
    return sendRedirect(event, '/login');
  }
});
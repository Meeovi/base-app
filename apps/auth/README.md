# Auth App Layer

A production-ready authentication layer for Nuxt 3 applications, integrated with [nuxt-auth-utils](https://github.com/Atinux/nuxt-auth-utils) and [Directus](https://directus.io/).

## 🚀 Features

✨ **Nuxt-Auth-Utils Integration**
- Session management with encrypted cookies
- Built-in security features (CSRF protection, secure cookies)
- Type-safe user sessions

🗄️ **Directus Backend**
- Directus as primary database and auth provider
- REST & GraphQL API support
- Admin API for privileged operations

🔐 **Multiple OAuth Providers**
- Directus OAuth (Primary)
- GitHub OAuth
- Twitch OAuth

🎫 **WebAuthn Support**
- Passwordless authentication
- Biometric login support

🛡️ **Security Features**
- Email verification system
- Password hashing with automatic rehashing
- Session timeout management
- Role-based access control ready

## 📋 Prerequisites

- Node.js 18+ 
- Directus instance (self-hosted or cloud)
- PostgreSQL, MySQL, or other supported database

## 🔧 Installation

### 1. Install Dependencies

```bash
cd layers/auth-app
pnpm install
```

### 2. Configure Directus

Set up your Directus instance and create a custom `users` collection with the following fields:

```typescript
{
  id: number (auto-increment),
  email: string (unique, required),
  first_name: string,
  avatar: string (url),
  password: string (hashed),
  github_id: integer,
  github_token: string,
  twitch_id: string,
  twitch_token: string,
  directus_id: string,
  directus_token: string,
  verified_at: timestamp,
  email_to_verify: string,
  is_seller: boolean,
  status: string (active, suspended, archived),
  created_at: timestamp,
  updated_at: timestamp
}
```

### 3. Environment Setup

Create a `.env` file with the following variables:

```env
# App Configuration
APP_NAME=Meeovi

# Session (Required - minimum 32 characters)
NUXT_SESSION_PASSWORD=your-super-secret-session-password-min-32-chars

# Directus Configuration (Required)
DIRECTUS_URL=https://your-directus-instance.com
DIRECTUS_ADMIN_TOKEN=your-directus-admin-token

# Directus OAuth (Optional - for OAuth login)
DIRECTUS_CLIENT_ID=your-directus-oauth-client-id
DIRECTUS_CLIENT_SECRET=your-directus-oauth-client-secret

# GitHub OAuth (Optional)
NUXT_OAUTH_GITHUB_CLIENT_ID=your_github_client_id
NUXT_OAUTH_GITHUB_CLIENT_SECRET=your_github_client_secret

# Twitch OAuth (Optional)
NUXT_OAUTH_TWITCH_CLIENT_ID=your_twitch_client_id
NUXT_OAUTH_TWITCH_CLIENT_SECRET=your_twitch_client_secret

# Email (Optional - for verification emails)
RESEND_API_KEY=your_resend_api_key
MAIL_FROM=noreply@yourdomain.com
```

### 4. Configure Directus OAuth (Optional)

If you want to use Directus as an OAuth provider:

1. In your Directus instance, go to Settings > OAuth
2. Create a new OAuth client
3. Set the redirect URI to: `https://your-app.com/auth/directus`
4. Copy the Client ID and Client Secret to your `.env` file

## 📚 Usage

### Basic Authentication

```vue
<script setup>
const { 
  login, 
  register, 
  logout, 
  user, 
  isAuthenticated,
  loginWithDirectus 
} = useAuth()

// Login with email/password
const handleLogin = async () => {
  try {
    await login({
      email: 'user@example.com',
      password: 'password123'
    })
    console.log('Logged in:', user.value)
  } catch (error) {
    console.error('Login failed:', error)
  }
}

// Register new user
const handleRegister = async () => {
  try {
    await register({
      name: 'John Doe',
      email: 'user@example.com',
      password: 'password123'
    })
  } catch (error) {
    console.error('Registration failed:', error)
  }
}

// Logout
const handleLogout = async () => {
  await logout()
}

// OAuth Login
const handleDirectusLogin = () => {
  loginWithDirectus()
}
</script>

<template>
  <div>
    <div v-if="isAuthenticated">
      <p>Welcome, {{ user.name }}</p>
      <button @click="handleLogout">Logout</button>
    </div>
    <div v-else>
      <button @click="handleLogin">Login</button>
      <button @click="handleRegister">Register</button>
      <button @click="handleDirectusLogin">Login with Directus</button>
    </div>
  </div>
</template>
```

### Server-Side Usage

```typescript
// server/api/protected.ts
export default defineEventHandler(async (event) => {
  // Require authenticated user
  const { user } = await requireUserSession(event)
  
  // Access user data
  console.log('User ID:', user.id)
  console.log('User Email:', user.email)
  
  return {
    message: 'Protected data',
    user
  }
})
```

### Using Directus Client

```typescript
// server/api/custom.ts
export default defineEventHandler(async (event) => {
  const client = serverDirectusClient()
  
  // Read items from Directus
  const items = await client.request(
    readItems('your_collection', {
      filter: { status: { _eq: 'published' } }
    })
  )
  
  return items
})
```

### Profile Management

```vue
<script setup>
const { getProfile, updateProfile } = useAuth()

const profile = ref(null)

onMounted(async () => {
  profile.value = await getProfile()
})

const saveProfile = async () => {
  await updateProfile({
    name: profile.value.name,
    avatar: profile.value.avatar
  })
}
</script>
```

## 🔑 API Endpoints

### Authentication Endpoints

- `POST /api/login` - Login with email/password
- `POST /api/register` - Register new user
- `GET /api/profile` - Get user profile
- `PATCH /api/me` - Update user profile
- `DELETE /api/me` - Delete user account

### OAuth Routes

- `GET /auth/directus` - Directus OAuth callback
- `GET /auth/github` - GitHub OAuth initiation
- `GET /auth/twitch` - Twitch OAuth initiation

### WebAuthn Endpoints

- `POST /api/webauthn/register` - Register WebAuthn credential
- `POST /api/webauthn/authenticate` - Authenticate with WebAuthn

## 🛠️ Utilities

### Server Utilities

```typescript
// Get Directus client
const client = serverDirectusClient()

// Find user operations
await findUserById(id)
await findUserByEmail(email)
await findUserByDirectusId(directusId)
await findUserByGitHubId(githubId)
await findUserByTwitchId(twitchId)

// CRUD operations
await createUser(data)
await updateUser(id, data)
await deleteUser(id)

// Session management
await requireVerifiedUserSession(event)
await updateUserSession(event, user)
```

### Client Composables

```typescript
const {
  // State
  user,
  session,
  loggedIn,
  isAuthenticated,
  isVerified,
  
  // Methods
  login,
  register,
  logout,
  refreshSession,
  getDirectusToken,
  getProfile,
  updateProfile,
  
  // OAuth
  loginWithDirectus,
  loginWithGitHub,
  loginWithTwitch,
} = useAuth()
```

## 🔒 Security Best Practices

1. **Session Password**: Use a strong, random 32+ character password
2. **HTTPS**: Always use HTTPS in production
3. **Environment Variables**: Never commit `.env` files
4. **Token Storage**: Tokens are stored securely in encrypted session cookies
5. **CSRF Protection**: Built-in with nuxt-auth-utils
6. **Password Hashing**: Automatic with bcrypt/argon2

## 🏗️ Architecture

```
auth-app/
├── app/
│   ├── composables/
│   │   └── useAuth.ts          # Main auth composable
│   ├── components/             # Auth UI components
│   ├── pages/                  # Auth pages
│   └── middleware/             # Auth middleware
├── server/
│   ├── api/
│   │   ├── login.post.ts       # Login endpoint
│   │   ├── register.post.ts    # Register endpoint
│   │   ├── profile.get.ts      # Profile endpoint
│   │   └── me.patch.ts         # Update profile
│   ├── routes/
│   │   └── auth/
│   │       ├── directus.get.ts # Directus OAuth
│   │       ├── github.get.ts   # GitHub OAuth
│   │       └── twitch.get.ts   # Twitch OAuth
│   └── utils/
│       ├── directus.ts         # Directus client
│       ├── user.ts             # User CRUD
│       └── session.ts          # Session helpers
├── types/
│   ├── auth.d.ts               # Auth types
│   └── type-helpers.ts         # Type utilities
└── nuxt.config.ts              # Layer config
```

## 🚀 Production Deployment

### 1. Environment Variables

Set all required environment variables in your hosting platform.

### 2. Session Security

```typescript
// nuxt.config.ts
runtimeConfig: {
  session: {
    password: process.env.NUXT_SESSION_PASSWORD,
    maxAge: 60 * 60 * 24 * 7 // 1 week
  }
}
```

### 3. CORS Configuration

If your Directus instance is on a different domain, configure CORS:

```typescript
// Directus .env
CORS_ENABLED=true
CORS_ORIGIN=https://your-app.com
CORS_CREDENTIALS=true
```

### 4. Rate Limiting

Consider implementing rate limiting for authentication endpoints to prevent brute force attacks.

## 🐛 Troubleshooting

### Common Issues

**Issue**: "Missing Directus configuration"
- **Solution**: Ensure `DIRECTUS_URL` is set in your environment variables

**Issue**: "Failed to authenticate with Directus"
- **Solution**: Verify your Directus admin token has proper permissions

**Issue**: "OAuth redirect not working"
- **Solution**: Check that redirect URIs match in both your app and OAuth provider settings

**Issue**: Session not persisting
- **Solution**: Ensure `NUXT_SESSION_PASSWORD` is set and is at least 32 characters

## 📖 Documentation

- [Nuxt Auth Utils](https://github.com/Atinux/nuxt-auth-utils)
- [Directus SDK](https://docs.directus.io/reference/sdk.html)
- [WebAuthn Guide](https://webauthn.guide/)

## 📝 License

See LICENSE file in the root directory.

## 🤝 Contributing

See CONTRIBUTING.md for contribution guidelines.

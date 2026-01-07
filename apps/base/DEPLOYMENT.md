# Deployment Guide

## Prerequisites for Production

Before deploying to production, ensure you have:

1. **Environment Variables**: Set all required environment variables in your deployment platform
2. **Database**: PostgreSQL database set up and accessible
3. **CDN/Storage**: MinIO or S3-compatible storage configured for media files
4. **Domain**: Domain name pointed to your deployment
5. **SSL**: SSL certificate configured (automatic with most platforms)

## Deployment Platforms

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts to deploy

### Netlify

1. Build command: `npm run generate`
2. Publish directory: `.output/public`
3. Add environment variables in Netlify dashboard

### Digital Ocean / VPS

1. Build the application: `npm run build`
2. Start with PM2: `pm2 start npm --name "base-app" -- start`
3. Set up Nginx reverse proxy
4. Configure SSL with Let's Encrypt

### Docker

1. Build: `docker build -t base-app .`
2. Run: `docker run -p 3011:3011 base-app`

## Environment Variables Checklist

Make sure to set these in your production environment:

- [ ] `NUXT_PUBLIC_SITE_URL`
- [ ] `DATABASE_URL`
- [ ] `DIRECTUS_URL`
- [ ] `NUXTUS_DIRECTUS_STATIC_TOKEN`
- [ ] `MAGENTO_API_URL`
- [ ] `MAGENTO_TOKEN`
- [ ] `STRIPE_SECRET_KEY`
- [ ] `STRIPE_PUBLIC_KEY`
- [ ] `NUXT_PUBLIC_GTAG_ID`
- [ ] `MEILISEARCH_HOST`
- [ ] `MEILISEARCH_SEARCH_API_KEY`

## Performance Optimization

1. Enable compression in your server/CDN
2. Configure caching headers
3. Use image optimization (built-in with @nuxt/image)
4. Enable gzip/brotli compression
5. Set up CDN for static assets

## Security Checklist

- [ ] Update all environment variables with production values
- [ ] Enable HTTPS only
- [ ] Configure CORS properly
- [ ] Set up rate limiting
- [ ] Enable security headers (nuxt-security module)
- [ ] Keep dependencies updated
- [ ] Set up monitoring and error tracking

## Monitoring

Consider adding:
- Error tracking (Sentry, Rollbar)
- Performance monitoring (New Relic, DataDog)
- Uptime monitoring (UptimeRobot, Pingdom)
- Analytics (Google Analytics is already configured)

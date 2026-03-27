## Context

The application uses Next.js 15 with App Router and NextAuth v5, deployed on AWS Amplify. The initial approach attempted to use static export (`output: 'export'`) to work with Amplify's WEB platform (static hosting). However, NextAuth v5 requires API routes for OAuth callbacks and session management, which are incompatible with static export.

## Goals / Non-Goals

**Goals:**
- Support NextAuth API routes (`/api/auth/[...nextauth]`) on Amplify
- Maintain static generation for pages that don't require SSR
- Use Amplify's serverless compute for API routes and any dynamic pages
- Keep deployment on Amplify WEB_COMPUTE platform
- Support SPA routing for client-side navigation

**Non-Goals:**
- Full SSR for all pages (only use when explicitly needed via `dynamic = "force-dynamic"`)
- Using traditional SSR Lambda@Edge setup
- Static export approach

## Decisions

### 1. Use WEB_COMPUTE Platform with @aws-amplify/adapter-nextjs

**Decision:** Switch to Amplify's WEB_COMPUTE platform and use the official AWS Amplify adapter for Next.js.

**Rationale:**
- WEB_COMPUTE platform supports Next.js API routes as serverless Lambda functions
- The adapter handles routing of API requests to Lambda functions
- Pages without `dynamic = "force-dynamic"` are still statically generated at build time
- SPA routing works automatically (no custom rule needed for 404 handling)
- NextAuth OAuth callbacks work because API routes are serverless functions

**Alternatives Considered:**
- **Static export with separate auth service**: Would require maintaining a separate auth microservice, increasing complexity
- **SSR Lambda@Edge without adapter**: More complex configuration, the adapter provides better integration

### 2. Remove `output: 'export'`

**Decision:** Remove static export configuration since we're using the adapter.

**Rationale:**
- `output: 'export'` is incompatible with API routes
- The adapter approach handles the deployment correctly
- Static pages are still generated but served via CloudFront CDN, not as static files

### 3. Amplify Platform: WEB_COMPUTE

**Decision:** Use the WEB_COMPUTE platform instead of WEB.

**Rationale:**
- WEB_COMPUTE supports Next.js App Router with API routes
- Serverless functions run Lambda@Edge for low-latency globally
- Static assets are still served from CloudFront CDN
- Cost is higher than static hosting but supports the full Next.js feature set

### 4. Keep baseDirectory as `.next`

**Decision:** The build spec should output to `web/.next`.

**Rationale:**
- With the adapter approach, the full Next.js output (static pages + serverless functions) is in `.next`
- The adapter handles packaging and deploying the correct artifacts

### 5. Custom Rule for SPA Fallback

**Decision:** No custom rule needed with WEB_COMPUTE + adapter.

**Rationale:**
- API routes are handled by Lambda functions
- Client-side navigation works via React Router (Next.js Link component)
- Next.js handles missing routes appropriately in client-side navigation

## Risks / Trade-offs

| Risk | Impact | Mitigation |
|------|--------|------------|
| Higher cost than static hosting | WEB_COMPUTE Lambda pricing | Acceptable for auth requirement; static pages still cached |
| Cold start latency for API routes | Lambda cold starts | Amplify handles caching; acceptable for auth flows |
| Lambda function size limits | Next.js bundle size | Use dynamic imports for large libraries |
| Amplify build configuration complexity | More config than static export | Follow adapter documentation |

## Migration Plan

1. **Update `web/package.json`**:
   - Add `@aws-amplify/adapter-nextjs` dependency

2. **Update `web/next.config.ts`**:
   - Remove `output: 'export'`
   - Add `adapter: nextAuth({ runtime: 'nodejs18.x' })` (via @aws-amplify/adapter-nextjs)

3. **Update `infrastructure/modules/amplify/main.tf`**:
   - Change platform from WEB to WEB_COMPUTE
   - Keep baseDirectory as `web/.next`

4. **Deploy and verify**:
   - Push changes, trigger Amplify build
   - Navigate to `/login` - should load and handle OAuth flow
   - Test client-side navigation between routes
   - Verify API routes work for auth callbacks

## Open Questions

- **Q: Does Amplify WEB_COMPUTE support all Next.js features?**
  - A: Most features work. Some edge runtime features may need adjustment.

- **Q: What's the cost difference?**
  - A: WEB_COMPUTE uses Lambda pricing which is higher than static hosting but still reasonable for most use cases.

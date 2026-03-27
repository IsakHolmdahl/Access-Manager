## 1. Next.js Configuration

- [x] 1.1 Remove `output: 'export'` from next.config.ts (static export approach abandoned)
- [x] 1.2 Keep `images: { unoptimized: true }` in next.config.ts
- [x] 1.3 Verify config exports correctly

## 2. Amplify Infrastructure Configuration

- [x] 2.1 Change Amplify platform from WEB to WEB_COMPUTE in main.tf
- [x] 2.2 Update baseDirectory from `web/out` to `web/.next` in build spec
- [x] 2.3 Keep custom rule for SPA fallback (404-200)

## 3. Verification

- [x] 3.1 Run `npm run build` locally and verify build succeeds
- [x] 3.2 Verify `.next/` directory is created with correct structure
- [x] 3.3 Verify API route functions are included in build output
- [ ] 3.4 Deploy to Amplify and verify /login route works
- [ ] 3.5 Verify OAuth flow completes successfully
- [ ] 3.6 Test client-side navigation between routes

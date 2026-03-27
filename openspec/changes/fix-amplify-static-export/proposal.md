## Why

The application uses NextAuth v5 with AWS Amplify. NextAuth requires API routes for OAuth callbacks and session management, which are incompatible with Next.js static export (`output: 'export'`). We need to use Amplify's `WEB_COMPUTE` platform with the `@aws-amplify/adapter-nextjs` to support API routes while maintaining static generation for pages that don't require SSR.

## What Changes

- Remove `output: 'export'` from Next.js config (no longer needed)
- Add `@aws-amplify/adapter-nextjs` package for Amplify adapter
- Switch Amplify platform from `WEB` to `WEB_COMPUTE` to support serverless functions
- Keep static generation for pages that don't need SSR
- Update baseDirectory to `.next` (full static output not used anymore)
- API routes will be handled as Lambda@Edge functions via the adapter

## Capabilities

### New Capabilities
- `amplify-webcompute`: Configure Next.js for Amplify WEB_COMPUTE platform with serverless functions

### Modified Capabilities
- `amplify-deployment`: Update Amplify Terraform configuration to use WEB_COMPUTE platform

## Impact

- **Files Modified**:
  - `web/next.config.ts` - Configure for adapter and remove static export
  - `infrastructure/modules/amplify/main.tf` - Switch to WEB_COMPUTE platform
  - `web/package.json` - Add `@aws-amplify/adapter-nextjs` dependency
- **Build Output**: Next.js outputs hybrid app with static pages + Lambda functions
- **Hosting**: Works with Amplify WEB_COMPUTE platform (supports API routes + SSR if needed)

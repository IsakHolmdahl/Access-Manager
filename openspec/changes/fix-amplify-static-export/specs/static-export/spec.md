# Static Export

## Purpose
Configure Next.js App Router for static export to work with AWS Amplify static hosting platform.

## ADDED Requirements

### Requirement: Static HTML generation
The system SHALL configure Next.js App Router to generate static HTML files at build time for deployment on Amplify static hosting.

#### Scenario: Static export enabled
- **WHEN** `npm run build` is executed
- **THEN** Next.js SHALL generate static HTML files in the `web/out/` directory
- **AND** each route SHALL have a corresponding `index.html` file
- **AND** the application SHALL function without a Node.js server

### Requirement: Image optimization disabled
The system SHALL disable Next.js image optimization when using static export.

#### Scenario: Image configuration
- **WHEN** static export is configured
- **THEN** `images.unoptimized` SHALL be set to `true`
- **AND** images SHALL be served via standard `<img>` src attributes
- **AND** external CDN images SHALL continue to work normally

### Requirement: SPA routing support
The system SHALL support single-page application routing with client-side navigation.

#### Scenario: Client-side navigation
- **WHEN** user navigates to a route like `/login`
- **THEN** the browser SHALL load the `index.html` file
- **AND** Next.js router SHALL handle client-side navigation
- **AND** the page SHALL render without a full page reload

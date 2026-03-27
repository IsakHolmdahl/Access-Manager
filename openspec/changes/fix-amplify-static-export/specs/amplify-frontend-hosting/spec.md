# Amplify Frontend Hosting

Delta spec for `fix-amplify-static-export` change.

## MODIFIED Requirements

### Requirement: Build artifact configuration
The system SHALL configure build artifact output settings for static export compatibility.

#### Scenario: Artifact output
- **WHEN** Next.js build completes
- **THEN** it SHALL output to `out/` directory (not `.next/`)
- **AND** Amplify SHALL serve static files from `out/` directory
- **AND** all routes SHALL be accessible as static HTML files

### Requirement: SPA routing fallback
The system SHALL configure Amplify to serve `index.html` for all unmatched routes to enable SPA routing.

#### Scenario: SPA routing configuration
- **WHEN** Amplify receives a request for an unmatched route
- **THEN** it SHALL return HTTP 200 status with `index.html` content
- **AND** Next.js router SHALL handle client-side route matching
- **AND** this SHALL NOT return HTTP 404 to the browser

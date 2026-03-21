## Why

The Access Manager application needs a consistent, reusable set of base UI components to ensure visual cohesion and development efficiency across all user interfaces. Currently, there is no standardized component library, leading to inconsistent styling, duplicated effort, and slower feature development. Establishing these foundational components now will accelerate future feature work and maintain the "Architectural Sentinel" design system's integrity.

## What Changes

This change introduces a comprehensive set of base UI components following the shadcn/ui pattern and the project's "Architectural Sentinel" design system:

- **Button Component**: Multi-variant button system with primary, secondary, ghost, and destructive styles. Includes support for icons, loading states, and size variations (sm, md, lg).
- **Input/Form Components**: Text input, textarea, select dropdown, checkbox, and radio button components with consistent styling, error states, and accessibility features. Includes form validation integration patterns.
- **Card/Container Components**: Card component with header, content, and footer sections. Also includes container/wrapper components for page layouts with proper spacing and surface hierarchy following the design system's "No-Line" rule.
- **Navigation Shell/Layout**: Application shell with responsive navigation, header, sidebar (collapsible), and main content area. Includes mobile hamburger menu and proper z-index layering.

All components will:
- Follow the "No-Line" design rule (no borders, use background color shifts)
- Use the tonal color palette (deep midnight blue primary, surface hierarchy)
- Support dark/light mode via CSS variables
- Be built with React Server Components where possible
- Use Tailwind CSS v4 with the project's custom theme
- Include proper TypeScript types and interfaces
- Follow accessibility best practices (ARIA labels, keyboard navigation)

## Capabilities

### New Capabilities
- `button-component`: Button component with variants, icons, loading states, and size options following shadcn/ui patterns
- `input-form-components`: Form input components including text input, textarea, select, checkbox, and radio with validation support
- `card-container-components`: Card layout component with sections and container wrappers using surface hierarchy
- `navigation-shell`: Application shell with responsive navigation, header, sidebar, and mobile menu

### Modified Capabilities
<!-- No existing capabilities are being modified - this is all new foundational work -->

## Impact

- **Code Locations**: New components will be added to `/web/components/ui/` directory
- **Dependencies**: Uses existing `@base-ui/react`, `class-variance-authority`, `lucide-react`, and Tailwind CSS v4
- **Design System**: Implements the "Architectural Sentinel" design tokens from `/access_manager_design/sentinel_core/DESIGN.md`
- **Breaking Changes**: None - these are new additions
- **Documentation**: Component usage examples will be valuable for future developers
- **Testing**: No test runner currently configured; manual testing via Storybook or dev server recommended

## Context

The Access Manager project currently lacks a standardized component library. The project uses:
- **Next.js 15** with App Router and React Server Components
- **Tailwind CSS v4** with custom CSS variables for theming
- **shadcn/ui** pattern using `@base-ui/react` primitives
- **"Architectural Sentinel"** design system with specific constraints (No-Line rule, surface hierarchy, tonal colors)

Existing design tokens are defined in `/access_manager_design/sentinel_core/DESIGN.md` and implemented in `/web/app/globals.css`. The Button component already exists as a reference implementation.

## Goals / Non-Goals

**Goals:**
- Create a cohesive, reusable component library that follows the existing Button component pattern
- Implement all components using React Server Components where possible (use `"use client"` only when needed for interactivity)
- Ensure 100% TypeScript coverage with explicit interfaces
- Maintain accessibility standards (WCAG 2.1 AA minimum)
- Follow the "No-Line" design rule using background color shifts instead of borders
- Support the existing dark/light mode CSS variable system
- Use class-variance-authority (CVA) for component variants

**Non-Goals:**
- Creating a comprehensive form validation library (we'll integrate with existing solutions like React Hook Form + Zod)
- Building complex compound components (keep components atomic and composable)
- Supporting IE11 or legacy browsers (target modern evergreen browsers)
- Creating Storybook stories (out of scope for this change)
- Unit tests (no test runner configured yet)

## Decisions

### 1. Component Architecture Pattern
**Decision**: Follow the existing Button component pattern using `class-variance-authority` with Tailwind CSS.

**Rationale**: 
- The Button component already exists and serves as a reference
- CVA provides type-safe variant management
- Consistent with shadcn/ui best practices

**Alternatives considered**:
- CSS Modules: Rejected - doesn't integrate well with Tailwind
- Styled Components: Rejected - conflicts with Tailwind and RSC compatibility
- Raw Tailwind classes: Rejected - harder to maintain consistent variants

### 2. Form Component Strategy
**Decision**: Build controlled components that accept `value` and `onChange` props, compatible with form libraries.

**Rationale**:
- Allows integration with React Hook Form, Formik, or native form handling
- Keeps components unopinionated about validation
- Server Components can render the static structure; Client Components handle interactivity

**Implementation**:
- Input, Textarea, Select: Client Components (need interactivity)
- Checkbox, Radio: Client Components (need interactivity)
- Label: Server Component (presentational only)
- Form Field wrapper: Client Component (for error state management)

### 3. Card Component Structure
**Decision**: Create compound Card components (Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter) similar to shadcn/ui.

**Rationale**:
- Provides flexibility in card composition
- Follows established patterns from shadcn/ui
- Each subcomponent can be a Server Component

**Surface Hierarchy Implementation**:
- Cards use `bg-surface` (one level up from page background)
- Use `bg-surface-container-low` for inner sections if needed
- No borders - rely on background color contrast

### 4. Navigation Shell Architecture
**Decision**: Create a layout component structure with:
- `Shell` - Main wrapper with flex layout
- `Header` - Top navigation bar
- `Sidebar` - Collapsible side navigation (client component)
- `Main` - Content area
- `MobileNav` - Sheet/drawer for mobile navigation

**Rationale**:
- Layout components need to be Client Components due to state (sidebar open/close)
- Separating concerns allows for flexible page layouts
- Mobile navigation requires client-side state management

**Responsive Breakpoints**:
- Mobile: < 768px (md breakpoint)
- Tablet: 768px - 1024px (lg breakpoint)
- Desktop: > 1024px

### 5. Icon Strategy
**Decision**: Use `lucide-react` for all icons, accepting icon components as props.

**Rationale**:
- Already a project dependency
- Tree-shakeable
- Consistent icon set

**Implementation**:
- Button accepts optional `leftIcon` and `rightIcon` props
- Navigation items use icon components
- Form inputs can show validation status icons

### 6. Design Token Usage
**Decision**: Strictly use CSS custom properties from globals.css for all colors, spacing, and typography.

**Key Tokens**:
- Colors: `primary` (#001430), `surface`, `surface-container-low`, etc.
- Spacing: Use Tailwind's spacing scale
- Typography: Inter font family
- Shadows: Minimal, subtle shadows only for elevation (not borders)

## Risks / Trade-offs

**Risk**: React Server Components vs Client Components boundary confusion
→ **Mitigation**: Document which components are Client vs Server. Use `"use client"` directive only when necessary (event handlers, useState, useEffect, browser APIs).

**Risk**: Over-engineering component flexibility
→ **Mitigation**: Start with common use cases, add props only when needed. Follow YAGNI principle. Components can be extended later.

**Risk**: Inconsistent styling across components
→ **Mitigation**: Strict design token usage. Code review checklist includes visual consistency checks. Reference existing Button component.

**Risk**: Accessibility gaps
→ **Mitigation**: Use `@base-ui/react` primitives which handle many a11y concerns. Manual testing with keyboard navigation and screen readers. Include proper ARIA attributes.

**Risk**: Bundle size increase from multiple client components
→ **Mitigation**: Keep Server Components as default. Use dynamic imports for heavy Client Components if needed. Tree-shaking via ES modules.

## Migration Plan

**Deployment**:
1. Create components in order: Button (already exists) → Input/Form → Card → Navigation
2. Each component is self-contained and can be merged independently
3. No breaking changes - purely additive

**Rollback**:
- Simple rollback: Remove component imports and files
- No database migrations or API changes involved

**Verification**:
1. Run `npm run type-check` - ensure no TypeScript errors
2. Run `npm run lint` - ensure no linting errors
3. Run `npm run build` - ensure production build succeeds
4. Manual testing: Check components render correctly in dev server

## Open Questions

None - all technical decisions have been made based on existing patterns and design system constraints.

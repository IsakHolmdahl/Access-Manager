## 1. Button Component

- [x] 1.1 Create Button component file at `/web/components/ui/button.tsx`
- [x] 1.2 Implement button variants (default, secondary, destructive, outline, ghost, link) using class-variance-authority
- [x] 1.3 Implement button sizes (default, sm, lg, icon) with proper dimensions
- [x] 1.4 Add support for leftIcon and rightIcon props with Lucide icons
- [x] 1.5 Add disabled state styling (pointer-events-none, opacity-50)
- [x] 1.6 Add loading state with spinner icon and optional loadingText
- [x] 1.7 Implement asChild prop for polymorphic rendering
- [x] 1.8 Add focus ring styling (ring-2 ring-ring ring-offset-2)
- [x] 1.9 Add proper TypeScript interface and export component
- [x] 1.10 Verify Button renders correctly in dev server

## 2. Input Component

- [x] 2.1 Create Input component file at `/web/components/ui/input.tsx`
- [x] 2.2 Implement base input styling (h-10, rounded-md, bg-background, border)
- [x] 2.3 Add placeholder support with muted color
- [x] 2.4 Add focus state styling (ring-2 ring-ring)
- [x] 2.5 Add disabled state (opacity-50, cursor-not-allowed)
- [x] 2.6 Implement error state with destructive border color
- [x] 2.7 Add proper ARIA attributes (aria-invalid, aria-describedby)
- [x] 2.8 Add TypeScript interface extending HTMLInputElement props
- [x] 2.9 Verify Input renders and accepts text correctly

## 3. Textarea Component

- [x] 3.1 Create Textarea component file at `/web/components/ui/textarea.tsx`
- [x] 3.2 Implement textarea styling with min-h-[80px] and resize-y
- [x] 3.3 Add support for rows prop with default value
- [x] 3.4 Add focus and disabled states matching Input component
- [x] 3.5 Add TypeScript interface extending HTMLTextAreaElement props
- [x] 3.6 Verify Textarea renders with multi-line support

## 4. Select Component

- [x] 4.1 Create Select component file at `/web/components/ui/select.tsx`
- [x] 4.2 Implement Select primitive using @base-ui/react Select
- [x] 4.3 Add SelectTrigger with button styling and chevron icon
- [x] 4.4 Add SelectContent with dropdown styling and animation
- [x] 4.5 Add SelectItem with hover and selected states
- [x] 4.6 Add SelectValue for displaying selected option
- [x] 4.7 Add disabled state support
- [x] 4.8 Add proper ARIA attributes (aria-expanded, aria-haspopup)
- [x] 4.9 Export all Select subcomponents
- [x] 4.10 Verify Select dropdown works correctly

## 5. Checkbox Component

- [x] 5.1 Create Checkbox component file at `/web/components/ui/checkbox.tsx`
- [x] 5.2 Implement Checkbox primitive using @base-ui/react Checkbox
- [x] 5.3 Add checkbox styling (square, border, rounded-sm)
- [x] 5.4 Add checked state with primary background and check icon
- [x] 5.5 Add indeterminate state with horizontal line icon
- [x] 5.6 Add focus ring styling
- [x] 5.7 Add disabled state styling
- [x] 5.8 Add proper ARIA attributes (role="checkbox", aria-checked)
- [x] 5.9 Verify Checkbox toggles correctly and is accessible

## 6. Radio Group Component

- [x] 6.1 Create Radio Group component files at `/web/components/ui/radio-group.tsx`
- [x] 6.2 Implement RadioGroup container component
- [x] 6.3 Implement RadioGroupItem with radio input styling
- [x] 6.4 Add selected state with filled circle indicator
- [x] 6.5 Add focus ring and hover states
- [x] 6.6 Add disabled state support
- [x] 6.7 Add proper ARIA attributes for radio group
- [x] 6.8 Verify only one radio can be selected at a time

## 7. Label Component

- [x] 7.1 Create Label component file at `/web/components/ui/label.tsx`
- [x] 7.2 Implement Label primitive using @base-ui/react Label
- [x] 7.3 Add label styling (text-sm, font-medium, cursor-pointer)
- [x] 7.4 Support htmlFor prop for input association
- [x] 7.5 Add required indicator support
- [x] 7.6 Verify Label focuses associated input when clicked

## 8. Card Component

- [x] 8.1 Create Card component files at `/web/components/ui/card.tsx`
- [x] 8.2 Implement Card container with surface background and rounded-lg
- [x] 8.3 Ensure No-Line rule (no borders, use background contrast)
- [x] 8.4 Implement CardHeader with pb-4 and flex column layout
- [x] 8.5 Implement CardTitle as semantic h3 with proper typography
- [x] 8.6 Implement CardDescription with muted-foreground color
- [x] 8.7 Implement CardContent with px-6 padding
- [x] 8.8 Implement CardFooter with pt-4 and flex row layout
- [x] 8.9 Export all Card subcomponents
- [x] 8.10 Verify Card renders with all sections correctly

## 9. Container Component

- [x] 9.1 Create Container component file at `/web/components/ui/container.tsx`
- [x] 9.2 Implement max-width (max-w-7xl) and responsive padding
- [x] 9.3 Add size prop for different max-widths (default, small)
- [x] 9.4 Add centering with mx-auto
- [x] 9.5 Verify Container constrains content width properly

## 10. Separator Component

- [x] 10.1 Create Separator component file at `/web/components/ui/separator.tsx`
- [x] 10.2 Implement horizontal separator (w-full h-px)
- [x] 10.3 Add orientation prop for vertical mode (h-full w-px)
- [x] 10.4 Add decorative prop for ARIA
- [x] 10.5 Add proper ARIA attributes (role="separator")
- [x] 10.6 Verify Separator renders correctly in both orientations

## 11. Navigation Shell - Shell Component

- [x] 11.1 Create Shell component file at `/web/components/layout/shell.tsx`
- [x] 11.2 Implement flex column layout with min-h-screen
- [x] 11.3 Add support for hasSidebar prop
- [x] 11.4 Implement responsive layout adjustments
- [x] 11.5 Verify Shell renders with proper structure

## 12. Navigation Shell - Header Component

- [x] 12.1 Create Header component file at `/web/components/layout/header.tsx`
- [x] 12.2 Implement sticky header with top-0 z-50
- [x] 12.3 Add surface background and border-b styling
- [x] 12.4 Add flex layout with space-between alignment
- [x] 12.5 Add support for logo, navigation, and actions slots
- [x] 12.6 Verify Header stays fixed on scroll

## 13. Navigation Shell - Sidebar Component

- [x] 13.1 Create Sidebar component file at `/web/components/layout/sidebar.tsx`
- [x] 13.2 Implement sidebar with w-60 width on desktop
- [x] 13.3 Add collapsible state (w-20 when collapsed)
- [x] 13.4 Add toggle button for collapse/expand
- [x] 13.5 Hide sidebar on mobile (< md breakpoint)
- [x] 13.6 Add surface-container-low background
- [x] 13.7 Add proper ARIA attributes (role="navigation")
- [x] 13.8 Verify Sidebar collapses and expands correctly

## 14. Navigation Shell - Main Component

- [x] 14.1 Create Main component file at `/web/components/layout/main.tsx`
- [x] 14.2 Implement flex-1 to fill remaining space
- [x] 14.3 Add responsive padding (p-4 md:p-6 lg:p-8)
- [x] 14.4 Verify Main fills available height properly

## 15. Navigation Shell - MobileNav Component

- [x] 15.1 Create MobileNav component file at `/web/components/layout/mobile-nav.tsx`
- [x] 15.2 Implement slide-out drawer from left
- [x] 15.3 Add overlay/backdrop when open
- [x] 15.4 Add close button and overlay click to close
- [x] 15.5 Add hamburger menu button for mobile
- [x] 15.6 Add proper ARIA attributes (role="dialog", aria-modal)
- [x] 15.7 Add keyboard support (Escape to close)
- [x] 15.8 Verify MobileNav opens/closes correctly on mobile

## 16. Navigation Shell - NavigationItem Component

- [x] 16.1 Create NavigationItem component file at `/web/components/layout/navigation-item.tsx`
- [x] 16.2 Implement horizontal layout with icon and label
- [x] 16.3 Add active state styling (primary background)
- [x] 16.4 Add hover state styling (surface-container-low)
- [x] 16.5 Support collapsed mode (icon only)
- [x] 16.6 Add proper ARIA attributes
- [x] 16.7 Verify NavigationItem shows active state correctly

## 17. Navigation Shell - UserNav Component

- [x] 17.1 Create UserNav component file at `/web/components/layout/user-nav.tsx`
- [x] 17.2 Implement user menu trigger button with avatar
- [x] 17.3 Add dropdown menu with user actions
- [x] 17.4 Add menu items: Profile, Settings, Logout
- [x] 17.5 Add proper dropdown styling and animation
- [x] 17.6 Verify UserNav dropdown opens and items clickable

## 18. Final Integration and Verification

- [x] 18.1 Run `npm run type-check` - verify no TypeScript errors
- [x] 18.2 Run `npm run lint` - verify no linting errors
- [x] 18.3 Run `npm run build` - verify production build succeeds
- [x] 18.4 Test all components render correctly in dev server
- [x] 18.5 Verify keyboard navigation works on all interactive components
- [x] 18.6 Check responsive behavior on mobile, tablet, and desktop
- [x] 18.7 Verify all components follow No-Line design rule
- [x] 18.8 Confirm all design tokens are properly used

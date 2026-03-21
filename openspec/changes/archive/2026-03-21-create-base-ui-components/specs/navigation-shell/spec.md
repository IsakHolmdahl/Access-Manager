## ADDED Requirements

### Requirement: Shell component provides application layout structure
The Shell component SHALL serve as the root layout wrapper for the application.

#### Scenario: Render shell with header and main
- **WHEN** Shell is rendered with Header and Main children
- **THEN** it SHALL display a flex column layout with minimum height of 100vh

#### Scenario: Shell with sidebar
- **WHEN** Shell is rendered with hasSidebar={true}
- **THEN** it SHALL adjust layout to accommodate sidebar (flex-row on desktop)

### Requirement: Header component provides top navigation bar
The Header component SHALL render a fixed or sticky top navigation bar.

#### Scenario: Render header
- **WHEN** Header is rendered
- **THEN** it SHALL display with sticky positioning (top-0 z-50), surface background, and bottom border (border-b)

#### Scenario: Header with navigation items
- **WHEN** Header contains navigation links
- **THEN** they SHALL be arranged horizontally with gap-6 spacing

#### Scenario: Header with logo
- **WHEN** Header contains a logo/brand element
- **THEN** it SHALL be positioned on the left side

#### Scenario: Header with user actions
- **WHEN** Header contains user menu or action buttons
- **THEN** they SHALL be positioned on the right side

### Requirement: Sidebar component provides side navigation
The Sidebar component SHALL render a collapsible side navigation panel.

#### Scenario: Render expanded sidebar on desktop
- **WHEN** Sidebar is rendered on viewport width >= 1024px (lg breakpoint)
- **THEN** it SHALL display with width of 240px (w-60) and remain visible

#### Scenario: Collapse sidebar on desktop
- **WHEN** user clicks collapse button on desktop
- **THEN** the Sidebar SHALL animate to width of 80px (w-20) and show only icons

#### Scenario: Hide sidebar on mobile
- **WHEN** viewport width < 768px (md breakpoint)
- **THEN** the Sidebar SHALL be hidden by default

#### Scenario: Sidebar navigation items
- **WHEN** Sidebar contains navigation items
- **THEN** they SHALL display with icon and label (when expanded) arranged horizontally

#### Scenario: Active navigation item
- **WHEN** a navigation item matches current route
- **THEN** it SHALL display with primary background color to indicate active state

### Requirement: Main component provides content area
The Main component SHALL render the primary content area of the application.

#### Scenario: Render main content area
- **WHEN** Main is rendered within Shell
- **THEN** it SHALL fill remaining space (flex-1) with proper padding (p-4 md:p-6 lg:p-8)

#### Scenario: Main with container
- **WHEN** Main contains a Container component
- **THEN** content SHALL be constrained to container max-width and centered

### Requirement: MobileNav component provides mobile navigation
The MobileNav component SHALL render a slide-out navigation drawer for mobile devices.

#### Scenario: Render mobile navigation drawer
- **WHEN** MobileNav is triggered on mobile viewport
- **THEN** it SHALL slide in from the left with full height and 80% width (w-4/5)

#### Scenario: Close mobile navigation
- **WHEN** user clicks close button or overlay
- **THEN** the MobileNav SHALL close and the overlay SHALL disappear

#### Scenario: Mobile navigation hamburger button
- **WHEN** viewport is mobile width
- **THEN** a hamburger menu button SHALL appear in the Header

#### Scenario: Hamburger opens mobile nav
- **WHEN** user clicks hamburger menu button
- **THEN** the MobileNav SHALL open with overlay

### Requirement: NavigationItem component provides navigation links
The NavigationItem component SHALL render individual navigation links with icon and label.

#### Scenario: Render navigation item
- **WHEN** NavigationItem is rendered with href, icon, and label
- **THEN** it SHALL display the icon and label horizontally with gap-3 spacing

#### Scenario: Navigation item hover state
- **WHEN** user hovers over NavigationItem
- **THEN** it SHALL display with surface-container-low background color

#### Scenario: Navigation item active state
- **WHEN** NavigationItem href matches current route
- **THEN** it SHALL display with primary background and white text

### Requirement: UserNav component provides user menu
The UserNav component SHALL render a dropdown menu with user-related actions.

#### Scenario: Render user menu trigger
- **WHEN** UserNav is rendered
- **THEN** it SHALL display user avatar/name as a trigger button

#### Scenario: Open user menu
- **WHEN** user clicks the user menu trigger
- **THEN** a dropdown SHALL appear with user actions (Profile, Settings, Logout)

#### Scenario: User menu items
- **WHEN** the user menu dropdown is open
- **THEN** it SHALL contain navigation items for profile, settings, and logout

### Requirement: Navigation components are responsive
All navigation components SHALL adapt to different viewport sizes appropriately.

#### Scenario: Desktop navigation layout
- **WHEN** viewport width >= 1024px
- **THEN** Sidebar SHALL be visible, hamburger hidden, full navigation shown

#### Scenario: Tablet navigation layout
- **WHEN** viewport width >= 768px and < 1024px
- **THEN** Sidebar MAY be collapsible, navigation items remain accessible

#### Scenario: Mobile navigation layout
- **WHEN** viewport width < 768px
- **THEN** Sidebar SHALL be hidden, hamburger visible, navigation in drawer

### Requirement: Navigation shell follows accessibility standards
The navigation components SHALL meet WCAG 2.1 AA accessibility standards.

#### Scenario: Sidebar has proper ARIA
- **WHEN** Sidebar is rendered
- **THEN** it SHALL have role="navigation" and aria-label="Sidebar navigation"

#### Scenario: Mobile nav has proper ARIA
- **WHEN** MobileNav is open
- **THEN** it SHALL have role="dialog", aria-modal="true", and aria-labelledby pointing to title

#### Scenario: Navigation items are keyboard accessible
- **WHEN** user presses Tab in navigation
- **THEN** focus SHALL move through all interactive navigation elements

#### Scenario: Mobile nav close on Escape
- **WHEN** MobileNav is open and user presses Escape
- **THEN** the MobileNav SHALL close

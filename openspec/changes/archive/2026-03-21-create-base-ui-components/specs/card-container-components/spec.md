## ADDED Requirements

### Requirement: Card component provides container structure
The Card component SHALL serve as a container with consistent styling following the design system's surface hierarchy.

#### Scenario: Render basic card
- **WHEN** the Card component is rendered with content
- **THEN** it SHALL display a rounded container (rounded-lg) with surface background color, subtle shadow, and proper padding

#### Scenario: Card follows No-Line rule
- **WHEN** the Card is rendered
- **THEN** it SHALL have no visible border (border-0) relying on background color contrast for definition

#### Scenario: Card with custom className
- **WHEN** the Card is rendered with a className prop
- **THEN** the custom classes SHALL be merged with default card styles

### Requirement: CardHeader component provides title section
The CardHeader component SHALL render a section at the top of the card for title and description.

#### Scenario: Render card header
- **WHEN** CardHeader is rendered as a child of Card
- **THEN** it SHALL display with bottom padding (pb-4) and flex column layout

#### Scenario: Card header with title and description
- **WHEN** CardHeader contains CardTitle and CardDescription
- **THEN** they SHALL be arranged vertically with proper spacing (gap-1.5)

### Requirement: CardTitle component displays card heading
The CardTitle component SHALL render a semantic heading for the card.

#### Scenario: Render card title
- **WHEN** CardTitle is rendered
- **THEN** it SHALL display as a semantic heading (h3 by default) with text-lg font-semibold leading-none tracking-tight

#### Scenario: Card title with custom element
- **WHEN** CardTitle is rendered with as="h2" prop
- **THEN** it SHALL render as an h2 element while maintaining card title styling

### Requirement: CardDescription component displays subtitle text
The CardDescription component SHALL render descriptive text below the card title.

#### Scenario: Render card description
- **WHEN** CardDescription is rendered
- **THEN** it SHALL display with text-sm text-muted-foreground

### Requirement: CardContent component provides main content area
The CardContent component SHALL render the primary content area of the card.

#### Scenario: Render card content
- **WHEN** CardContent is rendered inside Card
- **THEN** it SHALL display with horizontal padding (px-6) and no top padding if following CardHeader

### Requirement: CardFooter component provides action area
The CardFooter component SHALL render a section at the bottom of the card for actions or metadata.

#### Scenario: Render card footer
- **WHEN** CardFooter is rendered as the last child of Card
- **THEN** it SHALL display with top padding (pt-4), flex row layout, and items center-aligned

#### Scenario: Card footer with buttons
- **WHEN** CardFooter contains Button components
- **THEN** buttons SHALL be arranged horizontally with gap-2 spacing

### Requirement: Container components support page layouts
The Container component SHALL provide consistent page-level content wrapping.

#### Scenario: Render container with max width
- **WHEN** Container is rendered
- **THEN** it SHALL have max-width (max-w-7xl), horizontal margins auto (mx-auto), and horizontal padding (px-4 sm:px-6 lg:px-8)

#### Scenario: Container with custom max width
- **WHEN** Container is rendered with size="small"
- **THEN** it SHALL have max-width of max-w-3xl instead of default

### Requirement: PageHeader component provides page-level heading
The PageHeader component SHALL render a page title section with optional description and actions.

#### Scenario: Render page header
- **WHEN** PageHeader is rendered
- **THEN** it SHALL display with bottom margin (mb-8), flex layout between title and actions

#### Scenario: Page header with actions
- **WHEN** PageHeader contains action buttons
- **THEN** they SHALL be aligned to the right side of the header

### Requirement: Stack component provides vertical spacing
The Stack component SHALL provide consistent vertical spacing between child elements.

#### Scenario: Render vertical stack
- **WHEN** Stack is rendered with gap={4}
- **THEN** child elements SHALL have 16px (1rem) vertical spacing between them

#### Scenario: Render horizontal stack
- **WHEN** Stack is rendered with direction="horizontal" and gap={2}
- **THEN** child elements SHALL have 8px (0.5rem) horizontal spacing between them

### Requirement: Separator component provides visual division
The Separator component SHALL render a horizontal or vertical dividing line.

#### Scenario: Render horizontal separator
- **WHEN** Separator is rendered without orientation prop
- **THEN** it SHALL display as a horizontal line (w-full h-px) with bg-border color

#### Scenario: Render vertical separator
- **WHEN** Separator is rendered with orientation="vertical"
- **THEN** it SHALL display as a vertical line (h-full w-px) with bg-border color

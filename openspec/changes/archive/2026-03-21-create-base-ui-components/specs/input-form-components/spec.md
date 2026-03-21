## ADDED Requirements

### Requirement: Input component supports text input
The Input component SHALL render a text input field with proper styling and states.

#### Scenario: Render basic input
- **WHEN** the Input component is rendered without props
- **THEN** it SHALL display a text input with default styling, height of 40px (h-10), and rounded corners (rounded-md)

#### Scenario: Input with placeholder
- **WHEN** the Input is rendered with a placeholder prop
- **THEN** it SHALL display the placeholder text in muted color when empty

#### Scenario: Input with value
- **WHEN** the Input is rendered with a value prop
- **THEN** it SHALL display the provided value in the input field

#### Scenario: Input focus state
- **WHEN** the Input receives focus
- **THEN** it SHALL display a focus ring (ring-2 ring-ring) and border color change

#### Scenario: Input disabled state
- **WHEN** the Input is rendered with disabled={true}
- **THEN** it SHALL have disabled styling (opacity-50, cursor-not-allowed) and not accept input

### Requirement: Input component supports validation states
The Input component SHALL support error and success states with visual indicators.

#### Scenario: Input error state
- **WHEN** the Input is rendered with an error prop or aria-invalid={true}
- **THEN** it SHALL display with destructive border color (border-destructive) and optional error message

#### Scenario: Input with error message
- **WHEN** the Input has an associated error message
- **THEN** the error message SHALL render below the input in destructive color text

### Requirement: Textarea component supports multi-line input
The Textarea component SHALL render a multi-line text input with configurable rows.

#### Scenario: Render textarea with default rows
- **WHEN** the Textarea is rendered without rows prop
- **THEN** it SHALL display with minimum 3 rows (min-h-[80px])

#### Scenario: Render textarea with custom rows
- **WHEN** the Textarea is rendered with rows={5}
- **THEN** it SHALL display with 5 visible rows

#### Scenario: Textarea with resize handle
- **WHEN** the Textarea is rendered
- **THEN** it SHALL allow vertical resizing by default (resize-y) with rounded corners and proper padding

### Requirement: Select component supports dropdown selection
The Select component SHALL render a dropdown with options and support controlled value.

#### Scenario: Render select with options
- **WHEN** the Select is rendered with children option elements
- **THEN** it SHALL display a dropdown with all provided options

#### Scenario: Select with placeholder
- **WHEN** the Select is rendered with a defaultValue or placeholder option
- **THEN** it SHALL display the placeholder when no value is selected

#### Scenario: Select controlled value
- **WHEN** the Select is rendered with value and onChange props
- **THEN** it SHALL display the selected value and call onChange when selection changes

#### Scenario: Select disabled state
- **WHEN** the Select is rendered with disabled={true}
- **THEN** it SHALL display disabled styling and not allow option selection

### Requirement: Checkbox component supports boolean selection
The Checkbox component SHALL render a checkbox input with label support.

#### Scenario: Render unchecked checkbox
- **WHEN** the Checkbox is rendered with checked={false}
- **THEN** it SHALL display an empty checkbox with border styling

#### Scenario: Render checked checkbox
- **WHEN** the Checkbox is rendered with checked={true}
- **THEN** it SHALL display a checked checkbox with primary background and checkmark icon

#### Scenario: Checkbox with label
- **WHEN** the Checkbox is rendered with an associated Label component
- **THEN** clicking the label SHALL toggle the checkbox state

#### Scenario: Checkbox indeterminate state
- **WHEN** the Checkbox is rendered with indeterminate prop
- **THEN** it SHALL display an indeterminate state (horizontal line icon)

### Requirement: Radio Group component supports single selection
The RadioGroup and RadioGroupItem components SHALL support single selection from multiple options.

#### Scenario: Render radio group with items
- **WHEN** RadioGroup is rendered with multiple RadioGroupItem children
- **THEN** it SHALL display a group of radio buttons where only one can be selected

#### Scenario: Radio item selection
- **WHEN** a RadioGroupItem is clicked
- **THEN** it SHALL become selected (show filled circle) and deselect other items in the group

#### Scenario: Radio group with labels
- **WHEN** RadioGroupItems are rendered with associated Label components
- **THEN** clicking a label SHALL select its corresponding radio item

### Requirement: Label component supports form labeling
The Label component SHALL render accessible labels for form inputs.

#### Scenario: Render label for input
- **WHEN** Label is rendered with htmlFor prop matching an input id
- **THEN** it SHALL render a label element that focuses the associated input when clicked

#### Scenario: Required field indicator
- **WHEN** Label is rendered with an associated required input
- **THEN** it SHALL display an asterisk or "(required)" indicator

### Requirement: Form components follow accessibility standards
All form components SHALL meet WCAG 2.1 AA accessibility standards.

#### Scenario: Input has proper ARIA attributes
- **WHEN** an Input has an error
- **THEN** it SHALL have aria-invalid="true" and aria-describedby pointing to the error message

#### Scenario: Select has proper ARIA
- **WHEN** a Select is rendered
- **THEN** it SHALL have proper aria-expanded, aria-haspopup, and aria-labelledby attributes

#### Scenario: Checkbox has proper ARIA
- **WHEN** a Checkbox is rendered
- **THEN** it SHALL have role="checkbox" and aria-checked attributes

#### Scenario: Keyboard navigation in form
- **WHEN** user presses Tab
- **THEN** focus SHALL move sequentially through form fields in logical order

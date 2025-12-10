# UI Elements Specification: Project Creation Workflow

This document outlines the required UI elements for each screen in the "New Project Wizard", aligned with the Product Backlog (V5).

## 1. Common Elements (Global Layout)
These elements appear on every screen of the wizard.

### Desktop (Standard Layout)
*   **Navigation Rail (Left)**:
    *   **Container**: Fixed width (e.g., 80px or 250px expanded).
    *   **Items**:
        *   Step 1: Basics
        *   Step 2: Crew
        *   Step 3: Schedule
        *   Step 4: Inventory
        *   Step 5: Review
    *   **State**: Highlights current step. Past steps are checkmarked. Future steps are disabled or dimmed.
*   **Main Content Area**:
    *   **Container**: `Main` tag. Centered or Fluid width.
*   **Action Bar (Bottom or Sticky Footer)**:
    *   **Container**: `Footer` / Sticky Bar.
    *   **Secondary Action**: "Back" (Text Button or Outlined Button). Hidden on Step 1.
    *   **Primary Action**: "Next" (Filled Button, Yellow). "Creating..." loading state.

### Mobile (Responsive Layout)
*   **Top App Bar**:
    *   **Left**: Back Icon (if applicable) or Menu Icon.
    *   **Center**: Screen Title (e.g., "Step 1/5").
    *   **Right**: "Save Draft" or "Help" icon (Optional).
*   **Progress Indicator**:
    *   **Type**: Linear Progress Bar at the top (below App Bar).
*   **Floating Action Button (FAB)**:
    *   **Role**: Serves as the primary "Next" action on many screens, or specific "Add" actions.

---

## 2. Screen-by-Screen Elements

### Step 1: Project Basics
**Goal**: Initialize the project container. "Get the folder open."
*   **Header**: "New Project" (Display Small).
*   **Form**:
    *   **Project Name Input**:
        *   Type: `OutlinedTextField`.
        *   Label: "Project Name".
        *   Required: Yes.
        *   Placeholder: "e.g., The Big Film 2025".
    *   **Description/Notes Input**:
        *   Type: `OutlinedTextField` (Multiline).
        *   Label: "Notes (Optional)".
        *   Placeholder: "General production team notes...".
*   **Focus**: No date pickers here (per Backlog Story 1.1).

### Step 2: Crew Roster
**Goal**: Populate the list. "People first."
*   **View Toggle**: Segmented Button or Tabs ["List View", "Smart Paste"].
*   **Tab 1: List View (Default)**:
    *   **Empty State**: "No crew added yet. Use Smart Paste or Add Manually."
    *   **Data Table / List**:
        *   Columns: Avatar, Name, Role, Housing Needed? (Toggle), Actions (Edit/Delete).
    *   **Add Button**: "Add Member" (Extended FAB or Icon Button).
*   **Tab 2: Smart Paste**:
    *   **Instruction Text**: "Paste a list of names (one per line)."
    *   **Input**: Large Text Area.
    *   **Action**: "Process List" (Filled Button).
*   **Crew Member Modal (Add/Edit)**:
    *   Name (Text, Required).
    *   Role/Dept (Text/Dropdowns, Optional).
    *   "Requires Housing" (Switch, Default: True).
    *   Notes (Text Area).

### Step 3: Schedule & Logistics
**Goal**: Define the "When".
*   **Header**: "Production Dates".
*   **Date Inputs**:
    *   **Start Date**: Date Picker.
    *   **End Date**: Date Picker.
*   **Visualizer**:
    *   **Timeline**: Horizontal bar showing the selected range.
    *   **Weeks Grid**: Auto-generated read-only view labeled "Week 1", "Week 2", etc. (Story 3.1).
*   **Buffer Settings**:
    *   **Prep Buffer**: Stepper or Number Input (Days before start).
    *   **Wrap Buffer**: Stepper or Number Input (Days after end).

### Step 4: Accommodations Inventory
**Goal**: Define the "Where" (Optional).
*   **Header**: "Housing Blocks".
*   **Main Action**: "Add Property" (Button/Card).
*   **Property List (Repeater)**:
    *   **Card Item**:
        *   Property Name (Text).
        *   Total Rooms/Capacity (Number).
        *   Address/Location (Text, Optional).
        *   Actions: Edit/Delete.
*   **Bypass**: The "Next" button serves as "Skip" if list is empty.

### Step 5: Review & Launch
**Goal**: Confirm and Go.
*   **Header**: "Ready to Launch?".
*   **Summary Cards**:
    *   **Basics**: Name + Description snippet.
    *   **Crew**: Count ("24 Members").
    *   **Schedule**: Start/End Dates, Total Weeks.
    *   **Inventory**: Count ("2 Properties").
*   **Primary Action**: "Create Project" (Large Yellow Button).

# Project Request: Nexus-Brain Monorepo System

## System Overview

I am building a "Second Brain" knowledge management system called **Nexus-Brain**.
The project is structured as an **Nx Monorepo**. I have already initialized the workspace folders, but I need you to generate the code for the libraries and the main application.

## Architecture Rules

1. **Tooling:** Use Nx with TypeScript.
2. **Imports:** Use Nx workspace aliases for all cross-package imports (e.g., `@nexus-brain/ui-components`, `@nexus-brain/utils`).
3. **Component-Based Design:**
   - **Atomic Level:** Shared UI and Utils.
   - **Composite Level:** Feature-X and Feature-Y.
   - **Assembly Level:** The `apps/system` (Next.js) only handles layout and state orchestration. No business logic should live in the `apps` folder.

## Requirements per Package

### 1. `packages/utils` (Shared Logic)

Create at least 3 utility functions:

- A date formatter (e.g., `formatDate`).
- A string manipulator (e.g., `truncateText` or `slugify`).
- A search helper (e.g., a function that filters an array of objects based on a keyword).

### 2. `packages/ui-components` (Shared UI)

Create reusable, stateless UI components:

- `NoteCard`: A card to display a note title, content, and date.
- `AppButton`: A styled button component.
- `SearchBar`: A controlled input field for filtering.

### 3. `packages/feature-x` (The Capture System)

Create a functional feature package:

- Build a `NoteCapture` component.
- It should allow users to input a title and content.
- It must use the `AppButton` from the `ui-components` package.
- It must use a utility from the `utils` package.

### 4. `packages/feature-y` (The Vault System)

Create a functional feature package:

- Build a `NoteVault` component.
- It should display a list of notes using the `NoteCard` component.
- It must implement a search/filter feature using the `SearchBar` and the search helper from the `utils` package.

### 5. `apps/system` (Main Dashboard)

- This is a Next.js application.
- In `page.tsx`, assemble `feature-x` and `feature-y`.
- Manage a shared state (array of notes) here so that notes created in Feature-X appear in Feature-Y.
- Use a clean dashboard layout (Grid or Flexbox).

## Instructions for Codex

Please generate the code for each of these files. Ensure all `index.ts` files (entry points) correctly export the components so they can be imported by other packages.

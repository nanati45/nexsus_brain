# NexusBrain

A "Second Brain" system for capturing and organizing knowledge.

This is an Nx monorepo. The main runnable app is the `system` Next.js app, and
the other top-level projects are shared libraries used by it.

## Structure

- `system`: The main dashboard (Next.js/React).
- `system-e2e`: Cypress end-to-end tests for `system`.
- `ui-components`: Shared components (cards, inputs, search UI).
- `utils`: Shared logic and note types.
- `feature-x`: Note capture feature.
- `feature-y`: Knowledge vault/explorer feature.

## Component orchestration

The feature folders are component libraries, not standalone apps. The `system`
app composes them through an adapter layer:

- `feature-x` exposes the capture component.
- `feature-y` exposes the vault/search component.
- `system/src/app/note-workspace-adapter.tsx` owns app state and maps it into
  each feature component's props.
- `system/src/app/note-workspace-view.tsx` renders the composed workspace from
  that adapter view model.

This keeps feature components reusable while the app layer handles orchestration.

## How to run

Install dependencies:

```sh
npm install
```

Start the main app:

```sh
npm run dev
```

Then open http://localhost:3000.

Useful Nx commands:

```sh
npx nx dev system
npx nx build system
npx nx test system
npx nx run-many -t build
```

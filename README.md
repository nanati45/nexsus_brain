# NexusBrain (Monorepo)

A "Second Brain" system for capturing and organizing knowledge.

## Structure

- `apps/system`: The main dashboard (Next.js/React).
- `packages/ui-components`: Shared components (Cards, Inputs).
- `packages/utils`: Logic (Search filters, Date helpers).
- `packages/feature-x`: Note Capture System.
- `packages/feature-y`: Knowledge Vault/Explorer.

## How to run

- Build everything: `npx nx run-many -t build`
- Run System: `npx nx serve system`

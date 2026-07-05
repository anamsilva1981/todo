# Implementation Plan: Task Manager

**Branch**: `001-task-manager` | **Date**: 2026-07-05 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-task-manager/spec.md`

## Summary

Build a small personal task manager for daily activities. Users can create tasks
with title, description, due date, priority, and status; update status; and
filter visible tasks by priority, status, and due date. The implementation uses
TypeScript, Next.js with React and App Router, browser-local persistence through
localStorage, and no automated tests.

## Technical Context

**Language/Version**: TypeScript with the current stable Next.js App Router
release and the React version paired with that Next.js release

**Primary Dependencies**: Next.js, React, React DOM; no UI library, state
management library, date library, or test framework

**Storage**: Browser localStorage under a single versioned key for tasks

**Validation**: Manual validation only; automated tests are not used in this project

**Target Platform**: Modern desktop and mobile browsers supported by Next.js

**Project Type**: Single Next.js web application using App Router

**Performance Goals**: Users can create, update, and filter tasks with visible
feedback in under 10 seconds for a personal task list

**Constraints**: App Router navigation only; client-side task state for
localStorage access; minimal external dependencies; no automated test tooling;
must remain small and simple

**Scale/Scope**: Single-user personal task manager for day-to-day activities;
expected task count is small enough for in-memory filtering in the browser

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Clean Code First: PASS. Plan separates task types, storage helpers, filtering,
  and UI components with descriptive names.
- Small and Simple Scope: PASS. Single app route, no backend, no authentication,
  no database, and no speculative editing workflows beyond status updates.
- Manual Validation Only: PASS. No automated tests, test frameworks, or coverage
  gates are included.
- Readable Structure: PASS. Source layout follows App Router plus small
  feature-specific component and helper files.
- Minimal Dependencies: PASS. Runtime dependencies are limited to Next.js,
  React, and React DOM.

## Project Structure

### Documentation (this feature)

```text
specs/001-task-manager/
|-- plan.md
|-- research.md
|-- data-model.md
|-- quickstart.md
|-- contracts/
|   `-- ui-contract.md
`-- tasks.md
```

### Source Code (repository root)

```text
app/
|-- globals.css
|-- layout.tsx
`-- page.tsx

components/
|-- TaskFilters.tsx
|-- TaskForm.tsx
`-- TaskList.tsx

lib/
|-- task-filters.ts
`-- task-storage.ts

types/
`-- task.ts

package.json
next.config.ts
tsconfig.json
```

**Structure Decision**: Use the App Router `app/` directory at the repository
root for navigation and rendering. Keep reusable UI in `components/`, pure
filtering and localStorage helpers in `lib/`, and shared task types in `types/`.
This avoids a larger `src/` or multi-package structure for a small app.

## Complexity Tracking

No constitution violations require justification.

## Phase 0: Research Summary

Research completed in [research.md](./research.md). No unresolved technical
clarifications remain.

## Phase 1: Design Summary

- Data model is documented in [data-model.md](./data-model.md).
- UI behavior contract is documented in [contracts/ui-contract.md](./contracts/ui-contract.md).
- Manual validation guide is documented in [quickstart.md](./quickstart.md).
- Agent context update script was not present in `.specify/scripts/powershell`;
  no agent context file was generated.

## Post-Design Constitution Check

- Clean Code First: PASS. Design keeps form, filters, list, type definitions,
  storage, and filtering logic in focused files.
- Small and Simple Scope: PASS. Design remains a single-route local app.
- Manual Validation Only: PASS. Quickstart uses manual scenarios only.
- Readable Structure: PASS. File ownership boundaries are direct and shallow.
- Minimal Dependencies: PASS. No dependency beyond Next.js, React, and React DOM
  was added by the design.

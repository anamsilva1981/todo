# Tasks: Task Manager

**Input**: Design documents from `/specs/001-task-manager/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Automated Tests**: Do not create automated test tasks. This project uses manual validation only.

**Organization**: Tasks are grouped by user story to enable independent implementation and manual validation of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Next.js App Router**: `app/` at repository root
- **Shared UI**: `components/`
- **Shared helpers**: `lib/`
- **Shared types**: `types/`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the smallest Next.js App Router project structure needed for the feature.

- [X] T001 Create `package.json` with Next.js, React, React DOM, TypeScript scripts, and no test script
- [X] T002 [P] Create `tsconfig.json` configured for a TypeScript Next.js App Router project
- [X] T003 [P] Create `next.config.ts` with the minimal Next.js configuration
- [X] T004 [P] Create `app/layout.tsx` with application metadata and root HTML structure
- [X] T005 [P] Create `app/globals.css` with base responsive styling and design tokens

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Define shared task contracts, persistence, and filtering helpers before user stories.

**CRITICAL**: No user story work can begin until this phase is complete.

- [X] T006 Create task, priority, status, and filter TypeScript types in `types/task.ts`
- [X] T007 Create localStorage load/save helpers with version handling in `lib/task-storage.ts`
- [X] T008 [P] Create pure task filtering helpers in `lib/task-filters.ts`
- [X] T009 Create the client-side application shell in `app/page.tsx` with initial task and filter state

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Create Daily Tasks (Priority: P1) MVP

**Goal**: Users can create a task with title, description, due date, priority, and status, then see it in the list.

**Manual Validation**: Add a task with all required fields and verify that it appears with the same information.

### Implementation for User Story 1

- [X] T010 [P] [US1] Create task creation form fields and submit UI in `components/TaskForm.tsx`
- [X] T011 [P] [US1] Create task display list for title, description, due date, priority, and status in `components/TaskList.tsx`
- [X] T012 [US1] Wire task creation, validation messages, form reset, and localStorage persistence in `app/page.tsx`
- [X] T013 [US1] Add required title and required due date validation behavior in `components/TaskForm.tsx`
- [X] T014 [US1] Manually validate quickstart scenarios 1, 2, and 3 using `specs/001-task-manager/quickstart.md`

**Checkpoint**: User Story 1 is fully functional and manually validated independently.

---

## Phase 4: User Story 2 - Track Task Progress (Priority: P2)

**Goal**: Users can update each task status between pending, in progress, and completed.

**Manual Validation**: Change a task from pending to in progress and then to completed, verifying each visible update.

### Implementation for User Story 2

- [X] T015 [US2] Add per-task status selection control in `components/TaskList.tsx`
- [X] T016 [US2] Implement status update handling, updatedAt changes, and localStorage persistence in `app/page.tsx`
- [X] T017 [US2] Manually validate quickstart scenario 4 using `specs/001-task-manager/quickstart.md`

**Checkpoint**: User Stories 1 and 2 both work and are manually validated independently.

---

## Phase 5: User Story 3 - Filter Tasks (Priority: P3)

**Goal**: Users can filter visible tasks by priority, status, due date, or a combination of those filters.

**Manual Validation**: Create tasks with varied priorities, statuses, and due dates, apply each filter, combine filters, clear filters, and verify empty states.

### Implementation for User Story 3

- [X] T018 [P] [US3] Create priority, status, due date, and clear filter controls in `components/TaskFilters.tsx`
- [X] T019 [US3] Connect active filters and filtered task rendering in `app/page.tsx`
- [X] T020 [US3] Add no-tasks and no-matching-tasks empty states in `components/TaskList.tsx`
- [X] T021 [US3] Manually validate quickstart scenarios 5, 6, 7, 8, and 9 using `specs/001-task-manager/quickstart.md`

**Checkpoint**: All user stories work and have been manually validated.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improve readability, accessibility, responsive behavior, and documentation without expanding scope.

- [X] T022 [P] Review labels, keyboard flow, and form feedback accessibility in `components/TaskForm.tsx`
- [X] T023 [P] Review labels, keyboard flow, and filter control accessibility in `components/TaskFilters.tsx`
- [X] T024 [P] Polish task card spacing, long text wrapping, and responsive layout in `app/globals.css`
- [X] T025 Refactor duplicated labels or option arrays into shared constants in `types/task.ts`
- [X] T026 Run the full manual validation checklist from `specs/001-task-manager/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed sequentially in priority order (P1 -> P2 -> P3)
  - Limited parallel work is possible where tasks touch different files
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependency on other stories
- **User Story 2 (P2)**: Depends on User Story 1 task list and page state
- **User Story 3 (P3)**: Depends on existing task list, page state, and status behavior

### Within Each User Story

- Shared types before helpers
- Helpers before page integration
- UI components before page wiring when possible
- Manual validation before moving to the next priority

### Parallel Opportunities

- T002, T003, T004, and T005 can run in parallel after T001
- T008 can run in parallel with T007 after T006
- T010 and T011 can run in parallel after Phase 2
- T018 can run in parallel with review of existing US1/US2 behavior after Phase 4
- T022, T023, and T024 can run in parallel during Polish

---

## Parallel Example: User Story 1

```bash
# Work on separate files for User Story 1:
Task: "Create task creation form fields and submit UI in components/TaskForm.tsx"
Task: "Create task display list for title, description, due date, priority, and status in components/TaskList.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Stop and manually validate task creation plus required-field validation
5. Continue only after the MVP behaves correctly

### Incremental Delivery

1. Complete Setup + Foundational -> Foundation ready
2. Add User Story 1 -> Manually validate creation -> MVP ready
3. Add User Story 2 -> Manually validate status updates
4. Add User Story 3 -> Manually validate filters and empty states
5. Polish accessibility, responsive behavior, and readability

### Single Developer Strategy

1. Implement tasks in ID order unless a listed parallel opportunity is useful
2. Keep each task focused on the exact file path named in the task
3. Run manual validation at each checkpoint before continuing

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to a specific user story for traceability
- Each user story is independently completable and manually validatable
- Do not add automated tests, test frameworks, coverage gates, or browser automation
- Commit after each task or logical group
- Stop at each checkpoint to validate the current story independently
- Avoid: vague tasks, same-file parallel work, extra libraries, backend scope, authentication, database persistence, or cross-device sync

# Feature Specification: Task Manager

**Feature Branch**: `001-task-manager`

**Created**: 2026-07-05

**Status**: Draft

**Input**: User description: "construa uma aplicação que me ajude a gerenciar minhas tarefas para acompanhar atividades do dia a dia. As tarefas devem ter titulo, descrição, data de conclusão, prioridade e status(pendente, em andamento, concluida). Inclua filtros para visualizar tarefas por prioridade, status ou data"

## User Scenarios & Manual Validation *(mandatory)*

### User Story 1 - Create Daily Tasks (Priority: P1)

As a person managing daily activities, I want to register a task with title,
description, due date, priority, and status so that I can capture what needs to
be done in one organized place.

**Why this priority**: Creating complete tasks is the foundation for every other
workflow in the application.

**Manual Validation**: Add a task with all required fields and verify that it is
visible in the task list with the same information entered.

**Acceptance Scenarios**:

1. **Given** the task list is open, **When** the user creates a task with title,
   description, due date, priority, and status, **Then** the task appears in the
   list with all entered details.
2. **Given** the user attempts to create a task without a title, **When** the
   user submits the task, **Then** the application prevents saving and explains
   that the title is required.

---

### User Story 2 - Track Task Progress (Priority: P2)

As a person following daily responsibilities, I want to see and update each
task's status so that I can understand what is pending, in progress, or already
completed.

**Why this priority**: Status tracking turns the task list into a daily progress
tool instead of a static note list.

**Manual Validation**: Change a task from pending to in progress and then to
completed, verifying that the visible status updates each time.

**Acceptance Scenarios**:

1. **Given** an existing task with status "pending", **When** the user changes
   the status to "in progress", **Then** the task displays the new status.
2. **Given** an existing task with status "in progress", **When** the user
   changes the status to "completed", **Then** the task displays as completed.

---

### User Story 3 - Filter Tasks (Priority: P3)

As a person reviewing daily work, I want to filter tasks by priority, status, or
due date so that I can focus on the tasks that matter at the moment.

**Why this priority**: Filtering improves usefulness once there are multiple
tasks and different levels of urgency or progress.

**Manual Validation**: Create tasks with different priorities, statuses, and due
dates, then apply each filter type and verify that only matching tasks remain
visible.

**Acceptance Scenarios**:

1. **Given** tasks with different priorities exist, **When** the user filters by
   one priority, **Then** only tasks with that priority are shown.
2. **Given** tasks with different statuses exist, **When** the user filters by
   one status, **Then** only tasks with that status are shown.
3. **Given** tasks with different due dates exist, **When** the user filters by
   a selected date, **Then** only tasks due on that date are shown.

---

### Edge Cases

- A task title is empty or only whitespace.
- A due date is missing.
- A due date is in the past.
- No tasks match the selected filters.
- Multiple filters are applied at the same time.
- A task has a long title or description.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST allow users to create tasks.
- **FR-002**: Each task MUST include a title, description, due date, priority,
  and status.
- **FR-003**: The system MUST require a non-empty title before a task can be
  saved.
- **FR-004**: The system MUST require a due date before a task can be saved.
- **FR-005**: The system MUST support priority values of low, medium, and high.
- **FR-006**: The system MUST support status values of pending, in progress, and
  completed.
- **FR-007**: Users MUST be able to view all saved tasks in a list.
- **FR-008**: Users MUST be able to update a task's status after creation.
- **FR-009**: Users MUST be able to filter visible tasks by priority.
- **FR-010**: Users MUST be able to filter visible tasks by status.
- **FR-011**: Users MUST be able to filter visible tasks by due date.
- **FR-012**: The system MUST allow priority, status, and due date filters to be
  cleared so the full task list can be viewed again.
- **FR-013**: When no tasks match the active filters, the system MUST show a
  clear empty-state message.
- **FR-014**: The system MUST present validation messages in plain language near
  the action the user is trying to complete.

### Key Entities

- **Task**: A daily activity item. Key attributes are title, description, due
  date, priority, and status.
- **Filter**: A user-selected viewing constraint. Filterable attributes are
  priority, status, and due date.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can create a complete task in under 1 minute.
- **SC-002**: Users can update a task's status in under 10 seconds.
- **SC-003**: Users can apply a priority, status, or due date filter in under
  10 seconds.
- **SC-004**: Users can identify pending high-priority tasks for a selected day
  without reviewing unrelated tasks.
- **SC-005**: At least 90% of manual validation scenarios for creating,
  updating, and filtering tasks can be completed without assistance.

## Assumptions

- The application is intended for a single person managing personal day-to-day
  activities.
- Task priority uses three simple levels: low, medium, and high.
- Due date filtering matches tasks by calendar date.
- Applying multiple filters narrows the task list to tasks matching all selected
  filters.
- Editing full task details beyond status changes is outside the initial scope
  unless added in a later specification.
- Automated tests are outside the project workflow; validation is manual per the
  project constitution.

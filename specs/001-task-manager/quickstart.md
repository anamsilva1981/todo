# Quickstart: Task Manager Manual Validation

## Prerequisites

- Node.js 20.9 or newer
- Project dependencies installed with `npm install`

## Run

```bash
npm run dev
```

Open `http://localhost:3000`.

## Manual Validation Scenarios

### Scenario 1: Create a Task

1. Open the task manager.
2. Enter a title, description, due date, priority, and status.
3. Submit the form.

Expected outcome: the new task appears in the list with the entered values.

### Scenario 2: Required Title Validation

1. Leave the title empty.
2. Fill the due date and other fields.
3. Submit the form.

Expected outcome: the task is not saved and a clear title validation message is
shown.

### Scenario 3: Required Due Date Validation

1. Enter a title.
2. Leave due date empty.
3. Submit the form.

Expected outcome: the task is not saved and a clear due date validation message
is shown.

### Scenario 4: Update Status

1. Create a task with status pending.
2. Change the status to in progress.
3. Change the status to completed.

Expected outcome: each selected status is shown immediately and remains after
refreshing the page.

### Scenario 5: Filter by Priority

1. Create at least two tasks with different priorities.
2. Select one priority filter.

Expected outcome: only tasks with the selected priority are visible.

### Scenario 6: Filter by Status

1. Create at least two tasks with different statuses.
2. Select one status filter.

Expected outcome: only tasks with the selected status are visible.

### Scenario 7: Filter by Due Date

1. Create at least two tasks with different due dates.
2. Select one due date filter.

Expected outcome: only tasks due on the selected date are visible.

### Scenario 8: Combine and Clear Filters

1. Apply priority, status, and due date filters together.
2. Confirm only matching tasks remain visible.
3. Clear filters.

Expected outcome: all saved tasks are visible again.

### Scenario 9: No Matching Tasks

1. Apply filters that match no saved task.

Expected outcome: a clear empty-state message explains that no tasks match the
current filters.

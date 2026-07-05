# UI Contract: Task Manager

This feature has no server API. The contract is the user-facing behavior exposed
by the App Router page at `/`.

## Route: `/`

### Purpose

Display the task manager, including task creation, task list, status updates,
and filters.

### Visible Regions

- Task creation form
- Filter controls
- Task list
- Empty-state message when no tasks exist or no tasks match filters

## Task Creation Form

### Inputs

| Input | Required | Accepted Values |
|-------|----------|-----------------|
| Title | yes | Non-empty text |
| Description | yes | Text, including empty text if the user leaves it blank |
| Due date | yes | Calendar date |
| Priority | yes | Low, medium, high |
| Status | yes | Pending, in progress, completed |

### Behavior

- Submitting a valid form adds the task to the list.
- Submitting without a title shows a plain-language validation message.
- Submitting without a due date shows a plain-language validation message.
- After a successful submit, the form resets to defaults suitable for adding
  another task.

## Task List

### Display Requirements

Each visible task shows:

- Title
- Description
- Due date
- Priority
- Status

### Status Update

- Each task exposes a status control.
- Changing the status updates the task immediately.
- The updated status persists after refreshing the page.

## Filters

### Controls

- Priority filter: all, low, medium, high
- Status filter: all, pending, in progress, completed
- Due date filter: all dates or one selected calendar date
- Clear filters action

### Behavior

- Priority filter shows only tasks with the selected priority.
- Status filter shows only tasks with the selected status.
- Due date filter shows only tasks due on the selected date.
- Multiple active filters combine with AND behavior.
- Clearing filters restores the full task list.
- If no tasks match, show a clear empty-state message.

## Persistence Contract

- Tasks persist locally in the same browser after refresh.
- Clearing browser storage may remove all saved tasks.
- No account, server sync, or cross-device behavior is promised in this version.

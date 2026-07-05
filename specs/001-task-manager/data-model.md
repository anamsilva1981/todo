# Data Model: Task Manager

## Entity: Task

Represents one daily activity the user wants to track.

### Fields

| Field | Type | Required | Rules |
|-------|------|----------|-------|
| id | string | yes | Unique stable identifier generated when the task is created |
| title | string | yes | Trimmed value must contain at least one character |
| description | string | yes | May be empty text, but the field is shown and editable during creation |
| dueDate | string | yes | Calendar date in `YYYY-MM-DD` format |
| priority | enum | yes | One of `low`, `medium`, `high` |
| status | enum | yes | One of `pending`, `in-progress`, `completed` |
| createdAt | string | yes | ISO timestamp recorded when the task is created |
| updatedAt | string | yes | ISO timestamp updated when status changes |

### Validation

- Title must not be empty after trimming whitespace.
- Due date must be present.
- Priority must be one of the allowed priority values.
- Status must be one of the allowed status values.
- Past due dates are allowed so the user can capture overdue tasks.

### State Transitions

```text
pending -> in-progress -> completed
pending -> completed
in-progress -> pending
completed -> in-progress
completed -> pending
```

All status values remain selectable so the user can correct mistakes.

## Value Object: TaskFilter

Represents the active constraints used to display a subset of tasks.

### Fields

| Field | Type | Required | Rules |
|-------|------|----------|-------|
| priority | enum or empty | no | Empty means all priorities |
| status | enum or empty | no | Empty means all statuses |
| dueDate | string or empty | no | Empty means all dates; otherwise `YYYY-MM-DD` |

### Filtering Rule

When multiple filters are active, a task must match all active filters to remain
visible.

## Persistence Shape

Tasks are stored in localStorage under a versioned key.

```json
{
  "version": 1,
  "tasks": [
    {
      "id": "task_123",
      "title": "Pay bills",
      "description": "Electricity and internet",
      "dueDate": "2026-07-05",
      "priority": "high",
      "status": "pending",
      "createdAt": "2026-07-05T10:00:00.000Z",
      "updatedAt": "2026-07-05T10:00:00.000Z"
    }
  ]
}
```

If stored data is missing, unreadable, or from an unsupported version, the app
starts with an empty task list and allows the user to continue.

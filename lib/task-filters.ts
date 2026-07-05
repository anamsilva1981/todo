import type { Task, TaskFilter } from "@/types/task";

export function filterTasks(tasks: Task[], filters: TaskFilter): Task[] {
  return tasks.filter((task) => {
    const matchesPriority = !filters.priority || task.priority === filters.priority;
    const matchesStatus = !filters.status || task.status === filters.status;
    const matchesDueDate = !filters.dueDate || task.dueDate === filters.dueDate;

    return matchesPriority && matchesStatus && matchesDueDate;
  });
}

export function hasActiveFilters(filters: TaskFilter): boolean {
  return Boolean(filters.priority || filters.status || filters.dueDate);
}

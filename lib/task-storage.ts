import type { Task } from "@/types/task";
import { PRIORITIES, STATUSES } from "@/types/task";

const STORAGE_KEY = "todo.tasks.v1";
const STORAGE_VERSION = 1;

type StoredTasks = {
  version: number;
  tasks: Task[];
};

function isTask(value: unknown): value is Task {
  if (!value || typeof value !== "object") {
    return false;
  }

  const task = value as Task;

  return (
    typeof task.id === "string" &&
    typeof task.title === "string" &&
    typeof task.description === "string" &&
    typeof task.dueDate === "string" &&
    PRIORITIES.includes(task.priority) &&
    STATUSES.includes(task.status) &&
    typeof task.createdAt === "string" &&
    typeof task.updatedAt === "string"
  );
}

export function loadTasks(): Task[] {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return [];
    }

    const parsed = JSON.parse(stored) as StoredTasks;

    if (parsed.version !== STORAGE_VERSION || !Array.isArray(parsed.tasks)) {
      return [];
    }

    return parsed.tasks.filter(isTask);
  } catch {
    return [];
  }
}

export function saveTasks(tasks: Task[]): void {
  const payload: StoredTasks = {
    version: STORAGE_VERSION,
    tasks
  };

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

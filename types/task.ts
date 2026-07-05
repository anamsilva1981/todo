export const PRIORITIES = ["low", "medium", "high"] as const;
export const STATUSES = ["pending", "in-progress", "completed"] as const;

export type Priority = (typeof PRIORITIES)[number];
export type TaskStatus = (typeof STATUSES)[number];

export type Task = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: Priority;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
};

export type TaskFilter = {
  priority: Priority | "";
  status: TaskStatus | "";
  dueDate: string;
};

export type NewTaskInput = {
  title: string;
  description: string;
  dueDate: string;
  priority: Priority;
  status: TaskStatus;
};

export const PRIORITY_LABELS: Record<Priority, string> = {
  low: "Baixa",
  medium: "Media",
  high: "Alta"
};

export const STATUS_LABELS: Record<TaskStatus, string> = {
  pending: "Pendente",
  "in-progress": "Em andamento",
  completed: "Concluida"
};

export const DEFAULT_FILTERS: TaskFilter = {
  priority: "",
  status: "",
  dueDate: ""
};

export const DEFAULT_TASK_INPUT: NewTaskInput = {
  title: "",
  description: "",
  dueDate: "",
  priority: "medium",
  status: "pending"
};

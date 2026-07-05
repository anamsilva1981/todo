"use client";

import {
  PRIORITY_LABELS,
  STATUSES,
  STATUS_LABELS,
  type Task,
  type TaskStatus
} from "@/types/task";

type TaskListProps = {
  tasks: Task[];
  totalTasks: number;
  hasFilters: boolean;
  onStatusChange: (taskId: string, status: TaskStatus) => void;
};

function formatDate(date: string) {
  const [year, month, day] = date.split("-");

  if (!year || !month || !day) {
    return date;
  }

  return `${day}/${month}/${year}`;
}

export function TaskList({ tasks, totalTasks, hasFilters, onStatusChange }: TaskListProps) {
  if (totalTasks === 0) {
    return (
      <div className="empty-state">
        Nenhuma tarefa cadastrada ainda. Crie a primeira tarefa para acompanhar seu dia.
      </div>
    );
  }

  if (tasks.length === 0 && hasFilters) {
    return (
      <div className="empty-state">
        Nenhuma tarefa corresponde aos filtros atuais. Limpe os filtros para ver tudo novamente.
      </div>
    );
  }

  return (
    <div className="task-list" aria-live="polite">
      {tasks.map((task) => (
        <article className="task-card" key={task.id}>
          <div className="task-card__top">
            <div>
              <h3>{task.title}</h3>
              <p>{task.description || "Sem descricao."}</p>
            </div>

            <div className="field task-card__status">
              <label htmlFor={`status-${task.id}`}>Status</label>
              <select
                id={`status-${task.id}`}
                value={task.status}
                onChange={(event) => onStatusChange(task.id, event.target.value as TaskStatus)}
              >
                {STATUSES.map((status) => (
                  <option key={status} value={status}>
                    {STATUS_LABELS[status]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="badges" aria-label="Detalhes da tarefa">
            <span className={`badge badge--${task.priority}`}>
              Prioridade {PRIORITY_LABELS[task.priority]}
            </span>
            <span className="badge">Conclusao {formatDate(task.dueDate)}</span>
            <span className="badge">{STATUS_LABELS[task.status]}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

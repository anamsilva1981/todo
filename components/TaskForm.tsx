"use client";

import { FormEvent, useState } from "react";
import {
  DEFAULT_TASK_INPUT,
  PRIORITIES,
  PRIORITY_LABELS,
  STATUSES,
  STATUS_LABELS,
  type NewTaskInput
} from "@/types/task";

type TaskFormProps = {
  onCreateTask: (task: NewTaskInput) => void;
};

type FormErrors = {
  title?: string;
  dueDate?: string;
};

export function TaskForm({ onCreateTask }: TaskFormProps) {
  const [errors, setErrors] = useState<FormErrors>({});

  function clearError(field: keyof FormErrors) {
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function validate(input: NewTaskInput): FormErrors {
    const nextErrors: FormErrors = {};

    if (!input.title.trim()) {
      nextErrors.title = "Informe um titulo para salvar a tarefa.";
    }

    if (!input.dueDate) {
      nextErrors.dueDate = "Informe uma data de conclusao.";
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const input: NewTaskInput = {
      title: String(formData.get("title") ?? ""),
      description: String(formData.get("description") ?? ""),
      dueDate: String(formData.get("dueDate") ?? ""),
      priority: String(formData.get("priority") ?? DEFAULT_TASK_INPUT.priority) as NewTaskInput["priority"],
      status: String(formData.get("status") ?? DEFAULT_TASK_INPUT.status) as NewTaskInput["status"]
    };

    const nextErrors = validate(input);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    onCreateTask({
      ...input,
      title: input.title.trim(),
      description: input.description.trim()
    });
    event.currentTarget.reset();
  }

  return (
    <section className="panel" aria-labelledby="task-form-title">
      <div className="panel__header">
        <h2 id="task-form-title">Nova tarefa</h2>
        <p>Registre uma atividade com prioridade, status e data de conclusao.</p>
      </div>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="task-title">Titulo</label>
          <input
            id="task-title"
            name="title"
            onInput={() => clearError("title")}
            aria-describedby={errors.title ? "task-title-error" : undefined}
            aria-invalid={Boolean(errors.title)}
          />
          {errors.title ? (
            <span className="field__error" id="task-title-error">
              {errors.title}
            </span>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor="task-description">Descricao</label>
          <textarea
            id="task-description"
            name="description"
          />
        </div>

        <div className="field">
          <label htmlFor="task-due-date">Data de conclusao</label>
          <input
            id="task-due-date"
            name="dueDate"
            type="date"
            onInput={() => clearError("dueDate")}
            aria-describedby={errors.dueDate ? "task-due-date-error" : undefined}
            aria-invalid={Boolean(errors.dueDate)}
          />
          {errors.dueDate ? (
            <span className="field__error" id="task-due-date-error">
              {errors.dueDate}
            </span>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor="task-priority">Prioridade</label>
          <select
            id="task-priority"
            name="priority"
            defaultValue={DEFAULT_TASK_INPUT.priority}
          >
            {PRIORITIES.map((priority) => (
              <option key={priority} value={priority}>
                {PRIORITY_LABELS[priority]}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="task-status">Status</label>
          <select
            id="task-status"
            name="status"
            defaultValue={DEFAULT_TASK_INPUT.status}
          >
            {STATUSES.map((status) => (
              <option key={status} value={status}>
                {STATUS_LABELS[status]}
              </option>
            ))}
          </select>
        </div>

        <button className="button button--primary" type="submit">
          Adicionar tarefa
        </button>
      </form>
    </section>
  );
}

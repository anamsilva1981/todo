"use client";

import { useEffect, useMemo, useState } from "react";
import { TaskFilters } from "@/components/TaskFilters";
import { TaskForm } from "@/components/TaskForm";
import { TaskList } from "@/components/TaskList";
import { filterTasks, hasActiveFilters } from "@/lib/task-filters";
import { loadTasks, saveTasks } from "@/lib/task-storage";
import {
  DEFAULT_FILTERS,
  type NewTaskInput,
  type Task,
  type TaskFilter,
  type TaskStatus
} from "@/types/task";

function createTask(input: NewTaskInput): Task {
  const now = new Date().toISOString();

  return {
    id: `task_${crypto.randomUUID()}`,
    ...input,
    createdAt: now,
    updatedAt: now
  };
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState<TaskFilter>(DEFAULT_FILTERS);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTasks(loadTasks());
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      saveTasks(tasks);
    }
  }, [loaded, tasks]);

  const visibleTasks = useMemo(() => filterTasks(tasks, filters), [filters, tasks]);
  const activeFilters = hasActiveFilters(filters);
  const completedCount = tasks.filter((task) => task.status === "completed").length;
  const inProgressCount = tasks.filter((task) => task.status === "in-progress").length;
  const pendingCount = tasks.filter((task) => task.status === "pending").length;

  function handleCreateTask(input: NewTaskInput) {
    setTasks((currentTasks) => [createTask(input), ...currentTasks]);
  }

  function handleStatusChange(taskId: string, status: TaskStatus) {
    const updatedAt = new Date().toISOString();

    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status,
              updatedAt
            }
          : task
      )
    );
  }

  return (
    <main className="page">
      <div className="page__inner">
        <header className="page__header">
          <div>
            <p className="eyebrow">Tarefas do dia a dia</p>
            <h1>Todo</h1>
            <p className="page__summary">
              Organize atividades com prioridade, status e data de conclusao. Tudo fica salvo
              localmente neste navegador.
            </p>
          </div>

          <div className="stats" aria-label="Resumo das tarefas">
            <div className="stat">
              <span className="stat__value">{pendingCount}</span>
              <span className="stat__label">Pendentes</span>
            </div>
            <div className="stat">
              <span className="stat__value">{inProgressCount}</span>
              <span className="stat__label">Em andamento</span>
            </div>
            <div className="stat">
              <span className="stat__value">{completedCount}</span>
              <span className="stat__label">Concluidas</span>
            </div>
          </div>
        </header>

        <div className="layout">
          <TaskForm onCreateTask={handleCreateTask} />

          <section className="task-area" aria-label="Tarefas e filtros">
            <TaskFilters filters={filters} onFiltersChange={setFilters} />
            <TaskList
              tasks={visibleTasks}
              totalTasks={tasks.length}
              hasFilters={activeFilters}
              onStatusChange={handleStatusChange}
            />
          </section>
        </div>
      </div>
    </main>
  );
}

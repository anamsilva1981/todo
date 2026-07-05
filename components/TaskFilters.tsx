"use client";

import {
  DEFAULT_FILTERS,
  PRIORITIES,
  PRIORITY_LABELS,
  STATUSES,
  STATUS_LABELS,
  type TaskFilter
} from "@/types/task";

type TaskFiltersProps = {
  filters: TaskFilter;
  onFiltersChange: (filters: TaskFilter) => void;
};

export function TaskFilters({ filters, onFiltersChange }: TaskFiltersProps) {
  function updateFilter<K extends keyof TaskFilter>(field: K, value: TaskFilter[K]) {
    onFiltersChange({ ...filters, [field]: value });
  }

  return (
    <section className="panel" aria-labelledby="filters-title">
      <div className="panel__header">
        <h2 id="filters-title">Filtros</h2>
        <p>Combine prioridade, status e data para focar no que importa agora.</p>
      </div>

      <div className="filters">
        <div className="field">
          <label htmlFor="filter-priority">Prioridade</label>
          <select
            id="filter-priority"
            value={filters.priority}
            onChange={(event) => updateFilter("priority", event.target.value as TaskFilter["priority"])}
          >
            <option value="">Todas</option>
            {PRIORITIES.map((priority) => (
              <option key={priority} value={priority}>
                {PRIORITY_LABELS[priority]}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="filter-status">Status</label>
          <select
            id="filter-status"
            value={filters.status}
            onChange={(event) => updateFilter("status", event.target.value as TaskFilter["status"])}
          >
            <option value="">Todos</option>
            {STATUSES.map((status) => (
              <option key={status} value={status}>
                {STATUS_LABELS[status]}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="filter-date">Data</label>
          <input
            id="filter-date"
            type="date"
            value={filters.dueDate}
            onChange={(event) => updateFilter("dueDate", event.target.value)}
          />
        </div>

        <button
          className="button button--secondary"
          type="button"
          onClick={() => onFiltersChange(DEFAULT_FILTERS)}
        >
          Limpar filtros
        </button>
      </div>
    </section>
  );
}

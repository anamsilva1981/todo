<!--
Sync Impact Report
Version change: template -> 1.0.0
Modified principles:
- PRINCIPLE_1_NAME -> I. Clean Code First
- PRINCIPLE_2_NAME -> II. Small and Simple Scope
- PRINCIPLE_3_NAME -> III. Manual Validation Only
- PRINCIPLE_4_NAME -> IV. Readable Structure
- PRINCIPLE_5_NAME -> V. Minimal Dependencies
Added sections:
- Project Constraints
- Development Workflow
Removed sections:
- None
Templates requiring updates:
- UPDATED .specify/templates/plan-template.md
- UPDATED .specify/templates/spec-template.md
- UPDATED .specify/templates/tasks-template.md
- NOT PRESENT .specify/templates/commands/*.md
- UPDATED runtime guidance files checked; no blocking template references remain
Follow-up TODOs:
- None
-->
# Todo Constitution

## Core Principles

### I. Clean Code First
Code MUST be easy to read before it is clever. Names MUST describe intent,
functions MUST stay small, and duplicated logic MUST be extracted only when the
shared behavior is real. Comments MUST explain non-obvious decisions, not repeat
what the code already says. Rationale: this project is small enough that clarity
and directness are the primary quality controls.

### II. Small and Simple Scope
Every feature MUST choose the smallest useful implementation that satisfies the
current specification. New layers, frameworks, abstractions, background jobs,
or infrastructure MUST be justified by an immediate requirement in the plan.
Rationale: the project is intended to remain small, approachable, and cheap to
change.

### III. Manual Validation Only
The project MUST NOT introduce automated test suites, test frameworks, coverage
gates, or generated test tasks. Each feature MUST instead define concise manual
validation steps with expected outcomes in its plan, quickstart, or task list.
Rationale: the project explicitly optimizes for a lightweight workflow where
human validation is sufficient.

### IV. Readable Structure
Files and directories MUST be organized by the simplest recognizable ownership
boundary for the feature. A file MUST NOT mix unrelated responsibilities, and a
new module MUST have a clear reason to exist. Rationale: simple structure keeps
navigation fast and makes future changes less risky.

### V. Minimal Dependencies
Dependencies MUST be added only when they remove more complexity than they add.
Before adding a dependency, the plan MUST record why built-in language or
existing project capabilities are insufficient. Rationale: each dependency
increases maintenance, upgrade, and comprehension cost.

## Project Constraints

The project MUST remain a small application with a minimal runtime footprint.
Feature work MUST avoid speculative extensibility, unused configuration,
unnecessary persistence, and multi-package structure unless the specification
requires them. User-facing behavior MUST be verifiable through manual scenarios
and acceptance criteria, not through automated tests.

## Development Workflow

Planning MUST include a constitution check covering clean code, simplicity,
manual validation, readable structure, and dependency impact. Tasks MUST be
small, ordered by user value, and written with exact file paths. Implementation
MUST proceed in thin increments that can be manually validated before moving to
the next increment. Refactoring is allowed when it improves readability or
removes real duplication without expanding scope.

## Governance

This constitution supersedes conflicting templates, generated plans, and local
workflow habits. Amendments MUST be documented in this file with a Sync Impact
Report and MUST update dependent templates in the same change.

Versioning follows semantic versioning. MAJOR changes remove or redefine a core
principle, MINOR changes add principles or materially expand governance, and
PATCH changes clarify wording without changing obligations. Each feature plan
and task list MUST review compliance with the current constitution before
implementation begins.

**Version**: 1.0.0 | **Ratified**: 2026-07-05 | **Last Amended**: 2026-07-05

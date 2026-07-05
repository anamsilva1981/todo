# Research: Task Manager

## Decision: Use Next.js App Router with TypeScript

**Rationale**: The user explicitly requested TypeScript, Next.js, React, and App
Router. The official Next.js installation documentation identifies App Router as
the route system backed by the `app` directory and documents TypeScript support
for `layout.tsx` and `page.tsx`.

**Alternatives considered**:
- Pages Router: rejected because the user explicitly requested App Router.
- Plain React without Next.js: rejected because Next.js was requested.

## Decision: Keep runtime dependencies minimal

**Rationale**: The constitution requires a small and simple project with minimal
external dependencies. The feature does not require routing beyond the main App
Router page, custom date parsing libraries, UI component libraries, or external
state management.

**Alternatives considered**:
- UI component library: rejected because native controls and CSS are enough.
- State management library: rejected because React state is enough for a small
  single-user list.
- Date utility library: rejected because due dates are calendar-date strings and
  browser date inputs are enough for this scope.

## Decision: Store tasks in browser localStorage

**Rationale**: The user explicitly requested local browser storage through
localStorage. This keeps the app offline-friendly for one person and avoids a
backend, database, authentication, and network dependency.

**Alternatives considered**:
- Server database: rejected as unnecessary scope.
- IndexedDB: rejected because the data model is small and localStorage is
  simpler for the requested version.

## Decision: Client component owns task interactions

**Rationale**: localStorage is only available in the browser, so task creation,
status updates, filtering, loading, and persistence belong in client-side React
logic. The root App Router page can render a client task manager component.

**Alternatives considered**:
- Server Actions: rejected because no server persistence is needed.
- API routes: rejected because there is no backend contract for this version.

## Decision: Manual validation only

**Rationale**: The project constitution and user request both prohibit automated
tests for this version. Validation is captured in quickstart scenarios.

**Alternatives considered**:
- Unit tests for filtering/storage: rejected by constitution and user request.
- Browser automation: rejected by constitution and user request.

## References

- Next.js installation documentation: https://nextjs.org/docs/app/getting-started/installation
- Next.js `use client` directive documentation: https://nextjs.org/docs/app/api-reference/directives/use-client

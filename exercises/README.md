# Exercises

Four self‑contained tasks built on real gaps in [`../sample-app`](../sample-app). Each one drives a
module in the [walkthrough](../docs/walkthrough.md) and maps to a ready‑made GitHub issue in
[`seed-issues.md`](seed-issues.md). Reference solutions are in [`solutions.md`](solutions.md) —
don't peek until you've let the agent try.

If you want to reset the demo repository after a run-through, see
[`demo-reset.md`](demo-reset.md). It preserves the seeded practice issues and removes extra
issues and pull requests.

`main` ships **green** (8 passing tests). Every exercise asks the agent to add behavior *and* the
tests that prove it.

| # | Title | What's missing | Difficulty | Good for |
| --- | --- | --- | --- | --- |
| 1 | Validate `POST /tasks` | No input validation — accepts a missing/blank `title` | ⭐ | Plan → Interactive |
| 2 | Add `DELETE /tasks/:id` | No delete route and no `TaskStore.remove()` | ⭐ | Autopilot |
| 3 | Fix the `updatedAt` bug | `setCompleted` never refreshes `updatedAt` | ⭐⭐ | Subtle bug / Interactive |
| 4 | Filter `GET /tasks?completed=` | No query‑param filtering | ⭐⭐ | On your own |

## Exercise 1 — Validate `POST /tasks`

`POST /tasks` creates a task even when `title` is missing or blank. Make it return `400` with a
clear JSON error and **not** create a task. Cover the happy path and invalid input with tests.

> Suggested prompt: *"Add input validation to `POST /tasks` in `sample-app`. Reject a missing,
> non‑string, or whitespace‑only `title` with a `400` and a helpful JSON error. Add tests."*

## Exercise 2 — Add `DELETE /tasks/:id`

There's no way to delete a task. Add `TaskStore.remove(id)` and a `DELETE /tasks/:id` route that
returns `204` on success and `404` when the task doesn't exist. Add tests.

## Exercise 3 — Fix the `updatedAt` bug

`TaskStore.setCompleted` flips `completed` but never updates `updatedAt`, so a completed task looks
like it was never touched. Fix it and add a test asserting `updatedAt` changes (and is `>=`
`createdAt`).

## Exercise 4 — Filter `GET /tasks?completed=`

`GET /tasks` always returns everything. Support `?completed=true` and `?completed=false` to filter,
return all tasks when the param is absent, and `400` on an invalid value. Add tests.

## Running the checks

```bash
cd sample-app
npm test        # all green?
npm run build   # type‑checks and compiles
```

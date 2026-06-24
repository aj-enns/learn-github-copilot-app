# Seed issues

Create the four demo issues so you can "start a session from an issue" during the talk. Run these
from the repo root with the [GitHub CLI](https://cli.github.com/) (`gh auth login` first). They
target whatever repo your current directory is in — run them from your fork.

```bash
gh issue create \
  --title "Add input validation to POST /tasks" \
  --label "good first issue,demo" \
  --body "POST /tasks currently creates a task even when 'title' is missing or blank. Validate the request: reject a missing, non-string, or whitespace-only 'title' with HTTP 400 and a clear JSON error, and do not create the task. Add tests for the happy path and the invalid cases. See exercises/README.md (Exercise 1)."

gh issue create \
  --title "Add a DELETE /tasks/:id endpoint" \
  --label "demo" \
  --body "There is no way to delete a task. Add TaskStore.remove(id) and a DELETE /tasks/:id route that returns 204 on success and 404 when the task does not exist. Add tests. See exercises/README.md (Exercise 2)."

gh issue create \
  --title "Fix: completing a task does not update updatedAt" \
  --label "bug,demo" \
  --body "TaskStore.setCompleted flips 'completed' but never refreshes 'updatedAt', so a completed task looks untouched. Refresh updatedAt when a task changes and add a test asserting it updates. See exercises/README.md (Exercise 3)."

gh issue create \
  --title "Support filtering GET /tasks by completed status" \
  --label "enhancement,demo" \
  --body "GET /tasks always returns every task. Support ?completed=true and ?completed=false to filter, return all tasks when the param is absent, and 400 on an invalid value. Add tests. See exercises/README.md (Exercise 4)."
```

> Tip: the `demo` label makes it easy to find these in **My work**. Create it first if it doesn't
> exist: `gh label create demo --color FBCA04 --description "Lunch & learn demo task"`.

If you'd rather create issues by hand, copy each title/body into **New issue** on GitHub, or use
the [`demo-task` issue template](../.github/ISSUE_TEMPLATE/demo-task.md) that ships with this repo.

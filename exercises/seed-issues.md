# Seed issues

Create the four practice issues so you can "start a session from an issue" as you follow along. Run
these from the repo root with the [GitHub CLI](https://cli.github.com/) (`gh auth login` first). They
target whatever repo your current directory is in — run them from your fork.

```bash
gh issue create \
  --title "Add input validation to POST /tasks" \
  --label "good first issue,practice" \
  --body "POST /tasks currently creates a task even when 'title' is missing or blank. Validate the request: reject a missing, non-string, or whitespace-only 'title' with HTTP 400 and a clear JSON error, and do not create the task. Add tests for the happy path and the invalid cases. See exercises/README.md (Exercise 1)."

gh issue create \
  --title "Add a DELETE /tasks/:id endpoint" \
  --label "practice" \
  --body "There is no way to delete a task. Add TaskStore.remove(id) and a DELETE /tasks/:id route that returns 204 on success and 404 when the task does not exist. Add tests. See exercises/README.md (Exercise 2)."

gh issue create \
  --title "Fix: completing a task does not update updatedAt" \
  --label "bug,practice" \
  --body "TaskStore.setCompleted flips 'completed' but never refreshes 'updatedAt', so a completed task looks untouched. Refresh updatedAt when a task changes and add a test asserting it updates. See exercises/README.md (Exercise 3)."

gh issue create \
  --title "Support filtering GET /tasks by completed status" \
  --label "enhancement,practice" \
  --body "GET /tasks always returns every task. Support ?completed=true and ?completed=false to filter, return all tasks when the param is absent, and 400 on an invalid value. Add tests. See exercises/README.md (Exercise 4)."
```

> Tip: the `practice` label makes it easy to find these in **My work**. Create it first if it
> doesn't exist: `gh label create practice --color FBCA04 --description "Copilot app walkthrough task"`.

If you'd rather create issues by hand, copy each title/body into **New issue** on GitHub, or use
the [`practice-task` issue template](../.github/ISSUE_TEMPLATE/practice-task.md) that ships with this repo.

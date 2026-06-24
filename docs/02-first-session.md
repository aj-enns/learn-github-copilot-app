# 02 · Your first agent session — the centerpiece

**Time:** ~12 min · **Goal:** start a session from an issue, use **Plan** mode to agree on an
approach, then **Interactive** mode to steer the agent to a real, tested change.

This is the most important module. Slow down and narrate what you're doing and why.

## The change we'll make

Implement input validation for `POST /tasks` in the sample app. Right now the route happily
creates a task with an `undefined` title — a real gap, with [`exercise 1`](../exercises/README.md)
behind it.

## Start from an issue

1. In the sidebar, open **My work** and find the issue **"Add input validation to POST /tasks"**
   (create it first with [`seed-issues.md`](../exercises/seed-issues.md) if needed).
2. Click the issue, then **New session**. The issue context loads automatically.
3. Below the prompt, choose where the session runs: a **new working tree** (recommended for the
   demo — it keeps your main checkout clean), your local repo, or a **cloud sandbox**.
4. Pick a **session mode**, **model**, and **reasoning effort** (more on these in
   [05](05-modes-and-models.md)).

> No issue? You can start a session from a blank prompt instead: **+** next to **Sessions** →
> pick the repo → describe the task. Starting from an issue just pre‑loads context.

## Step 1 — Plan mode (agree before you build)

Select **Plan** mode and prompt:

> Add input validation to `POST /tasks` in `sample-app`. A request without a non‑empty string
> `title` should return `400` with a clear JSON error and must not create a task. Add tests
> covering the happy path and the invalid cases.

The agent proposes a plan. **Read it aloud.** Approve it, or steer it:

> Keep it dependency‑free — validate in the route handler, don't add a validation library.

**Point to make:** Plan mode front‑loads the disagreements. You catch a wrong approach before any
code is written.

## Step 2 — Interactive mode (steer the work)

Switch to **Interactive** mode and let it implement. As it works:

- Reference files with `@` and issues with `#` in the prompt.
- Nudge it if needed:
  > Also return `400` when `title` is only whitespace, and add a test for that.

**Point to make:** you're collaborating turn by turn — the agent suggests, you approve or redirect.

## Step 3 — Confidence check with rubber duck (optional)

Ask for a second opinion from a different model:

> /rubber-duck review the validation you just added and the tests for edge cases.

The **rubber‑duck agent** runs on a different model and returns a critique the main agent can act
on. (Available when the main agent uses a Claude or GPT model.)

## What "done" looks like

- `POST /tasks` rejects a missing/blank `title` with `400` and a helpful message.
- New tests cover valid and invalid input.
- Existing tests still pass.

Don't open the PR yet — we review first.

➡️ Next: [03 · Review & open a PR](03-review-and-pr.md)

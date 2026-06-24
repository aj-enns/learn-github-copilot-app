# 04 · Parallel sessions & worktrees

**Time:** ~7 min · **Goal:** show the app's signature move — multiple agent sessions running at
once, each isolated on its own branch and git worktree.

## Why this matters

Most "AI in the editor" tools are single‑threaded: one conversation, one working copy. The Copilot
app runs **many sessions in parallel**, each in a **dedicated worktree and branch**, so progress on
one task never clobbers another. You shift from *doing the work* to *directing several streams of it.*

## Do it live

While the PR from Module 3 is building, start two more sessions from issues:

1. **+** next to **Sessions** → pick the repo (or start from the issue in **My work**).
2. Session A — **"Add a DELETE /tasks/:id endpoint"** ([exercise 2](../exercises/README.md)).
3. Session B — **"Fix: completing a task doesn't update updatedAt"** ([exercise 3](../exercises/README.md)).
4. Give each a one‑line prompt and let them run.

Now switch between **all three** sessions in the sidebar (grouped by repository). Call out:

- Each session has its **own branch and worktree** — open two diffs side by side to prove the
  isolation.
- You can give each a **different mode and model** (e.g. Autopilot + a fast model for the small
  DELETE endpoint; Interactive for the subtler bug).
- Nothing blocks: Session A doesn't wait for Session B.

## A good narration

> "I'm not waiting on any one agent. The DELETE endpoint is well‑scoped, so I'll let it run on
> Autopilot. The `updatedAt` bug is subtler, so I'll keep that one Interactive and steer it. Both
> live in their own worktree, so neither can step on the other — or on the validation PR that's
> already in review."

## Cloud sessions (mention)

Sessions can also run in **cloud sandboxes** (public preview) — fully isolated Linux environments
hosted by GitHub. Great for offloading compute or picking work up from another device. More in
[06 · Advanced](06-advanced.md).

➡️ Next: [05 · Modes, models & reasoning effort](05-modes-and-models.md)

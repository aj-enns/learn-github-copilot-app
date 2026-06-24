# Walkthrough — start here

This is the suggested path through the modules. Work through them in order the first time, or jump
straight to a topic once you know your way around. The app itself is the star, so spend most of your
time in it rather than reading.

**What you'll come away with:** a feel for how the GitHub Copilot app turns agent‑driven development
into a reviewable, parallel, GitHub‑native workflow — and the confidence to do it on your own repos.

## Before you start

- [ ] Install and sign in to the GitHub Copilot app (see [`00-prerequisites.md`](00-prerequisites.md)).
- [ ] Fork or clone this repo and connect it in the app.
- [ ] Create the practice issues so you can "start from an issue":
      see [`../exercises/seed-issues.md`](../exercises/seed-issues.md).
- [ ] `cd sample-app && npm install` once so live `npm test` runs are fast.
- [ ] Keep [`cheatsheet.md`](cheatsheet.md) open as a quick reference.
- [ ] Pick a model you want to try and confirm it's available on your plan.

## The modules

| Module | What you'll do |
| --- | --- |
| [00 · Prerequisites](00-prerequisites.md) | Install, sign in, connect this repo, tour the sidebar |
| [01 · Quick chat](01-quick-chat.md) | Ask questions and explore the repo — no branch |
| [02 · First session](02-first-session.md) | Start from an issue; Plan → Interactive; fix a real gap |
| [03 · Review & PR](03-review-and-pr.md) | Read the diff, verify in terminal/browser, open a PR |
| [04 · Parallel sessions](04-parallel-sessions.md) | Run sessions in parallel on separate worktrees |
| [05 · Modes & models](05-modes-and-models.md) | Match modes, models & reasoning effort to the task |
| [06 · Advanced](06-advanced.md) | Canvases, automations, MCP/BYOK, sandboxes, `/chronicle` |

---

## 1 — Get oriented

Start in [`00-prerequisites.md`](00-prerequisites.md) to install the app and connect this repo. Then
take a minute with the **sidebar**: **My work** (issues/PRs/CI), **Automations**, **Search**, and
**Sessions** (with **Quick chats**). This is your map for everything that follows.

The short version of what the app is: it's a **desktop app** for agent‑driven development. You direct
agents instead of doing every keystroke yourself, it's **native to GitHub** (issues, branches, PRs,
and CI work out of the box), and its superpower is **parallelism with review** — many agents, each in
its own branch/worktree, with you in control through diffs, modes, and checks.

## 2 — Quick chat (Module 1)

Work through [`01-quick-chat.md`](01-quick-chat.md). Ask: *"Give me an overview of the sample-app and
how the Task API is structured."* The takeaway: **no branch, no worktree — just answers.**

## 3 — Your first session (Module 2, the centerpiece)

Work through [`02-first-session.md`](02-first-session.md). Start from the **"Add input validation"**
issue. Use **Plan mode** (the agent proposes, you approve), then switch to **Interactive** to steer.
Let it implement validation for `POST /tasks` and add a test. This is the part worth slowing down for.

## 4 — Review & ship (Module 3)

Work through [`03-review-and-pr.md`](03-review-and-pr.md). Read the **diff**, run `npm test` in the
**integrated terminal**, hit `/health` in the **browser**, then **open a PR** from the app and watch
CI run on the same change.

## 5 — Parallel sessions (Module 4)

Work through [`04-parallel-sessions.md`](04-parallel-sessions.md). While the first PR's CI runs, start
**two more** sessions (e.g. "Add DELETE endpoint" and "Fix the updatedAt bug"), each on its own
worktree/branch. Switch between them in the sidebar and notice the **isolation** — no clobbering.

## 6 — Modes & models (Module 5)

Read [`05-modes-and-models.md`](05-modes-and-models.md): Interactive vs Plan vs Autopilot, the model
picker, reasoning effort, and how to match them to task complexity.

## 7 — Advanced (Module 6)

Skim [`06-advanced.md`](06-advanced.md): **canvases** (`/create-canvas`), **automations** (scheduled
agent work), **MCP servers & BYOK**, **cloud/local sandboxes**, `/chronicle` for session history, and
the **rubber‑duck** agent. Try one that interests you.

## 8 — Recap

Name the loop to yourself: *issue → session (mode + model) → review → verify → PR → repeat in
parallel.* Then point your new skills at your own repos and the [`../exercises`](../exercises).

---

## Short on time?

Skip **Module 4** (parallel) on a first pass and skim **Module 6**. The two you don't want to miss are
**Module 2** (a real session) and **Module 3** (review + PR) — that loop is the whole story.

## Want to go deeper?

- Do a full **Autopilot** run on a well‑scoped exercise and review the result.
- Build a small **canvas** with `/create-canvas` (e.g. a triage board).
- Run **`/chronicle standup`** to summarize what you just did in the session.

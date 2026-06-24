# Facilitator guide — 45‑minute run sheet

This is the script for delivering the Lunch & Learn. Times are a guide; the demo is the star,
so keep slides to a minimum and stay in the app.

**Goal:** by the end, attendees understand how the GitHub Copilot app turns agent‑driven
development into a reviewable, parallel, GitHub‑native workflow — and can do it themselves.

## Before you start (facilitator prep)

- [ ] Install + sign in to the GitHub Copilot app (see [`00-prerequisites.md`](00-prerequisites.md)).
- [ ] Fork this repo (or have your own copy) and connect it in the app.
- [ ] Create the demo issues so you can "start from an issue":
      see [`../exercises/seed-issues.md`](../exercises/seed-issues.md).
- [ ] `cd sample-app && npm install` once so live `npm test` runs are fast.
- [ ] Have [`cheatsheet.md`](cheatsheet.md) open to project.
- [ ] Pick the model you'll demo with and confirm it's available on your plan.

## Timeline at a glance

| Time | Module | What you show |
| --- | --- | --- |
| 0:00–0:03 | Intro | What the app is and why it's different |
| 0:03–0:07 | [00](00-prerequisites.md) / setup | App tour: sidebar, My work, Sessions, Quick chats |
| 0:07–0:12 | [01](01-quick-chat.md) | Quick chat — explore the repo, no branch |
| 0:12–0:24 | [02](02-first-session.md) | First session — Plan → Interactive, fix a real gap |
| 0:24–0:31 | [03](03-review-and-pr.md) | Review diff, verify in terminal/browser, open a PR |
| 0:31–0:38 | [04](04-parallel-sessions.md) | Parallel sessions on separate worktrees |
| 0:38–0:40 | [05](05-modes-and-models.md) | Modes, models & reasoning effort (recap on screen) |
| 0:40–0:43 | [06](06-advanced.md) | Advanced: canvases, automations, MCP/BYOK, sandboxes |
| 0:43–0:45 | Wrap | Recap, resources, Q&A |

---

## 0:00–0:03 — Intro

Say it in three sentences:

1. "The GitHub Copilot app is a **desktop app** for agent‑driven development — you direct agents
   instead of doing every keystroke yourself."
2. "It's built on GitHub Copilot CLI and is **native to GitHub**: issues, branches, PRs, and CI
   work out of the box."
3. "The superpower is **parallelism with review** — many agents, each in its own branch/worktree,
   and you stay in control through diffs, modes, and checks."

> Avoid a long slide intro. The product sells itself once it's on screen.

## 0:03–0:07 — Setup & app tour

Walk the **sidebar**: **My work** (issues/PRs/CI), **Automations**, **Search**, **Sessions**
(with **Quick chats**). Confirm this repo is connected (`+` next to Sessions → repo).
Talking points live in [`00-prerequisites.md`](00-prerequisites.md).

## 0:07–0:12 — Module 1: Quick chat

Follow [`01-quick-chat.md`](01-quick-chat.md). Ask: *"Give me an overview of the sample-app and
how the Task API is structured."* Land the point: **no branch, no worktree — just answers.**

## 0:12–0:24 — Module 2: Your first session (the centerpiece)

Follow [`02-first-session.md`](02-first-session.md). Start from the **"Add input validation"**
issue. Show **Plan mode** (agent proposes, you approve), then switch to **Interactive** to steer.
Let it implement validation for `POST /tasks` and add a test. This is where you spend your time.

## 0:24–0:31 — Module 3: Review & ship

Follow [`03-review-and-pr.md`](03-review-and-pr.md). Read the **diff**, run `npm test` in the
**integrated terminal**, hit `/health` in the **browser**, then **open a PR** from the app and
point at CI running on the same change.

## 0:31–0:38 — Module 4: Parallel sessions

Follow [`04-parallel-sessions.md`](04-parallel-sessions.md). While the first PR's CI runs, start
**two more** sessions (e.g. "Add DELETE endpoint" and "Fix the updatedAt bug"), each on its own
worktree/branch. Switch between them in the sidebar — emphasize **isolation** (no clobbering).

## 0:38–0:40 — Module 5: Modes & models

Recap on screen with [`05-modes-and-models.md`](05-modes-and-models.md): Interactive vs Plan vs
Autopilot, model picker, reasoning effort, and how to match them to task complexity.

## 0:40–0:43 — Module 6: Advanced

Tour, don't deep‑dive, [`06-advanced.md`](06-advanced.md): **canvases** (`/create-canvas`),
**automations** (scheduled agent work), **MCP servers & BYOK**, **cloud/local sandboxes**,
`/chronicle` for session history, and the **rubber‑duck** agent.

## 0:43–0:45 — Wrap

- Recap the loop: *issue → session (mode + model) → review → verify → PR → repeat in parallel.*
- Point to resources in [`cheatsheet.md`](cheatsheet.md) and the official docs.
- Invite everyone to fork this repo and try the [`../exercises`](../exercises).

---

## If you're short on time

Drop **Module 4** (parallel) to a 60‑second mention and trim **Module 6** to a single canvas
demo. The non‑negotiables are **Module 2** (a real session) and **Module 3** (review + PR) —
that loop is the whole story.

## If you have extra time

- Do a live **Autopilot** run on a well‑scoped exercise and review the result.
- Build a small **canvas** live with `/create-canvas` (e.g. a triage board).
- Show **`/chronicle standup`** to summarize what you just did in the session.

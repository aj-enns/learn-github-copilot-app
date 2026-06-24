# 03 · Review the diff, verify, and open a PR

**Goal:** treat agent output like any teammate's — read the diff, verify it runs, then ship it
through your normal GitHub flow.

## Step 1 — Read the diff

Open the session's **diff** view and walk the changes:

- Did it touch only what it should (`routes.ts`, a test file)?
- Is the validation logic correct and the error shape sensible?
- Are the new tests meaningful, not just present?

**Why it matters:** the diff is the contract. You review the change, not the chat transcript.

## Step 2 — Verify in the integrated terminal

Open the app's **integrated terminal** in the session and run the suite:

```bash
cd sample-app
npm test
```

Then exercise it by hand:

```bash
npm run dev
# in another terminal tab:
curl -s -X POST http://localhost:3000/tasks -H "content-type: application/json" -d "{}"
# expect HTTP 400 with a JSON error
curl -s -X POST http://localhost:3000/tasks -H "content-type: application/json" -d "{\"title\":\"Write docs\"}"
# expect HTTP 201 with the created task
```

## Step 3 — Verify in the browser

Open the integrated **browser** canvas and hit:

- `http://localhost:3000/health` → `{ "status": "ok" }`
- `http://localhost:3000/tasks` → the tasks you created

**Why it matters:** terminal + browser are *inside* the app, so reviewing and validating doesn't
mean alt‑tabbing across three windows.

## Step 4 — Open the pull request

From the session, **create a pull request**. Then:

- Show the PR uses your repo's **existing checks and merge requirements** — the CI in
  [`.github/workflows/ci.yml`](../.github/workflows/ci.yml) runs on the same change.
- Show that you can **review the PR and view CI status** from **My work** without leaving the app.
- Merge it, or leave it open to revisit later.

## The loop, end to end

> *issue → session (mode + model) → review the diff → verify → open PR → check CI → merge.*

That's the whole workflow. Everything else scales it up.

➡️ Next: [04 · Parallel sessions](04-parallel-sessions.md)

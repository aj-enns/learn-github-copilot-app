# 00 · Prerequisites & setup

Get this out of the way first so the rest of the walkthrough goes smoothly. None of it takes long.

## What you need

- **A paid Copilot plan.** Copilot Business / Enterprise users need an admin to enable the
  **Copilot CLI** policy. ([why](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies))
- **[Git](https://github.com/git-guides/install-git)** installed.
- **macOS, Windows, or Linux** (the app supports all three).
- For the sample app exercises: **Node.js 20+** and **npm**.

## Install the app

1. Go to the [download page](https://gh.io/app) and grab the build for your OS.
2. Open the app, click **Sign in to GitHub**, and complete authentication.
   (GitHub Enterprise Server users: choose **Use GitHub Enterprise** and enter the server address.)
3. During onboarding, pick a repo from your recent activity **or** choose the sample project, then
   pick a theme. You can add repos later.

## Connect this repo

If you skipped repo setup, or want to add this workshop repo:

1. Click the **+** next to **Sessions** in the sidebar.
2. Under **Add project from**, choose one of:
   - **Local folder or repository** — a folder already on your machine.
   - **GitHub repository** — browse and clone from GitHub.
   - **Repository URL** — clone from any Git URL.
3. Point it at your fork of `learn-github-copilot-app`.

## Warm up the sample app (optional but recommended)

```bash
cd sample-app
npm install
npm test     # expect 8 passing tests
```

## The app at a glance

The **sidebar** is your map:

- **My work** — issues and PRs from your repos, with CI status and reviews.
- **Automations** — saved agent tasks that run on a schedule or on demand.
- **Search** — search across your repositories.
- **Sessions** — active agent sessions grouped by repository, plus **Quick chats**.

## Quick checklist

- [ ] Signed in, this repo connected.
- [ ] Practice issues created (see [`../exercises/seed-issues.md`](../exercises/seed-issues.md)).
- [ ] `npm install` already run in `sample-app/`.
- [ ] Picked a **model** you want to try and confirmed it's available to you.
- [ ] Noted the **right side panel** — that's where canvases and diffs open.

➡️ Next: [01 · Quick chat](01-quick-chat.md)

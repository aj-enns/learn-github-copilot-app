# 06 · Advanced features — a guided tour

**Goal:** see the ceiling. Don't try to master each feature now — learn what each one is for, then
try **one** that interests you (canvases is a good first pick).

## Canvases — shared, interactive surfaces

A **canvas** is a bidirectional surface — a plan, triage board, browser session, checklist,
dashboard, or document — where **you and the agent work on the same artifact**. The agent updates
it while it works, and you can edit it directly. Canvases open in the app's **right side panel**.

Create one from a session with the `/create-canvas` skill:

> /create-canvas Create an agentic kanban canvas with actions to create, assign, and move cards.

Scope it **project** (`​.github/extensions`, shared with the team via the repo) or **user**
(`~/.copilot/extensions`, personal). Then keep iterating — ask the agent to add, remove, or revise
the canvas's capabilities.

**Why it lands:** work moves out of the chat transcript and into a surface you can see, steer, and
verify.

## Automations — scheduled agent work

**Automations** are saved agent tasks that run **on a schedule or on demand**, in the cloud, so
they don't depend on your machine being awake. Think nightly triage, recurring dependency bumps, or
a weekly "summarize open PRs." Find them under **Automations** in the sidebar.

## Bring your own model & tools (MCP + BYOK)

- **BYOK:** point sessions at your own model provider; those models then show up in the picker.
- **MCP servers:** connect external tools and data sources via the
  [Model Context Protocol](https://modelcontextprotocol.io) so the agent can use them during a session.

Together: choose the brain (model) and the hands (tools) per session.

## Cloud & local sandboxes

Choose **where** Copilot runs:

- **Local sandboxing** restricts filesystem/network/system access on your own machine
  (`/sandbox enable` in a CLI session).
- **Cloud sandboxing** runs sessions in fully isolated, ephemeral Linux environments hosted by
  GitHub — offload compute, run more in parallel, and resume from any device. (Public preview.)

## Session history — `/chronicle`

Because the app is built on Copilot CLI, you can mine your own session history:

> /chronicle standup

…summarizes recent work across your app and CLI sessions — handy for standups and write‑ups.

## Rubber‑duck agent

A built‑in constructive critic that reviews your **plan, implementation, or tests** and returns
concrete feedback, running on a **different model** than your main session. Invoke it explicitly:

> /rubber-duck critique the approach in my current plan.

(Available when the main agent uses a Claude or GPT model.)

## Customizations worth knowing

- **Custom instructions** to encode team conventions.
- **Agent skills** (`/`‑commands) to package repeatable workflows.
- **Voice dictation** to speak prompts instead of typing them.

➡️ Back to the [walkthrough](walkthrough.md) · or the [cheat sheet](cheatsheet.md)

# Cheat sheet — GitHub Copilot app

Keep this open while you work. One screen, the essentials.

## The core loop

```
issue ─▶ session (mode + model) ─▶ review diff ─▶ verify (terminal + browser) ─▶ open PR ─▶ CI ─▶ merge
                                   ▲                                                   │
                                   └──────────────── iterate / run more in parallel ◀─┘
```

## Sidebar map

| Area | What |
| --- | --- |
| **My work** | Issues & PRs, CI status, reviews |
| **Automations** | Saved agent tasks (schedule / on‑demand) |
| **Search** | Search across your repositories |
| **Sessions** | Active agent sessions + **Quick chats** |

## Session modes

| Mode | Autonomy | When |
| --- | --- | --- |
| **Interactive** | Collaborative, turn by turn | Ambiguous work / tight steering |
| **Plan** | Agent plans → you approve → it executes | Validate approach first |
| **Autopilot** | Fully autonomous | Well‑defined, low‑risk tasks |

Change mode, model, and reasoning effort **any time** during a session.

## In the prompt box

| Type | Does |
| --- | --- |
| `#` | Reference an issue |
| `@` | Add a file |
| `/` | Run a command / skill |

## Handy commands

| Command | What |
| --- | --- |
| `/create-canvas` | Build a shared interactive canvas |
| `/rubber-duck` | Get a critique from a different model |
| `/chronicle standup` | Summarize recent session work |
| `/sandbox enable` | Turn on local sandboxing (CLI) |

## Efficiency rules of thumb

- Quick chat to **scope**, session to **build**.
- **Plan mode** before spending tokens on code.
- Light model + Autopilot for simple work; high‑capability model + higher effort for hard problems.
- Run independent tasks **in parallel** — each gets its own branch/worktree.

## Sample app quickstart

```bash
cd sample-app
npm install
npm test      # 8 passing
npm run dev   # http://localhost:3000
```

## Docs

- Getting started: <https://docs.github.com/copilot/how-tos/github-copilot-app/getting-started>
- About the app: <https://docs.github.com/en/copilot/concepts/agents/github-copilot-app>
- Agent sessions: <https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions>
- Canvas extensions: <https://docs.github.com/en/copilot/how-tos/github-copilot-app/working-with-canvas-extensions>
- Sandboxes: <https://docs.github.com/en/copilot/concepts/about-cloud-and-local-sandboxes>

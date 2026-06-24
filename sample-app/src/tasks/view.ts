import type { Task } from './types.js';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Render a small, modern dark-themed HTML page listing the tasks.
 * Kept dependency-free so the demo stays easy to read.
 */
export function renderTasksPage(tasks: Task[]): string {
  const total = tasks.length;
  const done = tasks.filter((t) => t.completed).length;

  const items =
    total === 0
      ? '<li class="empty">No tasks yet.</li>'
      : tasks
          .map((task) => {
            const created = new Date(task.createdAt).toLocaleString();
            return `
        <li class="task ${task.completed ? 'is-done' : ''}">
          <span class="dot" aria-hidden="true"></span>
          <div class="task-body">
            <span class="title">${escapeHtml(task.title)}</span>
            <span class="meta">created ${escapeHtml(created)}</span>
          </div>
          <span class="badge">${task.completed ? 'Done' : 'Open'}</span>
        </li>`;
          })
          .join('');

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Task API</title>
  <style>
    :root {
      color-scheme: dark;
      --bg: #0d1117;
      --panel: #161b22;
      --border: #30363d;
      --text: #e6edf3;
      --muted: #8b949e;
      --accent: #58a6ff;
      --green: #3fb950;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: radial-gradient(1200px 600px at 50% -10%, #1b2430 0%, var(--bg) 55%);
      color: var(--text);
      display: flex;
      justify-content: center;
      padding: 48px 16px;
    }
    .card {
      width: 100%;
      max-width: 560px;
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 28px;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
    }
    header { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; margin-bottom: 20px; }
    h1 { font-size: 22px; margin: 0; letter-spacing: -0.01em; }
    .count { color: var(--muted); font-size: 14px; }
    ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
    .task {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px 16px;
      background: #0d1117;
      border: 1px solid var(--border);
      border-radius: 12px;
      transition: border-color 0.15s ease, transform 0.15s ease;
    }
    .task:hover { border-color: var(--accent); transform: translateY(-1px); }
    .dot { width: 10px; height: 10px; border-radius: 50%; background: var(--accent); flex: none; }
    .is-done .dot { background: var(--green); }
    .task-body { display: flex; flex-direction: column; gap: 2px; flex: 1; min-width: 0; }
    .title { font-size: 15px; font-weight: 600; }
    .is-done .title { text-decoration: line-through; color: var(--muted); }
    .meta { font-size: 12px; color: var(--muted); }
    .badge {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      padding: 4px 10px;
      border-radius: 999px;
      border: 1px solid var(--border);
      color: var(--accent);
    }
    .is-done .badge { color: var(--green); border-color: rgba(63, 185, 80, 0.4); }
    .empty { color: var(--muted); text-align: center; padding: 24px; }
    footer { margin-top: 22px; font-size: 12px; color: var(--muted); text-align: center; }
    footer code { color: var(--accent); }
  </style>
</head>
<body>
  <main class="card">
    <header>
      <h1>Tasks</h1>
      <span class="count">${done}/${total} done</span>
    </header>
    <ul>${items}
    </ul>
    <footer>Raw JSON at <code>/tasks</code></footer>
  </main>
</body>
</html>`;
}

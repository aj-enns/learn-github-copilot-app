import { Router } from 'express';
import type { TaskStore } from './store.js';
import { TASK_TITLE_ERROR, normalizeTaskTitle } from './validation.js';

export function createTaskRouter(store: TaskStore): Router {
  const router = Router();

  // Exercise 4: support filtering with GET /tasks?completed=true|false
  router.get('/', (_req, res) => {
    res.json(store.list());
  });

  router.post('/', (req, res) => {
    try {
      const title = normalizeTaskTitle(req.body?.title);
      const task = store.create(title);
      return res.status(201).json(task);
    } catch (error) {
      if (error instanceof Error && error.message === TASK_TITLE_ERROR) {
        return res.status(400).json({ error: error.message });
      }

      throw error;
    }
  });

  router.get('/:id', (req, res) => {
    const task = store.get(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  });

  router.patch('/:id', (req, res) => {
    const { completed } = req.body ?? {};
    const task = store.setCompleted(req.params.id, Boolean(completed));
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  });

  return router;
}

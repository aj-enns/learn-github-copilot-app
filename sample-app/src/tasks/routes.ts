import { Router } from 'express';
import type { TaskStore } from './store.js';

export function createTaskRouter(store: TaskStore): Router {
  const router = Router();

  // Exercise 4: support filtering with GET /tasks?completed=true|false
  router.get('/', (_req, res) => {
    res.json(store.list());
  });

  router.post('/', (req, res) => {
    // Exercise 1: validate that req.body.title is a non-empty string and
    // return 400 with a helpful message when it is not.
    const { title } = req.body ?? {};
    const task = store.create(title);
    res.status(201).json(task);
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

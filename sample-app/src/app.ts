import express, { type Express } from 'express';
import { TaskStore } from './tasks/store.js';
import { createTaskRouter } from './tasks/routes.js';

/**
 * Build the Express application. A store can be injected to make testing easy.
 */
export function createApp(store: TaskStore = new TaskStore()): Express {
  const app = express();
  app.use(express.json());

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  app.use('/tasks', createTaskRouter(store));

  return app;
}

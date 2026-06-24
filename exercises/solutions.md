# Reference solutions

Use these to sanity‑check what the agent produced, or to reset after working through an exercise.
They're intentionally dependency‑free and match the style of the existing code. There's more than one
correct answer — the agent's version may differ and still be right.

> Don't read these until you've let the agent try. The point is to let the agent write them and then
> review the result.

## Exercise 1 — Validate `POST /tasks`

In `src/tasks/routes.ts`, replace the `POST /` handler:

```ts
router.post('/', (req, res) => {
  const { title } = req.body ?? {};
  if (typeof title !== 'string' || title.trim().length === 0) {
    return res.status(400).json({ error: 'title is required and must be a non-empty string' });
  }
  const task = store.create(title.trim());
  res.status(201).json(task);
});
```

Tests to add in `src/app.test.ts`:

```ts
it('rejects a task with no title', async () => {
  const res = await request(createApp()).post('/tasks').send({});
  expect(res.status).toBe(400);
});

it('rejects a whitespace-only title', async () => {
  const res = await request(createApp()).post('/tasks').send({ title: '   ' });
  expect(res.status).toBe(400);
});
```

## Exercise 2 — Add `DELETE /tasks/:id`

In `src/tasks/store.ts`:

```ts
remove(id: string): boolean {
  return this.tasks.delete(id);
}
```

In `src/tasks/routes.ts`:

```ts
router.delete('/:id', (req, res) => {
  const removed = store.remove(req.params.id);
  if (!removed) return res.status(404).json({ error: 'Task not found' });
  res.status(204).end();
});
```

Test:

```ts
it('deletes a task', async () => {
  const app = createApp();
  const created = await request(app).post('/tasks').send({ title: 'temp' });
  expect((await request(app).delete(`/tasks/${created.body.id}`)).status).toBe(204);
  expect((await request(app).get(`/tasks/${created.body.id}`)).status).toBe(404);
});
```

## Exercise 3 — Fix the `updatedAt` bug

In `src/tasks/store.ts`, refresh the timestamp when state changes:

```ts
setCompleted(id: string, completed: boolean): Task | undefined {
  const task = this.tasks.get(id);
  if (!task) return undefined;
  task.completed = completed;
  task.updatedAt = new Date().toISOString();
  return task;
}
```

Test (note: the timestamps are ISO strings, so compare them as such):

```ts
it('refreshes updatedAt when completing a task', async () => {
  const store = new TaskStore();
  const task = store.create('a');
  await new Promise((r) => setTimeout(r, 2));
  const updated = store.setCompleted(task.id, true)!;
  expect(updated.updatedAt >= updated.createdAt).toBe(true);
  expect(updated.updatedAt).not.toBe(task.createdAt);
});
```

## Exercise 4 — Filter `GET /tasks?completed=`

In `src/tasks/routes.ts`:

```ts
router.get('/', (req, res) => {
  const { completed } = req.query;
  if (completed === undefined) return res.json(store.list());
  if (completed !== 'true' && completed !== 'false') {
    return res.status(400).json({ error: "completed must be 'true' or 'false'" });
  }
  const want = completed === 'true';
  res.json(store.list().filter((t) => t.completed === want));
});
```

Test:

```ts
it('filters tasks by completed status', async () => {
  const app = createApp();
  const a = await request(app).post('/tasks').send({ title: 'a' });
  await request(app).post('/tasks').send({ title: 'b' });
  await request(app).patch(`/tasks/${a.body.id}`).send({ completed: true });

  const done = await request(app).get('/tasks?completed=true');
  expect(done.body).toHaveLength(1);
  expect((await request(app).get('/tasks?completed=bogus')).status).toBe(400);
});
```

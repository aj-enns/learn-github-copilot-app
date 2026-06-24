import { describe, expect, it } from 'vitest';
import request from 'supertest';
import { createApp } from './app.js';

describe('Task API', () => {
  it('GET /health returns ok', async () => {
    const res = await request(createApp()).get('/health');

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  it('creates and then lists a task', async () => {
    const app = createApp();

    const created = await request(app).post('/tasks').send({ title: 'Demo task' });
    expect(created.status).toBe(201);
    expect(created.body.title).toBe('Demo task');
    expect(created.body.completed).toBe(false);

    const list = await request(app).get('/tasks');
    expect(list.status).toBe(200);
    expect(list.body).toHaveLength(1);
  });

  it('trims surrounding whitespace from task titles', async () => {
    const app = createApp();

    const created = await request(app).post('/tasks').send({ title: '  Trim me  ' });
    expect(created.status).toBe(201);
    expect(created.body.title).toBe('Trim me');

    const list = await request(app).get('/tasks');
    expect(list.status).toBe(200);
    expect(list.body).toHaveLength(1);
    expect(list.body[0].title).toBe('Trim me');
  });

  it.each([
    { body: {}, expectedMessage: 'Title must be a non-empty string' },
    { body: { title: '' }, expectedMessage: 'Title must be a non-empty string' },
    { body: { title: '   ' }, expectedMessage: 'Title must be a non-empty string' },
    { body: { title: 42 }, expectedMessage: 'Title must be a non-empty string' },
  ])('rejects invalid task titles: $body', async ({ body, expectedMessage }) => {
    const app = createApp();

    const res = await request(app).post('/tasks').send(body);
    const list = await request(app).get('/tasks');

    expect(res.status).toBe(400);
    expect(res.body).toEqual({ error: expectedMessage });
    expect(list.status).toBe(200);
    expect(list.body).toEqual([]);
  });

  it('marks a task completed via PATCH', async () => {
    const app = createApp();
    const created = await request(app).post('/tasks').send({ title: 'Finish slides' });

    const patched = await request(app)
      .patch(`/tasks/${created.body.id}`)
      .send({ completed: true });

    expect(patched.status).toBe(200);
    expect(patched.body.completed).toBe(true);
  });

  it('returns 404 for an unknown task', async () => {
    const res = await request(createApp()).get('/tasks/does-not-exist');
    expect(res.status).toBe(404);
  });
});

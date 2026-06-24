import { describe, it, expect } from 'vitest';
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

  it('trims surrounding whitespace from the title', async () => {
    const app = createApp();
    const created = await request(app).post('/tasks').send({ title: '  Padded title  ' });

    expect(created.status).toBe(201);
    expect(created.body.title).toBe('Padded title');
  });

  it('rejects a missing title with 400 and creates no task', async () => {
    const app = createApp();

    const res = await request(app).post('/tasks').send({});
    expect(res.status).toBe(400);
    expect(res.body).toEqual({
      error: 'title is required and must be a non-empty string',
    });

    const list = await request(app).get('/tasks');
    expect(list.body).toHaveLength(0);
  });

  it('rejects an empty or whitespace-only title with 400 and creates no task', async () => {
    const app = createApp();

    const empty = await request(app).post('/tasks').send({ title: '' });
    expect(empty.status).toBe(400);
    expect(empty.body.error).toContain('title');

    const whitespace = await request(app).post('/tasks').send({ title: '   ' });
    expect(whitespace.status).toBe(400);

    const list = await request(app).get('/tasks');
    expect(list.body).toHaveLength(0);
  });

  it.each([
    ['a number', 123],
    ['null', null],
    ['a boolean', true],
    ['an array', []],
    ['an object', {}],
  ])('rejects a non-string title (%s) with 400 and creates no task', async (_label, title) => {
    const app = createApp();

    const res = await request(app).post('/tasks').send({ title });
    expect(res.status).toBe(400);
    expect(res.body.error).toContain('title');

    const list = await request(app).get('/tasks');
    expect(list.body).toHaveLength(0);
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

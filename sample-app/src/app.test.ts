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
 
  it.each([
    { name: 'missing title', payload: {} },
    { name: 'empty title', payload: { title: '' } },
    { name: 'whitespace-only title', payload: { title: '   ' } },
    { name: 'non-string title', payload: { title: 42 } },
  ])('rejects invalid title payload: $name', async ({ payload }) => {
    const app = createApp();
 
    const before = await request(app).get('/tasks');
    expect(before.body).toHaveLength(0);
 
    const res = await request(app).post('/tasks').send(payload);
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ error: 'Title must be a non-empty string' });
 
    const after = await request(app).get('/tasks');
    expect(after.body).toHaveLength(0);
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

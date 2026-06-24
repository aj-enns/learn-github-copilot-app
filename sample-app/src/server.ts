import { createApp } from './app.js';
import { TaskStore } from './tasks/store.js';

const port = Number(process.env.PORT ?? 3000);

const store = new TaskStore();
store.seed(['comb my hair', 'brush my teeth', 'pet the octocat', 'plan world domination']);

createApp(store).listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Task API listening on http://localhost:${port}`);
});

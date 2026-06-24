# Contributing

Thanks for helping make this a better resource for learning the GitHub Copilot app! 🎉

This repo is a community **learning resource**, not an official GitHub product. The goal is a
workshop that's accurate, easy to run, and friendly to newcomers.

## Ways to contribute

- **Fix or clarify the walkthroughs** in [`docs/`](docs/) — especially when the app's UI or docs
  change.
- **Improve the sample app or exercises** in [`sample-app/`](sample-app/) and
  [`exercises/`](exercises/).
- **Add a new exercise** that demonstrates an app feature not yet covered.
- **Report issues** — out‑of‑date steps, broken links, confusing instructions.

## Ground rules

- Keep the sample app **small, dependency‑light, and beginner‑friendly**. Resist scope creep.
- Keep `main` **green**: every change should keep `npm test` and `npm run build` passing.
- The four intentional gaps in the sample app are **load‑bearing** for the demos — don't fix them
  in `main`; they each have an exercise.
- Cross‑check product claims against the
  [official docs](https://docs.github.com/copilot/how-tos/github-copilot-app/getting-started) and
  link to them rather than restating volatile details.

## Local checks

```bash
cd sample-app
npm install
npm run build
npm test
```

## Pull requests

1. Fork and create a branch.
2. Make your change; run the checks above.
3. Open a PR describing **what** changed and **why**, and how you verified it.

By contributing, you agree your contributions are licensed under the repo's
[MIT License](LICENSE).

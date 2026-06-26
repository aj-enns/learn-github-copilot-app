# Reset the demo state

Use this helper to clean up the repository after you have finished a walkthrough or want to start over with a fresh set of practice issues and pull requests.

## What it preserves

The script preserves the four seeded exercise issues from [`seed-issues.md`](seed-issues.md) by matching their titles exactly. Everything else is treated as demo clutter and reset.

## Prerequisites

- GitHub CLI installed and authenticated (`gh auth login`)
- Run the command from the repository you want to reset

## Preview the changes

```bash
node scripts/reset-demo.mjs
```

The script runs in dry-run mode by default and prints the issues and pull requests it would close or delete.

## Apply the reset

```bash
node scripts/reset-demo.mjs --apply
```

This will:

- preserve the seeded exercise issues
- close any extra issues that are still open
- delete extra issues
- close any extra pull requests that are still open
- delete extra pull requests

> The reset is destructive for extra issues and pull requests. Review the dry-run output carefully before using `--apply`.

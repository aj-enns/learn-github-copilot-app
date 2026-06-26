#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const args = new Set(process.argv.slice(2));
const apply = args.has('--apply');
const repoRoot = process.cwd();
const gitRoot = runGitCommand(['rev-parse', '--show-toplevel'], repoRoot).trim();
const repo = runGhCommand(['repo', 'view', '--json', 'nameWithOwner', '--jq', '.nameWithOwner'], gitRoot).trim();
const seededTitles = readSeededIssueTitles(resolve(gitRoot, 'exercises', 'seed-issues.md'));

console.log(`Repository: ${repo}`);
console.log(`Preserving seeded issues: ${seededTitles.join(', ')}`);
console.log(apply ? 'Applying changes.' : 'Dry run only. Re-run with --apply to make changes.');

const issues = listIssues(repo);
const pullRequests = listPullRequests(repo);

const extraIssues = issues.filter((issue) => !seededTitles.includes(issue.title));
const extraPullRequests = pullRequests;

if (extraIssues.length === 0 && extraPullRequests.length === 0) {
  console.log('Nothing to reset.');
  process.exit(0);
}

for (const issue of extraIssues) {
  const action = issue.state === 'OPEN' ? `close issue #${issue.number}` : `delete issue #${issue.number}`;
  if (apply) {
    if (issue.state === 'OPEN') {
      runGhCommand(['issue', 'close', String(issue.number), '--repo', repo]);
    }
    runGhCommand(['issue', 'delete', String(issue.number), '--repo', repo, '--yes']);
  }
  console.log(`${apply ? 'Applied' : 'Would'} ${action}: ${issue.title}`);
}

for (const pr of extraPullRequests) {
  const action = pr.state === 'OPEN' ? `close pull request #${pr.number}` : `delete pull request #${pr.number}`;
  if (apply) {
    if (pr.state === 'OPEN') {
      runGhCommand(['pr', 'close', String(pr.number), '--repo', repo]);
    }
    runGhCommand(['pr', 'delete', String(pr.number), '--repo', repo, '--yes']);
  }
  console.log(`${apply ? 'Applied' : 'Would'} ${action}: ${pr.title}`);
}

function runGitCommand(args, cwd = repoRoot) {
  const result = spawnSync('git', args, { cwd, encoding: 'utf8' });
  if (result.status !== 0) {
    throw new Error(result.stderr.trim() || `git ${args.join(' ')} failed`);
  }
  return result.stdout;
}

function runGhCommand(args, cwd = repoRoot) {
  const result = spawnSync('gh', args, { cwd, encoding: 'utf8' });
  if (result.status !== 0) {
    throw new Error(result.stderr.trim() || `gh ${args.join(' ')} failed`);
  }
  return result.stdout;
}

function readSeededIssueTitles(seedFilePath) {
  if (!existsSync(seedFilePath)) {
    throw new Error(`Seed issues file not found: ${seedFilePath}`);
  }

  const content = readFileSync(seedFilePath, 'utf8');
  const titles = [...content.matchAll(/--title\s+"([^"]+)"/g)].map((match) => match[1]);
  if (titles.length === 0) {
    throw new Error(`No seeded issue titles found in ${seedFilePath}`);
  }

  return titles;
}

function listIssues(repo) {
  const output = runGhCommand(['issue', 'list', '--state', 'all', '--limit', '1000', '--repo', repo, '--json', 'number,title,state']);
  return JSON.parse(output);
}

function listPullRequests(repo) {
  const output = runGhCommand(['pr', 'list', '--state', 'all', '--limit', '1000', '--repo', repo, '--json', 'number,title,state']);
  return JSON.parse(output);
}

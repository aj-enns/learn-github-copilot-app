export const TASK_TITLE_ERROR = 'Title must be a non-empty string';

export function normalizeTaskTitle(title: unknown): string {
  if (typeof title !== 'string' || title.trim().length === 0) {
    throw new Error(TASK_TITLE_ERROR);
  }

  return title.trim();
}

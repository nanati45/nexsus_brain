import type { NotePriority, NoteRecord } from './note-types';

export type NoteFilterOptions = {
  priority?: NotePriority | 'all';
};

export function filterNotes<
  T extends Pick<NoteRecord, 'title' | 'content'> &
    Partial<Pick<NoteRecord, 'priority' | 'tags'>>,
>(
  notes: T[],
  keyword: string,
  options: NoteFilterOptions = {}
): T[] {
  const normalizedKeyword = keyword.trim().toLowerCase();
  const priority = options.priority ?? 'all';

  return notes.filter(({ title, content, priority: notePriority, tags }) => {
    const matchesPriority = priority === 'all' || notePriority === priority;

    if (!matchesPriority) {
      return false;
    }

    if (!normalizedKeyword) {
      return true;
    }

    const searchableTags = tags?.join(' ') ?? '';
    const searchableText = `${title} ${content} ${searchableTags}`.toLowerCase();
    return searchableText.includes(normalizedKeyword);
  });
}

import type { NoteRecord } from './note-types';

export function filterNotes<T extends Pick<NoteRecord, 'title' | 'content'>>(
  notes: T[],
  keyword: string
): T[] {
  const normalizedKeyword = keyword.trim().toLowerCase();

  if (!normalizedKeyword) {
    return notes;
  }

  return notes.filter(({ title, content }) => {
    const searchableText = `${title} ${content}`.toLowerCase();
    return searchableText.includes(normalizedKeyword);
  });
}

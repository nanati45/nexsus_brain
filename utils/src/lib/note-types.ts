export type NotePriority = 'low' | 'medium' | 'high';

export interface NoteRecord {
  id: string;
  title: string;
  content: string;
  createdAt: string | Date;
  priority: NotePriority;
  tags: string[];
}

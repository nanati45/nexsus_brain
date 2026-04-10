import React from 'react';
import { formatDate, truncateText, type NoteRecord } from '@nexus-brain/utils';

type NoteCardProps = {
  note: NoteRecord;
};

export function NoteCard({ note }: NoteCardProps) {
  return (
    <article
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '1rem',
        boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)',
        display: 'grid',
        gap: '0.75rem',
        padding: '1rem',
      }}
    >
      <header style={{ display: 'grid', gap: '0.35rem' }}>
        <h3
          style={{
            color: '#0f172a',
            fontSize: '1.05rem',
            margin: 0,
          }}
        >
          {note.title}
        </h3>
        <p
          style={{
            color: '#64748b',
            fontSize: '0.85rem',
            margin: 0,
          }}
        >
          {formatDate(note.createdAt)}
        </p>
      </header>
      <p
        style={{
          color: '#334155',
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {truncateText(note.content, 180)}
      </p>
    </article>
  );
}

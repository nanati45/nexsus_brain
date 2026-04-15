import { useState } from 'react';

import { NoteCard, SearchBar } from '@nexus-brain/ui-components';
import { filterNotes, type NoteRecord } from '@nexus-brain/utils';

export type NoteVaultProps = {
  notes: NoteRecord[];
};

export function NoteVault({ notes }: NoteVaultProps) {
  const [query, setQuery] = useState('');
  const filteredNotes = filterNotes(notes, query);

  return (
    <section
      style={{
        backgroundColor: '#f8fafc',
        border: '1px solid #e2e8f0',
        borderRadius: '1.25rem',
        display: 'grid',
        gap: '1rem',
        padding: '1.25rem',
      }}
    >
      <header style={{ display: 'grid', gap: '0.35rem' }}>
        <p
          style={{
            color: '#0f766e',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            margin: 0,
            textTransform: 'uppercase',
          }}
        >
          Vault
        </p>
        <h2
          style={{
            color: '#0f172a',
            fontSize: '1.4rem',
            margin: 0,
          }}
        >
          Search and revisit your notes
        </h2>
        <p
          style={{
            color: '#475569',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          Filter saved ideas when you have the space to organize and retrieve them.
        </p>
      </header>

      <SearchBar
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <div
        style={{
          color: '#64748b',
          fontSize: '0.9rem',
          margin: 0,
        }}
      >
        Showing {filteredNotes.length} of {notes.length} notes
      </div>

      {filteredNotes.length > 0 ? (
        <div
          style={{
            display: 'grid',
            gap: '1rem',
          }}
        >
          {filteredNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      ) : (
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px dashed #cbd5e1',
            borderRadius: '1rem',
            color: '#64748b',
            padding: '1.25rem',
            textAlign: 'center',
          }}
        >
          No notes match your search yet.
        </div>
      )}
    </section>
  );
}

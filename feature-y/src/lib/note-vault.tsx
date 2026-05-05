import { useCallback, useEffect, useRef, useState } from 'react';

import { AppButton, NoteCard, SearchBar } from '@nexus-brain/ui-components';
import {
  filterNotes,
  type NotePriority,
  type NoteRecord,
} from '@nexus-brain/utils';

export type NoteVaultProps = {
  notes: NoteRecord[];
};

export function NoteVault({ notes }: NoteVaultProps) {
  const [query, setQuery] = useState('');
  const [priority, setPriority] = useState<NotePriority | 'all'>('all');
  const previousNoteCount = useRef(notes.length);
  const filteredNotes = filterNotes(notes, query, { priority });
  const hasActiveFilters = query.trim().length > 0 || priority !== 'all';
  const highPriorityCount = notes.filter(
    (note) => note.priority === 'high'
  ).length;
  const tagCount = new Set(notes.flatMap((note) => note.tags ?? [])).size;
  const showAllNotes = useCallback(() => {
    setQuery('');
    setPriority('all');
  }, []);

  useEffect(() => {
    if (notes.length > previousNoteCount.current) {
      showAllNotes();
    }

    previousNoteCount.current = notes.length;
  }, [notes.length, showAllNotes]);

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

      <div
        style={{
          alignItems: 'end',
          display: 'grid',
          gap: '0.75rem',
          gridTemplateColumns: 'minmax(0, 1fr) auto',
        }}
      >
        <SearchBar
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <AppButton
          disabled={!hasActiveFilters}
          onClick={showAllNotes}
          style={{
            backgroundColor: hasActiveFilters ? '#0f766e' : '#94a3b8',
            minHeight: '2.75rem',
            whiteSpace: 'nowrap',
          }}
        >
          Show all notes
        </AppButton>
      </div>

      <div
        style={{
          display: 'grid',
          gap: '0.75rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
        }}
      >
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '0.9rem',
            padding: '0.85rem',
          }}
        >
          <span
            style={{
              color: '#64748b',
              display: 'block',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
          >
            High priority
          </span>
          <strong style={{ color: '#0f172a', fontSize: '1.35rem' }}>
            {highPriorityCount}
          </strong>
        </div>
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '0.9rem',
            padding: '0.85rem',
          }}
        >
          <span
            style={{
              color: '#64748b',
              display: 'block',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
          >
            Active tags
          </span>
          <strong style={{ color: '#0f172a', fontSize: '1.35rem' }}>
            {tagCount}
          </strong>
        </div>
      </div>

      <label
        style={{
          color: '#0f172a',
          display: 'grid',
          fontSize: '0.95rem',
          fontWeight: 600,
          gap: '0.5rem',
        }}
      >
        <span>Priority filter</span>
        <select
          value={priority}
          onChange={(event) =>
            setPriority(event.target.value as NotePriority | 'all')
          }
          style={{
            border: '1px solid #cbd5e1',
            borderRadius: '0.75rem',
            fontSize: '0.95rem',
            padding: '0.8rem 0.9rem',
            width: '100%',
          }}
        >
          <option value="all">All priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </label>

      <div
        style={{
          alignItems: 'center',
          color: '#475569',
          display: 'flex',
          flexWrap: 'wrap',
          fontSize: '0.92rem',
          fontWeight: 600,
          gap: '0.5rem',
          justifyContent: 'space-between',
          margin: 0,
        }}
      >
        <span>
          Showing {filteredNotes.length} of {notes.length} notes
        </span>
        {hasActiveFilters ? (
          <span style={{ color: '#0f766e' }}>Filtered view</span>
        ) : (
          <span style={{ color: '#64748b' }}>All notes</span>
        )}
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

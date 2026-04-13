import { useState, type FormEvent } from 'react';

import { AppButton } from '@nexus-brain/ui-components';
import { truncateText, type NoteRecord } from '@nexus-brain/utils';

export type NoteCaptureProps = {
  onCapture: (note: NoteRecord) => void;
};

export function NoteCapture({ onCapture }: NoteCaptureProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (!trimmedTitle || !trimmedContent) {
      return;
    }

    onCapture({
      id: crypto.randomUUID(),
      title: truncateText(trimmedTitle, 80),
      content: trimmedContent,
      createdAt: new Date().toISOString(),
    });

    setTitle('');
    setContent('');
  };

  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '1.25rem',
        boxShadow: '0 16px 40px rgba(15, 23, 42, 0.08)',
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
          Capture
        </p>
        <h2
          style={{
            color: '#0f172a',
            fontSize: '1.4rem',
            margin: 0,
          }}
        >
          Save a note without breaking focus
        </h2>
        <p
          style={{
            color: '#475569',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          Drop in the idea now. Organizing can happen later in the vault.
        </p>
      </header>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.9rem' }}>
        <label
          style={{
            color: '#0f172a',
            display: 'grid',
            fontSize: '0.95rem',
            fontWeight: 600,
            gap: '0.45rem',
          }}
        >
          <span>Title</span>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Quick label for the thought"
            style={{
              border: '1px solid #cbd5e1',
              borderRadius: '0.75rem',
              fontSize: '0.95rem',
              padding: '0.8rem 0.9rem',
            }}
          />
        </label>

        <label
          style={{
            color: '#0f172a',
            display: 'grid',
            fontSize: '0.95rem',
            fontWeight: 600,
            gap: '0.45rem',
          }}
        >
          <span>Note</span>
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="Type the idea before it disappears..."
            rows={6}
            style={{
              border: '1px solid #cbd5e1',
              borderRadius: '0.9rem',
              fontFamily: 'inherit',
              fontSize: '0.95rem',
              lineHeight: 1.6,
              padding: '0.9rem',
              resize: 'vertical',
            }}
          />
        </label>

        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            gap: '0.75rem',
            justifyContent: 'space-between',
          }}
        >
          <p
            style={{
              color: '#64748b',
              fontSize: '0.85rem',
              margin: 0,
            }}
          >
            Preview title: {truncateText(title || 'Untitled note', 30)}
          </p>
          <AppButton type="submit">Save Note</AppButton>
        </div>
      </form>
    </section>
  );
}

'use client';

import { useState } from 'react';

import { NoteCapture } from '@nexus-brain/feature-x';
import { NoteVault } from '@nexus-brain/feature-y';
import type { NoteRecord } from '@nexus-brain/utils';

import styles from './page.module.css';

const initialNotes: NoteRecord[] = [
  {
    id: 'seed-1',
    title: 'Separate capture from organization',
    content:
      'NexusBrain should let ideas land quickly first, then support retrieval when the user has the space to structure them.',
    createdAt: '2026-04-29T09:00:00.000Z',
  },
  {
    id: 'seed-2',
    title: 'Vault should support calm retrieval',
    content:
      'Search and filtering belong in the vault layer so the main app can stay focused on composition and shared state.',
    createdAt: '2026-04-29T11:15:00.000Z',
  },
];

export default function Index() {
  const [notes, setNotes] = useState<NoteRecord[]>(initialNotes);

  const handleCapture = (note: NoteRecord) => {
    setNotes((currentNotes) => [note, ...currentNotes]);
  };

  const latestNoteTitle = notes[0]?.title ?? 'No notes yet';

  return (
    <main className={styles.page}>
      <section className={styles.shell}>
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.heroTagRow}>
              <p className={styles.eyebrow}>NexusBrain</p>
              <span className={styles.statusPill}>Capture-first workflow</span>
            </div>
            <h1 className={styles.title}>
              Capture now. Organize when your mind is ready.
            </h1>
            <p className={styles.subtitle}>
              A second-brain dashboard built around low-friction capture and
              high-clarity retrieval.
            </p>
          </div>
          <div className={styles.metrics}>
            <div className={styles.metricCard}>
              <span className={styles.metricLabel}>Saved Notes</span>
              <strong className={styles.metricValue}>{notes.length}</strong>
            </div>
            <div className={styles.metricCard}>
              <span className={styles.metricLabel}>System Role</span>
              <strong className={styles.metricValue}>Orchestrator</strong>
            </div>
          </div>
        </header>

        <section className={styles.overview}>
          <div className={styles.overviewCard}>
            <span className={styles.overviewLabel}>Latest Capture</span>
            <p className={styles.overviewText}>{latestNoteTitle}</p>
          </div>
          <div className={styles.overviewCard}>
            <span className={styles.overviewLabel}>Interaction Model</span>
            <p className={styles.overviewText}>
              Capture stays light, while the vault handles retrieval when you
              are ready to sort and search.
            </p>
          </div>
        </section>

        <section className={styles.workspace}>
          <div className={styles.capturePane}>
            <NoteCapture onCapture={handleCapture} />
          </div>
          <div className={styles.vaultPane}>
            <NoteVault notes={notes} />
          </div>
        </section>
      </section>
    </main>
  );
}

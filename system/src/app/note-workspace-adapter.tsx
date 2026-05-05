'use client';

import { useCallback, useMemo, useState } from 'react';

import type { NoteCaptureProps } from '@nexus-brain/feature-x';
import type { NoteRecord } from '@nexus-brain/utils';

import {
  NoteWorkspaceView,
  type NoteWorkspaceViewProps,
} from './note-workspace-view';

const initialNotes: NoteRecord[] = [
  {
    id: 'seed-1',
    title: 'Separate capture from organization',
    content:
      'NexusBrain should let ideas land quickly first, then support retrieval when the user has the space to structure them.',
    createdAt: '2026-04-29T09:00:00.000Z',
    priority: 'medium',
    tags: ['capture', 'workflow'],
  },
  {
    id: 'seed-2',
    title: 'Vault should support calm retrieval',
    content:
      'Search and filtering belong in the vault layer so the main app can stay focused on composition and shared state.',
    createdAt: '2026-04-29T11:15:00.000Z',
    priority: 'high',
    tags: ['retrieval', 'architecture'],
  },
];

type NoteWorkspaceViewModel = NoteWorkspaceViewProps;

function useNoteWorkspaceAdapter(): NoteWorkspaceViewModel {
  const [notes, setNotes] = useState<NoteRecord[]>(initialNotes);
  const handleCapture = useCallback<NoteCaptureProps['onCapture']>((note) => {
    setNotes((currentNotes) => [note, ...currentNotes]);
  }, []);

  return useMemo(() => {
    return {
      latestNoteTitle: notes[0]?.title ?? 'No notes yet',
      highPriorityCount: notes.filter((note) => note.priority === 'high').length,
      noteCount: notes.length,
      captureProps: {
        onCapture: handleCapture,
      },
      vaultProps: {
        notes,
      },
    };
  }, [handleCapture, notes]);
}

export function NoteWorkspaceAdapter() {
  const workspace = useNoteWorkspaceAdapter();

  return <NoteWorkspaceView {...workspace} />;
}

import { NoteCapture, type NoteCaptureProps } from '@nexus-brain/feature-x';
import { NoteVault, type NoteVaultProps } from '@nexus-brain/feature-y';

import styles from './page.module.css';

export type NoteWorkspaceViewProps = {
  highPriorityCount: number;
  latestNoteTitle: string;
  noteCount: number;
  captureProps: NoteCaptureProps;
  vaultProps: NoteVaultProps;
};

export function NoteWorkspaceView({
  highPriorityCount,
  latestNoteTitle,
  noteCount,
  captureProps,
  vaultProps,
}: NoteWorkspaceViewProps) {
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
              <strong className={styles.metricValue}>{noteCount}</strong>
            </div>
            <div className={styles.metricCard}>
              <span className={styles.metricLabel}>System Role</span>
              <strong className={styles.metricValue}>Orchestrator</strong>
            </div>
            <div className={styles.metricCard}>
              <span className={styles.metricLabel}>Focus Queue</span>
              <strong className={styles.metricValue}>{highPriorityCount}</strong>
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
            <NoteCapture {...captureProps} />
          </div>
          <div className={styles.vaultPane}>
            <NoteVault {...vaultProps} />
          </div>
        </section>
      </section>
    </main>
  );
}

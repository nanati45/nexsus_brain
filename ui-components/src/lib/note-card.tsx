import { formatDate, truncateText, type NoteRecord } from '@nexus-brain/utils';

type NoteCardProps = {
  note: NoteRecord;
};

export function NoteCard({ note }: NoteCardProps) {
  const priority = note.priority ?? 'medium';
  const tags = note.tags ?? [];
  const priorityColor =
    priority === 'high'
      ? '#b91c1c'
      : priority === 'medium'
        ? '#a16207'
        : '#047857';

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
      <header style={{ display: 'grid', gap: '0.5rem' }}>
        <div
          style={{
            alignItems: 'start',
            display: 'flex',
            gap: '0.75rem',
            justifyContent: 'space-between',
          }}
        >
          <h3
            style={{
              color: '#0f172a',
              fontSize: '1.05rem',
              margin: 0,
            }}
          >
            {note.title}
          </h3>
          <span
            style={{
              backgroundColor: `${priorityColor}16`,
              border: `1px solid ${priorityColor}33`,
              borderRadius: '999px',
              color: priorityColor,
              fontSize: '0.72rem',
              fontWeight: 800,
              padding: '0.25rem 0.55rem',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            {priority}
          </span>
        </div>
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
      {tags.length > 0 ? (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.4rem',
          }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                backgroundColor: '#eef2ff',
                border: '1px solid #c7d2fe',
                borderRadius: '999px',
                color: '#3730a3',
                fontSize: '0.78rem',
                fontWeight: 700,
                padding: '0.25rem 0.55rem',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}

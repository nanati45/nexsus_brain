import type { ChangeEventHandler, InputHTMLAttributes } from 'react';

type SearchBarProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  label?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export function SearchBar({
  id = 'note-search',
  label = 'Search notes',
  placeholder = 'Search by title or content',
  style,
  value,
  onChange,
  ...props
}: SearchBarProps) {
  return (
    <label
      htmlFor={id}
      style={{
        color: '#0f172a',
        display: 'grid',
        fontSize: '0.95rem',
        fontWeight: 600,
        gap: '0.5rem',
      }}
    >
      <span>{label}</span>
      <input
        id={id}
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          border: '1px solid #cbd5e1',
          borderRadius: '0.75rem',
          fontSize: '0.95rem',
          padding: '0.8rem 0.9rem',
          width: '100%',
          ...style,
        }}
        {...props}
      />
    </label>
  );
}

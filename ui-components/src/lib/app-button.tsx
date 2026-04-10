import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type AppButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export function AppButton({
  children,
  style,
  type = 'button',
  ...props
}: AppButtonProps) {
  return (
    <button
      type={type}
      style={{
        border: 'none',
        borderRadius: '0.75rem',
        backgroundColor: '#0f766e',
        color: '#f8fafc',
        cursor: 'pointer',
        fontSize: '0.95rem',
        fontWeight: 600,
        padding: '0.75rem 1.25rem',
        transition: 'transform 120ms ease, opacity 120ms ease',
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}

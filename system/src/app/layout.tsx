import './global.css';

export const metadata = {
  title: 'NexusBrain',
  description: 'A split-view second brain for fast capture and deliberate retrieval.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

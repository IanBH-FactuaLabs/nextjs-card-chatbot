export const runtime = 'edge';

export const metadata = {
  title: 'Greeting Card Chatbot',
  description: 'AI-generated greeting cards',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', padding: '20px' }}>{children}</body>
    </html>
  );
}

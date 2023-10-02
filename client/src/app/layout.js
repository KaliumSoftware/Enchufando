import './globals.css';

export const metadata = {
  title: 'Enchufando',
  description: 'Primer proyecto de Kalium Software'
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body>{children}</body>
    </html>
  );
}

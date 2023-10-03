import Footer from '@/components/Footer';
import './globals.css';
import NavBar from '@/components/NavBar';

export const metadata = {
  title: 'Enchufando',
  description: 'Primer proyecto de Kalium Software'
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

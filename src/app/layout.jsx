import Footer from '@/components/Footer';
import './globals.css';
import NavBar from '@/components/NavBar';
import { Providers } from './providers';

export const metadata = {
  title: 'Enchufando',
  description: 'Primer proyecto de Kalium Software'
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

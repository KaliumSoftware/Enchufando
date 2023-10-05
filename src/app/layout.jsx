import Footer from '@/components/Footer';
import './globals.css';
import { Providers } from './providers';

import NavBar from '@/components/nav-bars/NavBar';

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

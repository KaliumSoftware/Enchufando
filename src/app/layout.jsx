import Footer from '@/components/organisms/Footer';
import './globals.css';
import { Providers } from './providers';
import NavbarMain from '@/components/organisms/NavbarMain';

export const metadata = {
  title: 'Enchufando',
  description: 'Primer proyecto de Kalium Software'
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body>
        <Providers>
          {/*  <NavbarMain /> */}
          {children}
          {/*  <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}

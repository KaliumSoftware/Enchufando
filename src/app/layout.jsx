import Footer from '@/components/Footer';
import './globals.css';
import { Providers } from './providers';
import { NavbarWithMegaMenu } from '@/components/nav-bars/ResponsiveNavBar';

export const metadata = {
  title: 'Enchufando',
  description: 'Primer proyecto de Kalium Software'
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body>
        <Providers>
          <NavbarWithMegaMenu />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

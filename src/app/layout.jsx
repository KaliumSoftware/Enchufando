import Footer from '@/components/Footer';
import './globals.css';
import { Providers } from './providers';
import { NavbarWithMegaMenu } from '@/components/nav-bars/ResponsiveNavBar';
import NavBar from '@/components/nav-bars/NavBar';

export const metadata = {
  title: 'Enchufando',
  description: 'Primer proyecto de Kalium Software'
};
const changeAfter = true;
export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body>
        <Providers>
          {!changeAfter ? <NavbarWithMegaMenu /> : <NavBar />}

          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

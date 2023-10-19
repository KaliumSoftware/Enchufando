'use client';
import { usePathname, useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {pathname.split('/')[1] !== 'admin' && (
        <footer className='bg-gray-100 rounded-lg shadow dark:bg-gray-900'>
          <div className='w-full max-w-screen-2xl mx-auto p-4 md:py-14'>
            <div className='sm:flex sm:items-center sm:justify-between'>
              <div
                onClick={() => router.push('/')}
                className='flex items-center mb-4 sm:mb-0 cursor-pointer'
              >
                <span className='self-center  text-4xl font-semibold whitespace-nowrap dark:text-white'>
                  Enchufando
                </span>
              </div>
              <ul className='flex flex-wrap items-center mb-6 text-lg font-medium  sm:mb-0 dark:text-gray-400'>
                <li>
                  <div
                    onClick={() => router.push('/')}
                    className='mr-4 hover:underline md:mr-6 cursor-pointer'
                  >
                    LinkedIn
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => router.push('/')}
                    className='mr-4 hover:underline md:mr-6 cursor-pointer'
                  >
                    Facebook
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => router.push('/contact-us')}
                    className='hover:underline cursor-pointer'
                  >
                    Contactanos
                  </div>
                </li>
              </ul>
            </div>
            <hr className='my-6 border-black sm:mx-auto dark:border-gray-700 lg:my-8' />
            <span className='block text-sm  sm:text-center dark:text-gray-400'>
              © 2023{' '}
              <div
                onClick={() => router.push('/')}
                className='hover:underline cursor-pointer'
              >
                Kalium Software
              </div>
              . Todos los derechos reservados.
            </span>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;

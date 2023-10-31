'use client';
import { usePathname } from 'next/navigation';
import { Typography } from '@material-tailwind/react';
import Image from 'next/image';
import logoBlack from '../../../assets/logo-black-png-transformed.png';

const Footer = () => {
  const pathname = usePathname();

  return (
    <div className='w-full'>
      {pathname.split('/')[1] !== 'admin' && (
        <footer className='w-full bg-white p-8'>
          <div className='flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between'>
            <Image
              src={logoBlack}
              width={50}
              height={50}
              alt='logo Empresa'
            />
            <ul className='flex flex-wrap items-center gap-y-2 gap-x-8'>
              <li>
                <Typography
                  as='a'
                  href='#'
                  className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
                >
                  Sobre nosotros
                </Typography>
              </li>
              <li>
                <Typography
                  as='a'
                  href='#'
                  className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
                >
                  Contactános
                </Typography>
              </li>
            </ul>
          </div>
          <hr className='my-8 border-blue-gray-50' />
          <Typography className='text-center font-normal'>
            &copy; 2023 Kalium Software
          </Typography>
        </footer>
      )}
    </div>
  );
};

export default Footer;

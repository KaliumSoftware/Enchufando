'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import enchufandoStock1 from '../../../assets/galpon1.jpeg';
import enchufandoStock2 from '../../../assets/galpon2.jpeg';
import Image from 'next/image';

const SectionProducts = () => {
  const router = useRouter();

  return (
    <section className='mt-20'>
      <div className='mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 items-center'>
          <div className='bg-white p-8 md:p-12 lg:px-16 lg:py-24'>
            <div className='mx-auto max-w-xl text-center'>
              <h2 className='text-3xl font-bold text-black md:text-3xl'>
                Stock Permanente Garantizado
              </h2>

              <p className='block text-black sm:mt-4 sm:block'>
                Descubrí nuestros accesorios para tuberías de agua y mangueras de riego
                líderes en el mercado.
              </p>

              <div className='mt-4 md:mt-8'>
                <div
                  onClick={() => router.push('/store')}
                  className='inline-block rounded border border-white bg-blueMain px-12 py-3 text-sm font-medium text-white transition hover:bg-blueDark hover:text-white focus:outline-none focus:ring focus:ring-yellow-400 cursor-pointer'
                >
                  Ir a la Tienda
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2 '>
            <div className='md:h-[60vh]'>
              <Image
                alt='Stock'
                src={enchufandoStock1}
                className='w-full object-cover sm:h-56 md:h-full'
              />
            </div>

            <div className='md:h-[60vh]'>
              <Image
                alt='Stock'
                src={enchufandoStock2}
                className='w-full object-cover sm:h-56 md:h-full'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProducts;

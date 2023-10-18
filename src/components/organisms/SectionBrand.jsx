'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const SectionBrand = () => {
  const router = useRouter();

  return (
    <section className='bg-gray-50'>
      <div className='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center'>
        <div className='mx-auto max-w-xl text-center'>
          <h1 className='text-3xl font-extrabold sm:text-5xl'>
            Calidad que Fluye Con Vos
            <strong className='font-extrabold text-blueMain sm:block'>
              Mejora la Eficiencia
            </strong>
          </h1>

          <p className='mt-4 sm:text-xl/relaxed'>
            Descubrí nuestra gama de accesorios de vanguardia para
            conexiones de tuberías de agua y mangueras de riego.
            ¡Conectate a la calidad!
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            <div
              onClick={() => router.push('/store')}
              className='block w-full rounded bg-blueMain px-12 py-3 text-sm font-medium text-white shadow hover:bg-blueDark focus:outline-none focus:ring active:bg-blueMain sm:w-auto cursor-pointer'
            >
              Tienda
            </div>

            <div
              onClick={() => router.push('/contact-us')}
              className='block w-full rounded px-12 py-3 text-sm font-medium text-blueMain shadow hover:text-blueDark focus:outline-none focus:ring active:text-blueMain sm:w-auto cursor-pointer'
            >
              Contactanos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBrand;

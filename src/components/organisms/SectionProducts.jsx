'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const SectionProducts = () => {
  const router = useRouter();

  return (
    <section>
      <div className='mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='bg-white p-8 md:p-12 lg:px-16 lg:py-24'>
            <div className='mx-auto max-w-xl text-center'>
              <h2 className='text-2xl font-bold text-black md:text-3xl'>
                Tecnología de Conexión de Agua Innovadora: Descubrí
                Nuestros Destacados
              </h2>

              <p className='hidden text-black sm:mt-4 sm:block'>
                ¡Conectate a la calidad! Descubrí nuestros accesorios
                para tuberías de agua y mangueras de riego líderes en
                el mercado. 💧🌱
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

          <div className='grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2'>
            <img
              alt='Student'
              src='https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80'
              className='h-40 w-full object-cover sm:h-56 md:h-full'
            />

            <img
              alt='Student'
              src='https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
              className='h-40 w-full object-cover sm:h-56 md:h-full'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProducts;

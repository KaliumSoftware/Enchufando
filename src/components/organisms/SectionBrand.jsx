'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
const SectionBrand = () => {
  const router = useRouter();

  return (
    <section
      style={{
        backgroundAttachment: 'fixed',
        backgroundImage:
          "url('https://res.cloudinary.com/djbeg0zrq/image/upload/v1699978340/pics/fp4x6zpoak2qsr5shiqg.png')"
      }}
      className='h-[80vh] bg-cover lg:bg-right-top bg-no-repeat'
    >
      <div className='h-full w-full'>
        <div className='w-screen h-full lg:flex lg:justify-center lg:items-center filter bg-black/10 md:p-4 md:rounded-xl'>
          <div className='h-full w-full bg-white lg:h-[80%] lg:w-1/2 md:rounded-xl md:bg-white/90 '>
            <div className='flex flex-col justify-center h-full mx-auto max-w-xl text-center'>
              <h1 className='flex flex-col text-3xl font-extrabold sm:text-5xl'>
                <strong className='font-extrabold mb-2'>Enchufando</strong>

                <strong className='font-extrabold text-blueMain block'>
                  Calidad que fluye con vos
                </strong>
              </h1>

              <p className='mt-4 sm:text-xl/relaxed'>
                Descubrí nuestra gama de accesorios de vanguardia para conexiones de
                tuberías de agua y mangueras de riego. ¡Conectate a la calidad!
              </p>

              <div className='mt-8 flex flex-wrap justify-center gap-4'>
                <div
                  onClick={() => router.push('/store')}
                  className='block w-full rounded mx-2 md:mx-0 bg-blueMain px-12 py-3 text-md font-medium text-white shadow hover:bg-blueDark focus:outline-none focus:ring active:bg-blueMain sm:w-auto cursor-pointer'
                >
                  Tienda
                </div>

                <div
                  onClick={() => router.push('/contact-us')}
                  className='block  w-full mx-2 md:mx-0 rounded px-12 py-3 text-md font-medium text-blueMain shadow hover:text-blueDark focus:outline-none focus:ring active:text-blueMain sm:w-auto cursor-pointer'
                >
                  Contactanos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBrand;

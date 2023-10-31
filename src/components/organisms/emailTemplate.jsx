import React from 'react';

export const EmailTemplate = ({ firstName }) => (
  <div className='bg-gray-100'>
    <div className='container mx-auto p-4'>
      <div className='bg-white p-4 rounded-lg shadow-lg'>
        <img
          src='images/image-4.png'
          alt='image'
          title='image'
          className='mx-auto w-1/8'
        />
        <h1 className='text-4xl font-semibold text-black my-4'>
          <strong>Al Fin Llego Krona</strong>
        </h1>
        <div className='text-2xl text-justify text-white'>
          <p>
            Los productos de la Línea Krona son fabricados con
            materiales de PVC de alta calidad y ofrecen una solución
            confiable y duradera para sus necesidades de plomería en
            proyectos de construcción.
          </p>
        </div>
        <img
          src='https://res.cloudinary.com/djbeg0zrq/image/upload/v1697756704/products/rgvszl9tpfu7f47ulhzo.jpg'
          alt=''
          title=''
          className='mx-auto w-full max-w-md my-4'
        />
        <img
          src='https://res.cloudinary.com/djbeg0zrq/image/upload/v1697756703/products/dktxjwggvbwjsytkjemw.jpg'
          alt=''
          title=''
          className='mx-auto w-full max-w-md my-4'
        />
        <a
          href='https://www.enchufando.com'
          target='_blank'
          className='block mx-auto w-30 max-w-full my-4 p-2 bg-white rounded-full text-black text-center'
        >
          <strong>Visit Us</strong>
        </a>
      </div>
    </div>
    <div className='container mx-auto p-4 my-4'>
      <div className='bg-white p-4 rounded-lg shadow-lg text-center'>
        <div className='flex justify-center'>
          <a
            href='https://linkedin.com/in/kaliumsoftware'
            title='LinkedIn'
            target='_blank'
          >
            <img
              src='images/image-1.png'
              alt='LinkedIn'
              title='LinkedIn'
              className='w-8 h-8'
            />
          </a>
          <a
            href='https://www.instagram.com/kalium.software/'
            title='Instagram'
            target='_blank'
          >
            <img
              src='images/image-2.png'
              alt='Instagram'
              title='Instagram'
              className='w-8 h-8 ml-4'
            />
          </a>
        </div>
        <p className='text-lg my-4'>
          © Kalium Software 2023 • Todos los derechos reservados.
          <br />
          General Pacheco, Buenos Aires
        </p>
      </div>
    </div>
  </div>
);

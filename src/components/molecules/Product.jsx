import React from 'react';
import Image from 'next/image';
import useProduct from '@/hooks/useProduct';

const Product = (props) => {
  const { name, image, handleAddCart } = useProduct(props);

  return (
    <article className='py-4 flex flex-col items-center bg-white border-b-2 border-gray-200 rounded-xl'>
      <h5 className='mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-800 whitespace-break-spaces'>
        {name}
      </h5>
      <section className='pb-0 pt-2 px-4 flex-col items-start'>
        <Image
          alt='Card background'
          className='object-cover rounded-xl md:rounded-t-lg md:w-64'
          src={image?.secure_url}
          width={270}
          height={270}
        />
      </section>

      <div className='w-full flex items-center justify-center gap-4 pt-4'>
        <button className='w-40 inline-flex gap-2 justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300'>
          Ver más detalles
          <svg
            className='w-3.5 h-3.5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 5h12m0 0L9 1m4 4L9 9'
            />
          </svg>
        </button>
        <button
          onClick={() => handleAddCart(props)}
          className='w-40 inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
        >
          Agregar al carrito
          <svg
            className='w-3.5 h-3.5 ml-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 5h12m0 0L9 1m4 4L9 9'
            />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default Product;

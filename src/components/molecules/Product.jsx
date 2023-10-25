import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from '@nextui-org/react';
import Image from 'next/image';
import useProduct from '@/hooks/useProduct';

const Product = (props) => {
  const { name, image, handleAddCart } = useProduct(props);

  return (
    <article className='py-4 flex bg-white border-b-2 border-gray-200'>
      <section className='pb-0 pt-2 px-4 flex-col items-start'>
        <Image
          alt='Card background'
          className='object-cover rounded-xl md:rounded-t-lg md:w-64'
          src={image?.secure_url}
          width={270}
          height={270}
        />
      </section>
      <section className='overflow-visible py-2 flex flex-col gap-4'>
        <h5 className='mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-800 whitespace-break-spaces'>
          {name}
        </h5>
        <div className='pt-0'>
          <button
            onClick={() => handleAddCart(props)}
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
          >
            Agregar al Carrito
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
      </section>
    </article>
  );
};

export default Product;

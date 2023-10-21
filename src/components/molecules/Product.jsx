import React from 'react';
import useProduct from '@/hooks/useProduct';

const Product = (props) => {
  const { name, image, handleAddCart } = useProduct(props);

  return (
    <div className='max-h-[405px] max-w-full w-full m-2 md:m-0 md:mb-5 md:w-fit flex md:block bg-white border border-gray-200 rounded-lg shadow'>
      <div className='w-32 md:w-full flex items-center md:justify-center'>
        <img
          className='rounded-l-lg md:rounded-t-lg md:w-64'
          src={image.secure_url}
          alt={`imagen de ${name}`}
        />
      </div>

      <div className='md:h-[148px] p-3 pl-5 w-full md:p-5 bg-gray-200 overflow-x-clip'>
        <div className='md:w-[250px] pr-5 overflow-x-hidden'>
          <h5 className='mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-800 whitespace-break-spaces'>
            {name}
          </h5>
        </div>
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
    </div>
  );
};

export default Product;

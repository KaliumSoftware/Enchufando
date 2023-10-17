import React, { useState } from 'react';
import { Select, Option, Checkbox } from '@material-tailwind/react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import TooltipReusable from '../atoms/TooltipReusable';
import { v4 as uuidv4 } from 'uuid';
const Product = (props) => {

  const dispatch = useDispatch();
  const { name, image } = props



  // add products to cart logic

  const handleAddCart = (product) => {

    product = {
      ...product,
      localId: uuidv4(),
    }
    if (product) {
      return dispatch(addToCart(product));
    }
    return alert('Selecciona un producto');
  };



  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5 w-full'>
      <a href='#'>
        <img
          className='rounded-t-lg w-full'
          src={image.url}
          alt={`imagen de ${name}`}
        />
      </a>

      <div className='p-5 bg-gray-200 w-full'>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white'>
            {name}
          </h5>
        </a>
        <button
          onClick={() => handleAddCart(props)}

          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
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

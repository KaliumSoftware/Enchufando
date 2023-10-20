import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';

const Product = (props) => {
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const dispatch = useDispatch();
  const { name, image } = props;

  // add products to cart logic

  const handleAddCart = (product) => {
    if (loggedUser.id) {
      product = {
        ...product,
        localId: uuidv4()
      };

      if (product) {
        return dispatch(addToCart(product));
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Ups...',
        text: 'Para agregar productos al carrito primero debes iniciar sesión'
      });
    }
  };

  return (
    <div className='max-w-full w-full m-2 md:m-0 md:mb-5 md:w-fit flex md:block bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <div className='w-32 md:w-full md:flex md:justify-center'>
        <img
          className='rounded-l-lg md:rounded-t-lg md:w-fit'
          src={image.secure_url}
          alt={`imagen de ${name}`}
        />
      </div>

      <div className='p-3 pl-5 md:p-5 bg-gray-200'>
        <div className='md:w-80 text-clip'>
          <h5 className='mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-800 dark:text-white'>
            {name}
          </h5>
        </div>
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

'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CartProduct from '../molecules/CartProduct';
import { v4 as uuidv4 } from 'uuid';
import AsidePrice from '../molecules/AsidePirce';

function ShoppingCart() {
  const [show, setShow] = useState(false);
  const cartProducts = useSelector(
    (state) => state.cart.cartProducts
  );

  return (
    <>
      <div className='flex items-center justify-center py-8'>
        <button
          type='button'
          onClick={() => setShow(!show)}
          className='z-96 relative inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          // className='py-2 px-10 rounded bg-black hover:bg-indigo-600  text-white'
        >
          {cartProducts?.length ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-shopping-cart-filled'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
              ></path>
              <path
                d='M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z'
                stroke-width='0'
                fill='currentColor'
              ></path>
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-shopping-cart'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
              ></path>
              <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0'></path>
              <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0'></path>
              <path d='M17 17h-11v-14h-2'></path>
              <path d='M6 5l14 1l-1 7h-13'></path>
            </svg>
          )}

          {Boolean(cartProducts?.length) && (
            <div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900'>
              {cartProducts?.length}
            </div>
          )}
        </button>
      </div>
      <div
        className={
          show
            ? 'fixed top-0 left-0 w-[99vw] h-screen bg-black bg-opacity-50'
            : 'hidden'
        }
      ></div>
      <div
        className={
          show
            ? 'transition-all fixed w-[99vw] h-screen left-0 top-0 overflow-y-auto overflow-x-hidden'
            : ' fixed left-96'
        }
        id='chec-div'
      >
        <div
          className='w-full absolute z-10 left-0 h-full overflow-x-hidden transform translate-x-0  duration-700'
          id='checkout'
        >
          <div
            className='flex md:flex-row flex-col justify-end'
            id='cart'
          >
            <div
              className='lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen'
              id='scroll'
            >
              <div
                className='flex items-center text-gray-500 hover:text-black cursor-pointer'
                onClick={() => setShow(!show)}
              >
                Volver
              </div>
              <p className='text-5xl font-black leading-10 text-gray-800 pt-3'>
                Tu Pedido
              </p>
              {cartProducts?.map((product) => (
                <CartProduct
                  key={uuidv4()}
                  localId={uuidv4()}
                  {...product}
                />
              ))}
            </div>
            <AsidePrice />
          </div>
        </div>
      </div>

      <style>
        {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
        `}
      </style>
    </>
  );
}

export default ShoppingCart;

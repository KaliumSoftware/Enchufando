'use client';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCart } from '@/redux/slices/cartSlice';
import CartProduct from '../molecules/CartProduct';
import { v4 as uuidv4 } from 'uuid';
import AsidePrice from '../molecules/AsidePirce';

function ShoppingCart() {
  const [show, setShow] = useState(false);
  const cartProducts = useSelector(
    (state) => state.cart.cartProducts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const productsOnLS = JSON.parse(
      localStorage.getItem('cartProducts')
    );

    if (productsOnLS?.length) {
      dispatch(setCart(productsOnLS));
    }
  }, []);

  return (
    <>
      <div className='flex items-center justify-center py-8'>
        <button
          type='button'
          onClick={() => setShow(!show)}
          className={`${
            show && 'hidden'
          } relative inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
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
                strokeWidth='0'
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
            ? 'transition-all fixed w-full h-screen left-0 top-0 overflow-y-auto overflow-x-hidden z-50'
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
                className='flex items-center justify-between w-full'
                onClick={() => setShow(!show)}
              >

                <button className="group flex items-center justify-center space-x-2 text-white bg-black border border-gray-800 hover:bg-primary hover:border-blue-800 rounded-lg px-5 py-1 text-center mr-2 mb-2 transform origin-right scale-x-90 hover:scale-x-100 transition-transform">
                  <svg className="h-4 w-4 mr-1 transform scale-0 group-hover:scale-125 transition-transform"
                    xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
                    <path className='fill-current' d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                  </svg>
                  <span>Volver</span>
                </button>

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

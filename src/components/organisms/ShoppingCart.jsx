'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartProduct from '../molecules/CartProduct';
function ShoppingCart() {
  const [show, setShow] = useState(false);
  const cartProducts = useSelector((state) => state.cart.cartProducts);










  return (
    <>
      <div className='flex items-center justify-center py-8'>
        <button
          onClick={() => setShow(!show)}
          className='py-2 px-10 rounded bg-indigo-600 hover:bg-indigo-700 text-white'
        >
          Carrito Compras
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
                className='flex items-center text-gray-500 hover:text-gray-600 cursor-pointer'
                onClick={() => setShow(!show)}
              >
                back

              </div>
              <p className='text-5xl font-black leading-10 text-gray-800 pt-3'>
                Tu Pedido
              </p>
              {cartProducts?.map((product) => (
                <CartProduct
                  key={product.id}
                  {...product}
                />
              ))}
            </div>
            <div className=' md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full'>
              <div className='flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto'>
                <div>
                  <p className='text-4xl font-black leading-9 text-gray-800'>
                    resumen
                  </p>
                  <div className='flex items-center justify-between pt-16'>
                    <p className='text-base leading-none text-gray-800'>
                      sabes contar?
                    </p>
                    <p className='text-base leading-none text-gray-800'>
                      $9,000
                    </p>
                  </div>
                  <div className='flex items-center justify-between pt-5'>
                    <p className='text-base leading-none text-gray-800'>
                      Shipping
                    </p>
                    <p className='text-base leading-none text-gray-800'>
                      $30
                    </p>
                  </div>
                  <div className='flex items-center justify-between pt-5'>
                    <p className='text-base leading-none text-gray-800'>
                      Impuesto
                    </p>
                    <p className='text-base leading-none text-gray-800'>
                      $35
                    </p>
                  </div>
                </div>
                <div>
                  <div className='flex items-center pb-6 justify-between lg:pt-5 pt-20'>
                    <p className='text-2xl leading-normal text-gray-800'>
                      Total Final
                    </p>
                    <p className='text-2xl font-bold leading-normal text-right text-gray-800'>
                      $10.000

                    </p>
                  </div>
                  <button
                    onClick={() => setShow(!show)}
                    className='text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white'
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
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

'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CartProduct from '../molecules/CartProduct';
import { v4 as uuidv4 } from 'uuid';
import AsidePrice from '../molecules/AsidePirce';


function ShoppingCart() {
  const [show, setShow] = useState(false);
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  return (
    <>
      <div className='flex items-center justify-center py-8'>
        <button
          onClick={() => setShow(!show)}
          className='py-2 px-10 rounded bg-black hover:bg-indigo-600  text-white'
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

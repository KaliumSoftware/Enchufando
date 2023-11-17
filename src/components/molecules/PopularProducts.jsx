'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getPopularProducts } from '@/redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const PopularProducts = () => {
  const popularProducts = useSelector((state) => state.product.popularProducts);
  const { loggedUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    const getOrders = async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/order?userId=${loggedUser.id}`
      );
      dispatch(getPopularProducts(data));
    };
    getOrders();
  }, []);

  console.log(popularProducts);
  return (
    <div className='h-full w-[20rem] bg-white p-4 rounded-sm border border-gray-200'>
      <strong className='text-gray-700 font-medium'>Productos mas vendidos</strong>
      <div className='mt-4 flex flex-col gap-3'>
        {popularProducts.map((product, index) => (
          <div
            key={index}
            className='flex items-start hover:no-underline'
          >
            <div className='w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm'>
              <img
                className='w-full h-full object-cover rounded-sm'
                src='https://res.cloudinary.com/djbeg0zrq/image/upload/v1698780712/logos/vgfxkdi5wsioedonqbrs.png'
                alt='product image'
              />
            </div>
            <div className='ml-4 flex-1'>
              <p className='text-sm text-gray-500'>{'nombre'}</p>
              <span
                className={
                  'product sales' === 0
                    ? 'text-red-500 text-xs font-medium'
                    : 'product sales' > 50
                    ? 'text-green-500 text-xs font-medium'
                    : 'text-orange-500 text-xs font-medium'
                }
              >
                {'product sales' === 0 ? 'Sin Ordenes' : 'hola' + ' Ordenes'}
              </span>
            </div>
            <div className='text-xs text-gray-400 pl-1.5'>{'hola'}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;

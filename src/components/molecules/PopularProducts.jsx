'use client';
import axios from 'axios';
import { useEffect } from 'react';
import { getPopularProducts } from '@/redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const PopularProducts = () => {
  const popularProducts = useSelector((state) => state.product.popularProducts);
  const { loggedUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const getOrders = async () => {
      const { data } = await axios(
        `${process.env.NEXT_PUBLIC_API_URL}/product?userId=${loggedUser.id}`
      );
      dispatch(getPopularProducts(data));
    };
    getOrders();
  }, []);

  return (
    <div className='rounded-xl h-full w-full lg:max-w-[20rem] bg-white p-4 border border-gray-200'>
      <strong className='text-gray-700 font-medium'>Productos mas vendidos</strong>
      <div className='divide-solid mt-4 flex flex-col gap-3'>
        {popularProducts.map((product, index) => (
          <div
            key={index}
            className='flex items-start hover:no-underline mb-4 sm:mb-0'
          >
            <div className='w-10 h-10 min-w-[2.5rem] sm:min-w-[4rem] bg-gray-200 rounded-sm'>
              <img
                className='w-full h-full object-cover rounded-sm'
                src={product.image.secure_url}
                alt='product image'
              />
            </div>
            <div className='ml-4 flex-1'>
              <p className='text-sm text-gray-500'>{product.name}</p>
              <span
                className={
                  product.sales === 0
                    ? 'text-red-500 text-xs font-medium'
                    : product.sales > 3000
                    ? 'text-green-500 text-xs font-medium'
                    : 'text-orange-500 text-xs font-medium'
                }
              >
                {product.sales === 0 ? 'Sin Ordenes' : product.sales + ' Ordenes'}
              </span>
            </div>
            <div className='text-xs text-gray-400 pl-1.5'>{''}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;

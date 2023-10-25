'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from './../../redux/slices/productSlice';
import axios from 'axios';
import Product from '../molecules/Product';
import Pagination from '../molecules/Pagination';
import usePagination from '@/hooks/usePagination';
import FilterStore from '../molecules/FilterStore';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Products = () => {
  const allProducts = useSelector(
    (state) => state.product.allProducts
  );
  const dispatch = useDispatch();
  const { currentPageData } = usePagination(6, allProducts);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios(`${apiUrl}/product`);
      dispatch(getAllProducts(data));
    };

    if (!allProducts || !allProducts.length) getProducts();
  }, []);

  return (
    <div className='bg-gray-100 flex'>
      <FilterStore />
      <div className='w-full'>
        <div className='h-32 bg-white my-4 flex flex-col justify-center items-center pb-4 gap-4'>
          <div>
            <input
              className='w-96 gap-2 bg-white border-1 border-blue-500 shadow-lg rounded-lg outline-2 focus:outline-none text-black active:outline-none h-6 p-2'
              type='text'
              placeholder='Buscar...'
            />
            <button className='bg-blue-500 text-white rounded-lg px-2 py-1 ml-2'>
              Buscar
            </button>
          </div>
        </div>
        <div className='shadow-lg rounded-lg p-2 bg-white'>
          {currentPageData?.map((product) => (
            <Product
              key={product.id}
              {...product}
            />
          ))}
          <div className='flex justify-center items-center'>
            <Pagination
              num={6}
              data={allProducts}
            />
          </div>
        </div>
      </div>

      <div className='w-1/3'></div>
    </div>
  );
};

export default Products;

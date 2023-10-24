'use client';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllProducts,
  filterProductsByName
} from '../redux/slices/productSlice';
import Image from 'next/image';
import { HiOutlineSearch } from 'react-icons/hi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import PaginationCustom from '@/components/molecules/Pagination';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Products = () => {
  const allProds = useSelector((state) => state.product.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    const allProducts = async () => {
      const { data } = await axios(`${apiUrl}/product`);
      dispatch(getAllProducts(data));
    };

    if (!allProds || !allProds.length) allProducts();
  }, []);

  const filterByName = (e) => {
    dispatch(filterProductsByName(e.target.value));
  };
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='p-4'>
        <PaginationCustom />
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='relative mx-2'>
            <HiOutlineSearch
              fontSize={20}
              className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3'
            />
            <input
              type='text'
              placeholder='Buscar...'
              onChange={(e) => filterByName(e)}
              className='text-sm focus:outline-none text-black active:outline:none h-10 w-[24rem] border border-gray-300 rounded-sm px-4 pl-11'
            />
          </div>

          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Name</span>
            <span className='sm:text-left text-right'>Email</span>
            <span className='hidden md:grid'>Last Order</span>
            <span className='hidden sm:grid'>Tipo</span>
          </div>
          <ul>
            {allProds.map((product, id) => (
              <li
                key={id}
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
              >
                <div className='flex items-center'>
                  <div className='rounded-lg'>
                    <Image
                      className='filter brightness-110 mix-blend-multiply'
                      width={75}
                      height={75}
                      alt={product?.name}
                      src={product?.image.secure_url}
                    />
                  </div>
                  <p className='pl-4'>{product?.name}</p>
                </div>
                <p className='text-gray-600 sm:text-left text-right'>
                  {product.email}
                </p>
                <p className='hidden md:flex'>{product.date}</p>
                <div className='sm:flex hidden justify-between items-center'>
                  <p>
                    {product.type.charAt(0).toUpperCase() +
                      product.type.slice(1).toLowerCase()}
                  </p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;

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
  const userId = useSelector((state) => state.user.loggedUser.id);
  const dispatch = useDispatch();
  const { currentPageData } = usePagination(6, allProducts);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios(
        `${apiUrl}/product?userId=${userId || 'notLogged'}`
      );
      dispatch(getAllProducts(data));
    };

    if (!allProducts || !allProducts.length) getProducts();
  }, []);

  return (
    <div className='min-h-[80vh] bg-gray-100 flex flex-col md:flex-row pt-8'>
      <FilterStore />
      <div className='w-full '>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-100 gap-4'>
          {currentPageData.length > 0 ? (
            currentPageData?.map((product) => (
              <Product
                key={product.id}
                {...product}
              />
            ))
          ) : (
            <div>No hay productos</div>
          )}
        </section>
        <div className='flex justify-center items-center'>
          {allProducts.length > 6 && (
            <Pagination
              num={6}
              data={allProducts}
            />
          )}
        </div>
      </div>

      <div className='w-1/4'></div>
    </div>
  );
};

export default Products;

'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from './../../redux/slices/productSlice';
import axios from 'axios';
import Product from '../molecules/Product';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Products = () => {
  const allProducts = useSelector(
    (state) => state.product.allProducts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios(`${apiUrl}/product`);

      dispatch(getAllProducts(data));
    };

    if (!allProducts || !allProducts.length) getProducts();
  }, []);

  return (
    <div className='m-5 mt-10 grid gap-4 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5'>
      {allProducts?.map((product) => (
        <Product
          key={product.id}
          {...product}
        />
      ))}
    </div>
  );
};

export default Products;

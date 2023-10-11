'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from './../../redux/slices/productSlice';
import axios from 'axios';
import Product from '../molecules/Product';

const Products = () => {
  const allProducts = useSelector(
    (state) => state.product.allProducts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios(
        'http://localhost:3000/api/product'
      );

      dispatch(getAllProducts(data));
    };

    if (!allProducts || !allProducts.length) getProducts();
  }, []);

  return (
    <div>
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

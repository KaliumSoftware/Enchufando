'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../molecules/Product';

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await axios(
        'http://localhost:3000/api/product'
      );

      setAllProducts(data);
    };

    getAllProducts();
  }, []);

  return (
    <div>
      {allProducts.length &&
        allProducts.map((product) => (
          <Product
            key={product.id}
            {...product}
          />
        ))}
    </div>
  );
};

export default Products;

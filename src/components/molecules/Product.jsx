import React from 'react';

const Product = ({ name, id, image, price }) => {
  return (
    <div class='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <a href='#'>
        <img
          class='p-8 rounded-t-lg'
          src={image.url}
          alt='product image'
        />
      </a>
      <div class='px-5 pb-5'>
        <a href='#'>
          <h5 class='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
            {name}
          </h5>
        </a>
      </div>
    </div>
  );
};

export default Product;

import React, { useState } from 'react';
import { Select, Option, Checkbox } from '@material-tailwind/react';

const Product = ({ name, image, specifications }) => {
  const [product, setProduct] = useState(null);
  const [checkOne, setCheckOne] = useState(false);
  const [checkTwo, setCheckTwo] = useState(false);

  const handleChange = (value) => {
    const selectedProduct = specifications?.find(
      (spec) => spec.size === value
    );

    setProduct(selectedProduct);
  };

  const handleCheck = (event) => {
    const { name } = event.target;

    if (name === 'checkOne') {
      setCheckOne(true);
      setCheckTwo(false);
    } else {
      setCheckOne(false);
      setCheckTwo(true);
    }
  };

  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5 w-full'>
      <a href='#'>
        <img
          className='rounded-t-lg w-full'
          src={image.url}
          alt={`imagen de ${name}`}
        />
      </a>

      <div className='p-5 bg-gray-200 w-full'>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white'>
            {name}
          </h5>
        </a>

        <div className='flex w-full flex-wrap md:flex-nowrap justify-evenly gap-2 items-center content-center'>
          <div>
            <Select
              label='Medidas'
              onChange={handleChange}
            >
              {specifications?.map((spec) => (
                <Option
                  key={spec.code}
                  value={spec.size}
                >
                  {spec.size}
                </Option>
              ))}
            </Select>
          </div>

          <div className='flex flex-wrap mx-5'>
            <div className='flex items-center'>
              <label>
                {product ? `x ${product?.smallPack}` : 'Bolsita'}
              </label>
              <Checkbox
                name='checkOne'
                checked={checkOne}
                onClick={handleCheck}
                disabled={!product}
              />
            </div>

            <div className='flex items-center'>
              <label>
                {product ? `x ${product?.bigPack}` : 'Bolsón'}
              </label>
              <Checkbox
                name='checkTwo'
                checked={checkTwo}
                onClick={handleCheck}
                disabled={!product}
              />
            </div>
          </div>
        </div>

        <a
          href='#'
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Agregar al Carrito
          <svg
            className='w-3.5 h-3.5 ml-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 5h12m0 0L9 1m4 4L9 9'
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Product;

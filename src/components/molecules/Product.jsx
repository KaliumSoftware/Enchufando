import React, { useState } from 'react';
import { Select, Option, Checkbox } from '@material-tailwind/react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import TooltipReusable from '../atoms/TooltipReusable';

const Product = (props) => {
  const [product, setProduct] = useState(null);
  const [checkOne, setCheckOne] = useState(false);
  const [checkTwo, setCheckTwo] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { name, image, specifications, id } = props

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
      setProduct({ ...product, pack: 'small' });
    } else {
      setCheckOne(false);
      setCheckTwo(true);
      setProduct({ ...product, pack: 'big' });
    }
  };

  // add products to cart logic

  const handleAddCart = (product) => {

    if (product) {
      return dispatch(addToCart(product));
    }
    return alert('Selecciona un producto');
  };

  const handleQuantityChange = (event) => {
    const { value } = event.target;
    const numberRegex = /^[1-9]\d*$/;

    if (numberRegex.test(value) || value.length === 0) {
      setQuantity(value);
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

          <TooltipReusable
            text='Seleccione una medida'
            show={!Boolean(product)}
            color='default'
          >
            <div className='flex flex-wrap mx-5'>
              <div className='flex items-center'>
                <label htmlFor={`${id}checkOne`}>
                  {product ? `x ${product?.smallPack}` : 'Bolsita'}
                </label>
                <Checkbox
                  id={`${id}checkOne`}
                  name='checkOne'
                  checked={checkOne}
                  onClick={handleCheck}
                  disabled={!product}
                />
              </div>

              <div className='flex items-center'>
                <label htmlFor='checkTwo'>
                  {product ? `x ${product?.bigPack}` : 'Bolsón'}
                </label>

                <Checkbox
                  id={`${id}checkTwo`}
                  name={`${id}checkTwo`}
                  checked={checkTwo}
                  onClick={handleCheck}
                  disabled={!product}
                />
              </div>
            </div>
          </TooltipReusable>
        </div>

        {/* 'flex w-full flex-wrap md:flex-nowrap justify-evenly gap-2 items-center content-center' */}
        <div className='flex w-full flex-wrap md:flex-nowrap justify-evenly gap-2 items-center content-center'>
          <div className='w-2/6 m-2 my-4'>
            <label
              htmlFor={`${id}quantity`}
              className='relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-black focus-within:ring-1 focus-within:ring-black selection:'
            >
              <input
                type='number'
                id={`${id}quantity`}
                placeholder='Cantidad'
                className='peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
                onChange={handleQuantityChange}
                value={quantity}
              />

              <span className='absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs'>
                Cantidad
              </span>
            </label>
          </div>

          <div className='w-2/6'>
            <p
              className={`text-lg font-bold text-gray-500 dark:text-white ${
                /* user.discount &&  */ 'line-through'
                }`}
            >
              $ {product?.price}
            </p>
            <p className='text-lg font-bold text-gray-900 dark:text-white'>
              $
              {(checkOne || checkTwo) &&
                product /* && user.discount */ &&
                (product?.price /* * user.discount */)
                  .toFixed(2)}

            </p>
          </div>

          <div className='w-2/6'>
            <p className='text-lg font-bold text-gray-900 dark:text-white'>
              Total
            </p>
            <p className='text-lg font-bold text-gray-900 dark:text-white'>
              $
              {(checkOne || checkTwo) &&
                product &&
                quantity &&
                (
                  product?.price *
                  (checkOne
                    ? product?.smallPack
                    : product?.bigPack) /* * user.discount */ *
                  quantity
                ).toFixed(2)}
            </p>
          </div>
        </div>

        <button
          onClick={() => handleAddCart(props)}
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
        </button>
      </div>
    </div>
  );
};

export default Product;

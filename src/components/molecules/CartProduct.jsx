import React, { useState } from 'react'
import { Select, Option, Checkbox } from '@material-tailwind/react';
import TooltipReusable from '../atoms/TooltipReusable';
import ButtonDelete from '../atoms/ButtonDelete';
import ButtonAdd from '../atoms/ButtonAdd';
import { v4 as uuidv4 } from 'uuid';



export default function CartProduct(props) {
    const [product, setProduct] = useState(null);
    const [checkOne, setCheckOne] = useState(false);
    const [checkTwo, setCheckTwo] = useState(false);
    const [quantity, setQuantity] = useState('');
    const { name, image, specifications, id, localId } = props

    const handleChange = (value) => {


        const selectedProduct = specifications?.find(
            (spec) => spec.size === value
        );

        if (selectedProduct) {
            setProduct(selectedProduct);
        }
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

    const handleQuantityChange = (event) => {
        const { value } = event.target;
        const numberRegex = /^[1-9]\d*$/;

        if (numberRegex.test(value) || value.length === 0) {
            setQuantity(value);
        }
    };




    return (
        <div className='md:flex items-center py-8 border-t border-gray-200'>
            <div className='w-1/4'>
                <img
                    src={image?.url}
                    alt={name}
                    className='w-full h-full object-center object-cover'
                />
            </div>
            <div className='md:pl-3 md:w-3/4 w-full'>
                <p className='text-xl pb-6 leading-3 text-gray-800 md:pt-0 pt-4'>
                    {name}
                </p>
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
                <TooltipReusable
                    text='Seleccione una medida'
                    show={!Boolean(product)}
                    color='default'
                >

                    <div className='flex flex-wrap mx-5 pt-6 gap-2 pb-4 '>
                        <div className='flex items-center'>
                            <label htmlFor={`${id}checkOne`}>
                                Bolsita  {product ? `x ${product?.smallPack}` : 'Bolsita'}
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
                                Bolsón {product ? `x ${product?.bigPack}` : 'Bolsón'}
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
                                product.price /* && user.discount */ &&
                                (product?.price /* * user.discount */)
                            }

                        </p>
                    </div>

                    <div className='w-2/6'>
                        <p className='text-lg font-bold text-gray-900 dark:text-white'>
                            Total
                        </p>
                        <p className='text-lg font-bold text-gray-900 dark:text-white'>
                            $
                            {(checkOne || checkTwo) &&
                                product.price &&
                                quantity &&
                                (
                                    product?.price *
                                    (checkOne
                                        ? product?.smallPack
                                        : product?.bigPack) /* * user.discount */ *
                                    quantity
                                )?.toFixed(2)}
                        </p>
                    </div>
                </div>

                <div className='flex items-center justify-between pt-5 pr-6'>
                    <div className='flex itemms-center'>
                        <ButtonAdd
                            props={props} />
                        <ButtonDelete
                            localId={localId} />
                    </div>

                </div>
            </div>
        </div >
    )
}

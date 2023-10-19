import React, { useEffect, useState } from 'react'
import { Select, Option, Checkbox } from '@material-tailwind/react';
import TooltipReusable from '../atoms/TooltipReusable';
import ButtonDelete from '../atoms/ButtonDelete';
import ButtonAdd from '../atoms/ButtonAdd';
import { useDispatch } from 'react-redux';
import { setSpecificationsCart } from '@/redux/slices/cartSlice';




export default function CartProduct(props) {
    const [specificationSelected, setSpecificationSelected] = useState(null);
    const [check, setCheck] = useState('');
    const [quantity, setQuantity] = useState('');
    const { name, image, specifications, id, localId, selectedSpec } = props;
    const dispatch = useDispatch()


    const handleChange = (event) => {
        const selectedProduct = specifications?.find(
            (spec) => spec.size === event.target.value
        );
        if (selectedProduct) {
            setSpecificationSelected(selectedProduct);
            dispatch(setSpecificationsCart({
                selectedSpec: selectedProduct,
                localId
            }))
        }
    };

    const handleCheck = (event) => {

        if (event.target.name === 'one') {
            setCheck('one');
            setSpecificationSelected({ ...specificationSelected, pack: 'small' });
            dispatch(setSpecificationsCart({
                selectedSpec: { ...selectedSpec, pack: 'small' },
                localId
            }))
        } else {
            setCheck('two');
            setSpecificationSelected({ ...specificationSelected, pack: 'big' });
            dispatch(setSpecificationsCart({
                selectedSpec: { ...selectedSpec, pack: 'big' },
                localId
            }))
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
                <select
                    label='Medidas'
                    onChange={handleChange}
                    value={selectedSpec?.size || specificationSelected?.size}
                >
                    {specifications?.map((spec) => (
                        <option
                            key={spec.code}
                            value={spec.size}
                        >
                            {spec.size}
                        </option>
                    ))}
                </select>
                <TooltipReusable
                    text='Seleccione una medida'
                    show={false}
                    color='default'
                >

                    <div className='flex flex-wrap mx-5 pt-6 gap-2 pb-4 '>
                        <div className='flex items-center'>
                            <label htmlFor={`${id}checkOne`}>
                                {specificationSelected ? `x ${specificationSelected?.smallPack}` : 'Bolsita'}
                            </label>
                            <Checkbox
                                id={`${id}checkOne`}
                                name='one'
                                checked={selectedSpec?.pack === 'small'}
                                onChange={handleCheck}
                            />
                        </div>
                        <div className='flex items-center'>
                            <label htmlFor={`${id}checkTwo`}>
                                {specificationSelected ? `x ${specificationSelected?.bigPack}` : 'Bolsón'}
                            </label>

                            <Checkbox
                                id={`${id}checkTwo`}
                                name='two'
                                checked={selectedSpec?.pack === 'big'}
                                onChange={handleCheck}
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
                            $ {specificationSelected?.price}
                        </p>
                        <p className='text-lg font-bold text-gray-900 dark:text-white'>
                            $
                            {(check.one || check.two) &&
                                specificationSelected.price /* && user.discount */ &&
                                (specificationSelected?.price /* * user.discount */)
                            }

                        </p>
                    </div>

                    <div className='w-2/6'>
                        <p className='text-lg font-bold text-gray-900 dark:text-white'>
                            Total
                        </p>
                        <p className='text-lg font-bold text-gray-900 dark:text-white'>
                            $
                            {(check.one || check.two) &&
                                specificationSelected.price &&
                                quantity &&
                                (
                                    specificationSelected?.price *
                                    (check.one
                                        ? specificationSelected?.smallPack
                                        : specificationSelected?.bigPack) /* * user.discount */ *
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

import React from 'react'
import { useDispatch } from 'react-redux';
import { setSpecificationsCart } from '@/redux/slices/cartSlice';


export default function Quantity(props) {

    const dispatch = useDispatch()
    const { id, localId, selectedSpec } = props;

    const handleQuantityChange = (event) => {
        const { value } = event.target;
        const numberRegex = /^[1-9]\d*$/;
        if (numberRegex.test(value) || value.length === 0) {
            dispatch(setSpecificationsCart({
                selectedSpec: { ...selectedSpec, quantity: Number(value) },
                localId
            }))
        }
    };
    return (
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
                        value={selectedSpec?.quantity}
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
                    $ {selectedSpec?.price}
                </p>
                <p className='text-lg font-bold text-gray-900 dark:text-white'>
                    $
                    {(selectedSpec?.pack === 'small' || selectedSpec?.pack === 'big') &&
                        selectedSpec?.price /* && user.discount */ &&
                        (selectedSpec?.price /* * user.discount */)
                    }

                </p>
            </div>

            <div className='w-2/6'>
                <p className='text-lg font-bold text-gray-900 dark:text-white'>
                    Total
                </p>
                <p className='text-lg font-bold text-gray-900 dark:text-white'>
                    $
                    {(selectedSpec?.pack === 'small' || selectedSpec?.pack === 'big') &&
                        selectedSpec?.price &&
                        selectedSpec?.quantity &&
                        (
                            selectedSpec?.price *
                            (selectedSpec?.pack === 'small'
                                ? selectedSpec?.smallPack
                                : selectedSpec?.bigPack) /* * user.discount */ *
                            selectedSpec?.quantity
                        )?.toFixed(2)}
                </p>
            </div>
        </div>
    )
}

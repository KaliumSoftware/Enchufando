import React from 'react'
import { useDispatch } from 'react-redux';
import { setSpecificationsCart } from '@/redux/slices/cartSlice';


export default function Quantity(props) {

    const dispatch = useDispatch()
    const { id, localId, selectedSpec } = props;

    const handleQuantityChange = (event) => {
        const { value } = event.target;
        event.preventDefault();
        const numberRegex = /^[1-9]\d*$/;
        if (numberRegex.test(value) || value.length === 0) {
            dispatch(setSpecificationsCart({
                selectedSpec: { ...selectedSpec, quantity: Number(value) },
                localId
            }))
        }
    };

    const isQuantityEnabled = !!selectedSpec?.pack;
    return (
        <div>
            <div>
                <label
                    htmlFor={`${id}quantity`}
                    className='relative block overflow-hidden rounded-md border border-gray-200 px-9 pt-3 shadow-sm focus-within:border-black focus-within:ring-1 focus-within:ring-black selection:'
                >
                    <input
                        type='number'
                        id={`${id}quantity`}
                        placeholder='Cantidad'
                        className='peer h-8 w-full border-none bg-transparent p-0 text-lg placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
                        onChange={handleQuantityChange}
                        value={selectedSpec?.quantity}
                        min={1}
                        max={25}
                        disabled={!isQuantityEnabled}
                    />

                    <span className='absolute start-3 top-3 -translate-y-1/2 text-sm text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs'>
                        Cantidad
                    </span>
                </label>
            </div>
        </div>
    )
}

import React from 'react'
import { useDispatch } from 'react-redux';
import { setSpecificationsCart } from '@/redux/slices/cartSlice';


export default function Quantity(props) {

    const dispatch = useDispatch()
    const { id, localId, selectedSpec } = props;

    const handleQuantityChange = (change) => {
        if (!selectedSpec.quantity) {
            dispatch(setSpecificationsCart({
                selectedSpec: { ...selectedSpec, quantity: 1 },
                localId
            }))
        } else {
            const newQuantity = selectedSpec?.quantity + change;
            const value = Number(newQuantity);
            if (value >= 1) {
                dispatch(setSpecificationsCart({
                    selectedSpec: { ...selectedSpec, quantity: newQuantity },
                    localId
                }))
            }
        }

    };
    console.log(selectedSpec)
    const isQuantityEnabled = !!selectedSpec?.pack;
    return (
        <div>
            <div className="flex">
                <p className="text-sm text-black mt-3">
                    Cantidad: {selectedSpec?.quantity}
                </p>
                <button
                    className="mt-3 mb-5 ml-2 w-10 rounded-md bg-gray-900 px-0.5 py-.5 font-medium text-white"
                    onClick={() => handleQuantityChange(1)}
                    disabled={!isQuantityEnabled}
                >
                    +
                </button>
                <button
                    className="mt-3 mb-5 ml-2 w-10 rounded-md bg-gray-900 px-0.5 py-.5 font-medium text-white"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={!isQuantityEnabled || selectedSpec?.quantity <= 1}
                >
                    -
                </button>
            </div>
        </div>
    )
}

{/* <div>
                <label
                    htmlFor={`${localId}quantity`}
                    className='relative block overflow-hidden rounded-md border border-gray-200 px-9 pt-3 shadow-sm focus-within:border-black focus-within:ring-1 focus-within:ring-black selection:'
                >
                    <input
                        type='number'
                        id={`${localId}quantity`}
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
            </div> */}
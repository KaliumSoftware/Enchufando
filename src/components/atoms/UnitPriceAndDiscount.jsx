import React from 'react'
import { setLoggedUser } from '@/redux/slices/userSlice';
import { useSelector } from 'react-redux';

export default function UnitPriceAndDiscount(props) {
    const { id, localId, selectedSpec } = props;
    const discount = useSelector((state) => state.user.loggedUser.discount);


    return (
        <div className='flex justify-around'>
            <div>
                <p
                    className={`text-lg font-bold text-gray-500 dark:text-white ${
        /* user.discount &&  */ 'line-through'
                        }`}
                >
                    S/ desc. $ {selectedSpec?.price}
                </p>
                <p className='text-lg font-bold text-gray-900 dark:text-white'>
                    C/ desc. $
                    {(selectedSpec?.pack === 'small' || selectedSpec?.pack === 'big') &&
                        selectedSpec?.price && discount &&
                        (selectedSpec?.price * discount)
                    }

                </p>
            </div>

            <div className='w-2/6'>
                <p className='text-lg font-bold text-gray-900 dark:text-white'>
                    Total Unidad
                </p>
                <p className='text-lg font-bold text-gray-900 dark:text-white'>
                    {(selectedSpec?.pack === 'small' || selectedSpec?.pack === 'big') &&
                        selectedSpec?.price &&
                        selectedSpec?.quantity &&
                        (
                            selectedSpec?.price *
                            (selectedSpec?.pack === 'small'
                                ? selectedSpec?.smallPack
                                : selectedSpec?.bigPack) * discount *
                            selectedSpec?.quantity
                        )?.toLocaleString("es-AR", { style: "currency", currency: "ARS", minimumFractionDigits: 2 })}
                </p>
            </div></div>
    )
}




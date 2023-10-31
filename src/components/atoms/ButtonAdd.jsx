import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice';
import { v4 as uuidv4 } from 'uuid';
export default function ButtonAdd({ props }) {

    const dispatch = useDispatch();
    const handleAddCart = (props) => {
        props = {
            ...props,
            localId: uuidv4()
        }
        if (props) {
            return dispatch(addToCart(props));
        }
    }
    return (
        <button className="flex items-center justify-center text-white bg-black hover:bg-green-700 font-medium rounded-2xl text-sm px-3 py-1.5 cursor-pointer select-none text-center m-1" onClick={() => handleAddCart(props)}>Agregar otro</button>
    )
}

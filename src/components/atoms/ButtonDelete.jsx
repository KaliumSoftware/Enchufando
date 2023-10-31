import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteCart } from '../../redux/slices/cartSlice';
export default function ButtonDelete({ localId }) {
    const dispatch = useDispatch();
    const handleDelete = (localId) => {
        dispatch(deleteCart(localId));
    }
    return (
        <button className="flex items-center justify-center text-white bg-black hover:bg-red-700 font-medium rounded-2xl text-sm mx-12 px-3 py-1.5 cursor-pointer select-none text-center m-1" onClick={() => handleDelete(localId)}>Eliminar</button>
    )
}

import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteCart } from '../../redux/slices/cartSlice';
export default function ButtonDelete({ localId }) {
    const dispatch = useDispatch();
    const handleDelete = (localId) => {
        dispatch(deleteCart(localId));
    }
    return (
        <button onClick={() => handleDelete(localId)}>Eliminar</button>
    )
}

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
        <button onClick={() => handleAddCart(props)}>Agregar otro</button>
    )
}

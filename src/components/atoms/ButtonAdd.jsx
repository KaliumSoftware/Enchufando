import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice';

export default function ButtonAdd({ props }) {

    const dispatch = useDispatch();
    const handleAddCart = (props) => {
        if (props) {
            return dispatch(addToCart(props));
        }
    }
    return (
        <button onClick={() => handleAddCart(props)}>Agregar otro</button>
    )
}

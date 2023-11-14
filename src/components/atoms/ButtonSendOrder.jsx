import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '@/redux/slices/cartSlice';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export default function ButtonSendOrder({ totalFinal, allInCart }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.loggedUser.id);
  const handleSendOrder = async () => {
    if (!isNaN(totalFinal) && allInCart.length > 0) {
      const productsInOrder = allInCart.map((product) => {
        return {
          id: product.id,
          name: product.name,
          image: product.image,
          size: product.selectedSpec.size,
          price: product.selectedSpec.price,
          quantity: product.selectedSpec.quantity,
          pack: product.selectedSpec.pack,
          smallPack: product.selectedSpec.smallPack,
          bigPack: product.selectedSpec.bigPack
        };
      });

      try {
        const { data } = await axios.post(`${apiUrl}/order`, {
          products: productsInOrder,
          totalPrice: totalFinal,
          userId: userId
        });

        if (data.id) {
          dispatch(clearCart());
          alert('Pedido Enviado');
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    } else if (isNaN(totalFinal) && allInCart.length > 0) {
      alert('Seleccione medida, empaque y cantidad para todos los productos del carrito');
    } else if (allInCart.length === 0) {
      alert('No hay productos en el carrito');
    }
  };

  return (
    <button
      onClick={() => handleSendOrder()}
      className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
    >
      Enviar Pedido
    </button>
  );
}

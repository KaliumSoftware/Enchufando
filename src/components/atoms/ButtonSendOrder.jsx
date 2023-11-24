import Swal from 'sweetalert2';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '@/redux/slices/cartSlice';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export default function ButtonSendOrder({ totalFinal, allInCart }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.loggedUser);

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
          userId: user.id,
          userName: user.name
        });

        if (data.id) {
          dispatch(clearCart());
          Swal.fire({
            icon: 'success',
            title: 'Tu pedido ha sido enviado',
            text: 'Gracias por tu compra'
          });
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Problema al enviar el pedido',
          text: error.message
        });
      }
    } else if (isNaN(totalFinal) && allInCart.length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'Problema al armar el pedido',
        text: 'Seleccione medida, empaque y cantidad para todos los productos del carrito'
      });
    } else if (allInCart.length === 0) {
      Swal.fire('No hay productos en el carrito');
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

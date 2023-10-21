import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/redux/slices/cartSlice';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';

const useProduct = (props) => {
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const dispatch = useDispatch();
  const { name, image } = props;

  // add products to cart logic
  const handleAddCart = (product) => {
    if (loggedUser.id) {
      product = {
        ...product,
        localId: uuidv4()
      };

      if (product) {
        return dispatch(addToCart(product));
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Ups...',
        text: 'Para agregar productos al carrito primero debes iniciar sesión'
      });
    }
  };

  return {
    name,
    image,
    handleAddCart
  };
};

export default useProduct;

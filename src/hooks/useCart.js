import { useState } from 'react';

const useCart = () => {
  const [activeCart, setActiveCart] = useState(false);
  return {
    activeCart,
    setActiveCart
  };
};

export default useCart;

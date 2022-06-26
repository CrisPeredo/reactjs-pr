import React, { useEffect, useContext } from "react";
import CartContext from "../../contexts/cartContext";
import {AiOutlineMail} from "react-icons/ai"
import {FiShoppingCart} from "react-icons/fi"

const CartIcon = () => {
  const { cart, qnt, setQnt } = useContext(CartContext);

  useEffect(() => {
    if (cart.length === 0) {
      setQnt(0);
    }
  }, [cart, setQnt]);

  return (
    <AiOutlineMail badgeContent={qnt} color="secondary">
      <FiShoppingCart fontSize="large" />
    </AiOutlineMail>
  );
};

export default CartIcon;

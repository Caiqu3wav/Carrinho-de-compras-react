import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import './CardButton.css';

function CartButton() {
  return (
    <button type="button" className="cart_button">
      <CiShoppingCart />
      <span className='cart_status'>1</span>
    </button>
  );
}

export default CartButton;

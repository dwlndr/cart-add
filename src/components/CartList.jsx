import React from 'react';
import CartItem from './CartItem';

function CartList({ cartItems, onQuantityChange }) {
  return (
    <div className="space-y-4">
      {cartItems.map((item) => (
        <CartItem 
          key={item.id} 
          cart={item} 
          onQuantityChange={(newQuantity) => onQuantityChange(item.id, newQuantity)} 
        />
      ))}
    </div>
  );
}

export default CartList;

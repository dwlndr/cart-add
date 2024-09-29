import React from 'react';
import { useSelector } from 'react-redux';

function Navbar() {
  const totalItems = useSelector(state => state.cart.totalItems);

  console.log("Total items in cart: ", totalItems);  // Log jumlah item di keranjang

  return (
    <header className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <div className="font-bold text-lg">Ard.Shop</div>
      <nav>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>Product</li>
        </ul>
      </nav>
      <button className="bg-white text-blue-500 px-4 py-2 rounded">
        Cart ({totalItems})  {/* Tampilkan jumlah item */}
      </button>
    </header>
  );
}

export default Navbar;

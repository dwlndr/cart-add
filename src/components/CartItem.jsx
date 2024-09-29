import React from 'react';
import Counter from './Counter';

export default function CartItem({ cart, onQuantityChange }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
      {/* Gambar Produk */}
      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={cart.image}
          alt={cart.title} // Memperbarui alt untuk menggunakan title
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Informasi Produk */}
      <div className="flex-1 ml-4">
        <h2 className="text-lg font-semibold text-gray-900">{cart.title}</h2>
        <p className="text-gray-500 mt-2">Price: ${cart.price}</p>
      </div>

      {/* Counter */}
      <div className="flex items-center space-x-4">
        <Counter quantity={cart.quantity} onQuantityChange={onQuantityChange} />
        <p className="text-lg font-bold text-gray-900">
          ${(cart.price * cart.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

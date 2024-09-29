import React, { useState, useEffect } from 'react';

function Counter({ quantity, onQuantityChange }) {
  const [count, setCount] = useState(quantity);

  useEffect(() => {
    setCount(quantity); // Update local state ketika quantity berubah
  }, [quantity]);

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onQuantityChange(newCount);
    }
  };

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onQuantityChange(newCount);
  };

  return (
    <div className="flex items-center">
      <button className="px-2 py-1 bg-gray-300" onClick={decrement}>-</button>
      <span className="px-4">{count}</span>
      <button className="px-2 py-1 bg-gray-300" onClick={increment}>+</button>
    </div>
  );
}

export default Counter;

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CartList from "./components/CartList";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItemQuantity } from "./redux/cartSlice";

function App() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        
        // Tambahkan produk hanya jika belum ada di cart
        data.forEach(product => {
          const existingItem = cartItems.find(item => item.id === product.id);
          if (!existingItem) {
            dispatch(addItem(product));  // Tambahkan produk hanya jika belum ada
          }
        });
      });
  }, [dispatch]);  // Hanya menggunakan dispatch di dependencies

  const handleQuantityChange = (id, newQuantity) => {
    dispatch(updateItemQuantity({ id, quantity: newQuantity }));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <CartList cartItems={cartItems} onQuantityChange={handleQuantityChange} />
      </div>
    </>
  );
}

export default App;

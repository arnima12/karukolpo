// src/components/Cart.js
import React from 'react';
import { useCart } from '../../CartProvider/CartProvider';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <section className="py-10 px-4 bg-white min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm flex justify-between items-center">
              <span>{item.name} - {item.price} BDT</span>
              <button className="text-red-500" onClick={() => removeFromCart(item.name)}>Remove</button>
            </div>
          ))}
          <button className="bg-red-600 text-white rounded-lg py-2 px-4 w-full mt-4" onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </section>
  );
};

export default Cart;

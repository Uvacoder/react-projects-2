import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./Context";

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <section className="cart mx-auto max-w-xl px-5">
        <header>
          <h2 className="text-3xl font-bold">Your Bag</h2>
          <p>is currently empty</p>
        </header>
      </section>
    );
  }

  return (
    <section className="cart mx-auto max-w-xl px-5">
      <header>
        <h2 className="text-3xl font-bold">Your Bag</h2>
      </header>
      <div className="mt-5">
        {cart.map((item) => {
          return <CartItem {...item} key={item.id} />;
        })}
      </div>
      <footer className="mt-5 grid grid-cols-2 justify-between items-center py-2 border-t-2 border-black">
        <h4 className="font-bold">Total</h4>
        <span className="justify-self-end font-bold">${total}</span>
        <button
          className="flex-grow col-span-2 mx-auto px-6 py-2 font-semibold bg-gray-300 text-sm mt-5 mb-16 rounded-lg hover:bg-red-500 hover:text-white transition"
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;

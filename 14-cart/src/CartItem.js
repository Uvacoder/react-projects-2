import React from "react";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import { useGlobalContext } from "./Context";

const CartItem = ({ id, img, title, price, amount }) => {
  const { removeItem, toggleAmount } = useGlobalContext();
  return (
    <article className="cart-item flex justify-between py-4 border-t" key={id}>
      <div className="justify-self-center w-24">
        <img src={img} alt={title} className="w-full" />
      </div>
      <div className="flex-auto">
        <h4 className="font-semibold">{title}</h4>
        <div className="text-gray-600">${price}</div>
        <button
          className="mt-2 text-sm text-red-500"
          onClick={() => removeItem(id)}
        >
          remove
        </button>
      </div>
      <div className="flex-initial self-center inline-flex flex-col justify-center items-center h-24">
        <button
          className="text-2xl text-purple-600 hover:text-purple-900 transition"
          onClick={() => toggleAmount(id, "inc")}
        >
          <HiChevronUp />
        </button>
        <span className="font-semibold text-2xl my-1">{amount}</span>
        <button
          className="text-2xl text-purple-600 hover:text-purple-900 transition"
          onClick={() => toggleAmount(id, "dec")}
        >
          <HiChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;

import React from "react";
import { useGlobalContext } from "./Context";
const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <nav className="max-w-xl mx-auto py-5 mb-10 px-5 bg-white shadow">
      <div className="nav-center flex justify-between items-center">
        <h3 className="text-2xl font-bold w-1/2 text-purple-500">useReducer</h3>
        <div className="nav-container w-1/2 flex justify-end relative">
          <svg
            className="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
          </svg>
          <div className="amount-container absolute -top-1 -right-3">
            <p className="text-xs total-amount rounded-full bg-purple-600 text-center w-6 h-6 pt-1 text-white font-semibold">
              {amount}
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

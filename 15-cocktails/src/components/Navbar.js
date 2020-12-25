import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full px-5 bg-white py-5 shadow bg-opacity-80 mb-10">
      <div className="flex justify-between items-center max-w-2xl mx-auto">
        <Link to="/">
          <h1 className="font-bold text-purple-800">Cocktial.</h1>
        </Link>
        <ul className="flex space-x-5">
          <li>
            <Link to="/" className="hover:text-purple-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-purple-500">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

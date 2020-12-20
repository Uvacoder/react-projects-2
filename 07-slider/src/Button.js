import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const Button = ({ index, setIndex }) => {
  return (
    <>
      <button
        className="absolute top-20 text-2xl left-0 rounded-full p-2 hover:bg-gray-300 focus:outline-none bg-gray-200"
        onClick={() => setIndex(index - 1)}
      >
        <HiChevronLeft />
      </button>
      <button
        className="absolute top-20 text-2xl right-0 bg-gray-200 rounded-full p-2 hover:bg-gray-300 focus:outline-none"
        onClick={() => setIndex(index + 1)}
      >
        <HiChevronRight />
      </button>
    </>
  );
};
export default Button;

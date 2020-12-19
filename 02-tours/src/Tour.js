import React, { useState } from "react";

const Tour = ({ id, name, info, image, price }) => {
  const [readmore, setReadmore] = useState(false);

  return (
    <article className="relative bg-white mb-10 transition duration-400 ease-in-out hover:shadow-lg rounded-xl overflow-hidden">
      <div className="max-h-64 overflow-hidden">
        <img src={image} alt={name} className="" />
      </div>
      <header className="pt-10 px-10 flex justify-between items-center">
        <h3 className="text-2xl font-semibold mr-10">{name}</h3>
        <span className="text-purple-700 bg-purple-100 py-1.5 px-4 rounded-md text-sm">
          ${price}
        </span>
      </header>

      <p className="px-10 py-10 text-gray-600 ">
        {readmore ? info : `${info.substring(0, 100)} ...`}
        <button
          className="focus:outline-none ml-1 text-purple-500"
          onClick={() => setReadmore(!readmore)}
        >
          {readmore ? "show less" : "show more"}
        </button>
      </p>

      <button className="absolute top-5 right-5 text-xs block mx-auto p-2 rounded-lg bg-gray-900 text-gray-100 hover:bg-black transition duration-300">
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </article>
  );
};

export default Tour;

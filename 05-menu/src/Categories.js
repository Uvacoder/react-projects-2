import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="my-10">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => filterItems(category)}
          className="mr-5 uppercase text-xs text-gray-700 py-1 px-3 bg-yellow-200 focus:outline-none focus:bg-yellow-400 focus:border-transparent rounded-md focus:text-black"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;

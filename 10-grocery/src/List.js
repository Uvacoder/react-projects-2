import React from "react";
import { HiPencil, HiXCircle } from "react-icons/hi";

const List = ({ items, clearList, removeItem, editItem }) => {
  console.log(items);
  return (
    <div className="">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article
            key={id}
            className="px-3 flex justify-between items-center hover:bg-gray-200"
          >
            <p className="py-3 cursor-pointer" onClick={() => editItem(id)}>
              {title}
            </p>
            <div className="w-22 flex justify-between items-center gap-x-3">
              <button
                className="text-gray-500 hover:text-gray-900"
                onClick={() => editItem(id)}
              >
                <HiPencil />
              </button>
              <button
                className="text-gray-500 hover:text-gray-900"
                onClick={() => removeItem(id)}
              >
                <HiXCircle />
              </button>
            </div>
          </article>
        );
      })}
      <button
        className="w-full text-sm py-2 rounded-lg bg-red-100 hover:bg-red-500 hover:text-white transition duration-400"
        onClick={clearList}
      >
        clear items
      </button>
    </div>
  );
};

export default List;

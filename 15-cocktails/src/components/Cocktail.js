import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ img, name, info, glass, id }) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden transition duration-500 hover:shadow-md">
      <figure className="overflow-hidden">
        <img src={img} alt={name} className="w-full object-cover" />
      </figure>
      <div className="p-5">
        <h4 className="font-light text-3xl">{name}</h4>
        <span className="block text-purple-500">{glass}</span>
        <span className="block text-gray-400 text-sm mb-3">{info}</span>
        <Link
          to={`/cocktail/${id}`}
          className="text-xs py-1 px-2 text-purple-900 bg-purple-100 rounded-md hover:text-purple-100 hover:bg-purple-900 transition"
        >
          Details{" "}
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;

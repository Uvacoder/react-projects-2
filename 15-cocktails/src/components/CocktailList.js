import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../Context";

const CocktailList = () => {
  const { cocktails, loading, name } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return <h2 className="text-center">No cocktails matached your search.</h2>;
  }

  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold mb-4 text-center">
        {cocktails.length} cocktails found
      </h2>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 xl:grid-cols-4">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default CocktailList;

import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../Context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktails = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-sm mx-auto mb-10">
      <form
        className="w-full rounded-md p-4 shadow bg-white"
        onChange={handleSubmit}
      >
        <label htmlFor="search-form" className="text-sm text-gray-600">
          Search your favorite cocktails
        </label>
        <input
          type="text"
          onChange={searchCocktails}
          ref={searchValue}
          placeholder="enter cocktail name..."
          id="search-form"
          name="search-form"
          className="py-2 px-4 bg-gray-100 rounded-md w-full"
        />
      </form>
    </div>
  );
};

export default SearchForm;

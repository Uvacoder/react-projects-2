import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <section className="w-full mx-auto">
      <SearchForm />

      <div className="">
        <CocktailList />
      </div>
    </section>
  );
};

export default Home;

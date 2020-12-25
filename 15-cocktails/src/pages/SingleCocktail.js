import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const res = await fetch(`${url}${id}`);
        const data = await res.json();

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: img,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          ];
          const newCocktail = {
            name,
            img,
            info,
            category,
            glass,
            instructions,
            ingredients
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2>No cocktail to be displayed.</h2>;
  }
  const {
    name,
    img,
    info,
    category,
    glass,
    instructions,
    ingredients
  } = cocktail;

  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-0">
      <h2 className="text-5xl mb-5">{name}</h2>
      <div className="sm:flex sm:space-x-5 sm:pb-12">
        <figure className="sm:w-1/2 rounded-md overflow-hidden h-full">
          <img src={img} alt={name} />
        </figure>
        <div className="my-5 sm:w-1/2">
          <p className="flex items-center mb-3">
            <span class="text-sm mr-2 py-1 px-2 bg-purple-100 text-purple-900 rounded-md">
              Name:
            </span>
            <span className="text-black font-bold">{name}</span>
          </p>
          <p className="flex items-center mb-3">
            <span class="text-sm mr-2 py-1 px-2 bg-purple-100 text-purple-900 rounded-md">
              Category:
            </span>
            <span className="text-black font-bold">{category}</span>
          </p>
          <p className="flex items-center mb-3">
            <span class="text-sm mr-2 py-1 px-2 bg-purple-100 text-purple-900 rounded-md">
              Info:
            </span>
            <span className="text-black font-bold">{info}</span>
          </p>
          <p className="flex items-center mb-3">
            <span class="text-sm mr-2 py-1 px-2 bg-purple-100 text-purple-900 rounded-md">
              Glass:
            </span>
            <span className="text-black font-bold">{glass}</span>
          </p>
          <p className="flex items-start mb-3">
            <span class="text-sm mr-2 py-1 px-2 bg-purple-100 text-purple-900 rounded-md">
              Instructions:
            </span>
            <span className="">{instructions}</span>
          </p>
          <p className="flex items-start mb-3">
            <span class="text-sm mr-2 py-1 px-2 bg-purple-100 text-purple-900 rounded-md">
              Ingredients:
            </span>
            <div className="break-all leading-7">
              {ingredients.map((item, index) => {
                return item ? (
                  <span
                    className="mr-1 text-xs rounded-md py-1 px-2 bg-gray-200 whitespace-nowrap"
                    key={index}
                  >
                    {item}
                  </span>
                ) : null;
              })}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;

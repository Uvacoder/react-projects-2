import React, { useState } from "react";
import Single from "./Single";
import values from "values.js";

import "./styles/styles.css";

export default function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <main className="w-full pt-10">
      <h2 className="text-3xl font-extrabold text-gray-900 tracking-telcoight mx-auto max-w-md">
        Colour Generator{" "}
        <span role="img" aria-label="img">
          🧑‍🎨
        </span>
      </h2>
      <form onSubmit={handleSubmit} className="mt-5 pb-5 max-w-md mx-auto">
        <input
          id="code"
          name="code"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className={`focus:outline-none w-24 py-1 px-3 rounded-l-md active:bg-white ${
            error ? "bg-red-200" : "bg-white"
          }`}
          placeholder="#hexcode"
        />
        <button
          type="submit"
          className="focus:outline-none py-1 text-white rounded-r-md px-4 bg-gray-700"
        >
          Submit
        </button>
      </form>
      <div className="grid w-full mt-10">
        {list.map((color, index) => {
          return (
            <Single key={index} {...color} index={index} hexColor={color.hex} />
          );
        })}
      </div>
    </main>
  );
}

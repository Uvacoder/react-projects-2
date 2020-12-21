import React, { useState } from "react";
import data from "./Data";

import "./styles/styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let paragraph = parseInt(count);
    if (count <= 0) {
      paragraph = 1;
    }
    if (count > 8) {
      paragraph = 8;
    }
    setText(data.slice(0, paragraph));
  };

  const handleClear = (e) => {
    e.preventDefault();
    setText([]);
  };

  return (
    <main className="max-w-md mx-auto my-10">
      <h2 className="text-3xl font-extrabold text-gray-900 tracking-telcoight">
        Text Generator
      </h2>
      <form className="mt-5">
        <label htmlFor="paragraph" className="text-gray-600 mr-3">
          Paragrahp(s):
        </label>
        <input
          type="number"
          id="paragraph"
          name="paragraph"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          className="py-1 pl-3 pr-1 w-12 mr-3 rounded-md"
        />
        <button
          onClick={handleSubmit}
          className="py-1 px-3 bg-purple-200 rounded-md mr-3 focus:outline-none"
        >
          Generate
        </button>
        <button
          onClick={handleClear}
          className="py-1 px-3 border hover:border-gray-300 focus:outline-none rounded-md"
        >
          Clear
        </button>
      </form>

      <article className="mt-5 pt-5 border-t">
        {text.map((item, index) => {
          return (
            <p key={index} className="mb-5">
              {item}
            </p>
          );
        })}
      </article>
    </main>
  );
}

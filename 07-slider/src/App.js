import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import data from "./Data";

import "./styles/styles.css";

export default function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <main className="max-w-lg mx-auto my-10">
      <h2 className="text-3xl font-extrabold text-gray-900 tracking-telcoight text-center">
        Slider
      </h2>
      <section className="my-5 relative overflow-hidden w-96 mx-auto">
        {data.map((person, personIndex) => {
          const { id, name, quote, image, title } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "previousSlide";
          }
          return (
            <article
              key={id}
              className={`text-center transition ease-in-out duration-700 absolute ${position}`}
            >
              <img
                src={image}
                alt={name}
                className="w-24 h-24 object-cover rounded-full mx-auto"
              />
              <h4 className="text-lg">{name}</h4>
              <p className="mb-5 text-sm">{title}</p>
              <p className="font-serif text-gray-900 italic text-xl px-14">
                {quote}
              </p>
            </article>
          );
        })}
        <button
          className="absolute top-20 text-2xl left-0 rounded-full p-2 hover:bg-gray-300 focus:outline-none bg-gray-200"
          onClick={() => setIndex(index - 1)}
        >
          <HiChevronLeft />
        </button>
        <button
          className="absolute top-20 text-2xl right-0 bg-gray-200 rounded-full p-2 hover:bg-gray-300 focus:outline-none"
          onClick={() => setIndex(index + 1)}
        >
          <HiChevronRight />
        </button>
      </section>
    </main>
  );
}

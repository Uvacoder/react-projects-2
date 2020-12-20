import React, { useEffect, useState } from "react";

import Slide from "./Slide";
import Button from "./Button";

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
        <Slide data={data} index={index} people={people} />
        <Button index={index} setIndex={setIndex} />
      </section>
    </main>
  );
}

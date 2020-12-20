import React, { useState } from "react";
import people from "./Data";
import { HiChevronRight, HiChevronLeft, HiChatAlt } from "react-icons/hi";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  const previousPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="p-5 bg-white mt-5 rounded-xl text-center">
      <div className="w-16 h-16 relative mx-auto">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 object-cover rounded-full"
        />
        <HiChatAlt className="absolute -right-3 top-0 text-2xl text-purple-500" />
      </div>
      <h4 className="font-semibold mt-2">{name}</h4>
      <p className="text-sm mb-5">{job}</p>
      <p className="px-10 mb-10 font-serif italic">{text}</p>

      <div className="grid grid-cols-2 gap-y-5 w-28 mx-auto">
        <button
          onClick={previousPerson}
          className="bg-purple-100 text-2xl p-2 rounded-full w-10 hover:bg-purple-200 transition duration-300"
        >
          <HiChevronLeft />
        </button>
        <button
          onClick={nextPerson}
          className="bg-purple-100 text-2xl p-2 rounded-full w-10 justify-self-end hover:bg-purple-200 transition duration-300"
        >
          <HiChevronRight />
        </button>
        <button
          onClick={randomPerson}
          className="col-span-2 bg-yellow-200 py-2 px-3 text-sm rounded-lg hover:bg-yellow-300 transition duration-300"
        >
          Surprise Me!
        </button>
      </div>
    </article>
  );
};

export default Review;

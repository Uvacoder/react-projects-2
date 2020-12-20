import React from "react";

const Slide = ({ data, index, people }) => {
  return (
    <>
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
    </>
  );
};
export default Slide;

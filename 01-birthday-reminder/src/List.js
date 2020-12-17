import React from "react";

const List = ({ people }) => {
  return (
    <div
      className={`bg-white rounded-xl my-5 ${
        people.length === 0 ? "p-0" : "px-8 pb-8"
      }`}
    >
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="flex gap-3 pt-8">
            <img
              src={image}
              alt={name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="pt-2">
              <h4 className="text-xl font-medium text-gray-900">{name}</h4>
              <p className="text-base text-gray-500">{age}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;

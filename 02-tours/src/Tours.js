import React from "react";
import Tour from "./Tour";

const Tours = ({ tours }) => {
  return (
    <section className="max-w-xl mx-auto">
      <h2 className="text-3xl mb-5">Our Tours</h2>
      <div class="">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;

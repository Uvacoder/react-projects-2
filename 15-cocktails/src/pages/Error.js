import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="font-semibold text-3xl mb-4">Oops! It's a dead end.</h2>
      <Link to="/">Back Home</Link>
    </section>
  );
};

export default Error;

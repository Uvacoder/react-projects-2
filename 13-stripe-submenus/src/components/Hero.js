import React from "react";

import { useGlobalContext } from "../Context";

const Hero = () => {
  const { closeSubmenus } = useGlobalContext();

  return (
    <section
      className="p-5 max-w-4xl mx-auto md:mt-16"
      onMouseOver={closeSubmenus}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 items-center">
        <article className="col-span-2">
          <h1 className="text-4xl font-bold md:text-7xl md:mb-5">
            Payments infrastructure for the internet
          </h1>
          <p className="py-3">
            Millions of businesses of all sizes—from startups to large
            enterprises—use Stripe’s software and APIs to accept payments, send
            payouts, and manage their businesses online.
          </p>
          <button className="py-2 px-5 text-white bg-black rounded-md mt-5">
            Start Now
          </button>
        </article>
        <article className="invisible sm:visible">
          <img
            src="https://raw.githubusercontent.com/john-smilga/react-projects/cad22faf7131bdf7f6532da3e6bd8d07ffe9e890/13-stripe-submenus/final/src/images/phone.svg"
            alt="phone"
          />
        </article>
        <article></article>
      </div>
    </section>
  );
};

export default Hero;

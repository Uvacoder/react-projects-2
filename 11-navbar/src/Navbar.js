import React, { useRef, useState, useEffect } from "react";
import { links, social } from "./Data";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav className="flex justify-between items-center max-w-lg mx-auto py-5 border-b relative">
      <h1 className="text-xl font-bold">K.</h1>
      <button onClick={toggleLinks} className="justify-self-end sm:hidden">
        <FaBars />
      </button>
      <div
        ref={linksContainerRef}
        className="link-container absolute top-16 left-0 w-full bg-white overflow-hidden transition-all duration-400 linear sm:relative sm:bg-transparent sm:top-auto sm:left-auto"
      >
        <ul
          id="main-menu"
          ref={linksRef}
          aria-labelledby="main menu"
          className="sm:flex sm:space-x-3 sm:justify-center"
        >
          {links.map((item) => {
            const { id, url, text } = item;
            return (
              <li key={id} className="px-4 py-2 sm:p-0">
                <a
                  href={url}
                  className="text-gray-700 hover:text-gray-900 transition duration-400 py-2"
                >
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        id="social"
        aria-labelledby="social menu"
        className="space-x-2 hidden sm:flex"
      >
        {social.map((item) => {
          const { id, url, icon } = item;
          return (
            <a
              href={url}
              key={id}
              className="text-gray-500 hover:text-gray-900 transition duration-400"
            >
              {icon}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;

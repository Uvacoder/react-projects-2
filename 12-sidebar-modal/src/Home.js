import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Home = () => {
  const { toggleSidebar, toggleModal } = useGlobalContext();

  return (
    <main className="w-full h-full relative flex items-center">
      <button
        className="absolute right-4 top-4 focus:outline-none"
        onClick={toggleSidebar}
      >
        <FaBars className="text-lg text-gray-700" />
      </button>
      <div className="mx-auto">
        <button
          onClick={toggleModal}
          className="py-2 px-5 rounded-md bg-gray-900 text-gray-100"
        >
          Show Modal
        </button>
      </div>
    </main>
  );
};

export default Home;

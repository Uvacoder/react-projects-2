import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Modal = () => {
  const { toggleModal, modal } = useGlobalContext();
  return (
    <div
      className={`show-modal transition duration-400 ${
        modal ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-lg w-80 h-40">
        <div className="flex justify-between items-center p-4 bg-gray-100">
          <h3>Modal Heading</h3>
          <button onClick={toggleModal}>
            <FaTimes />
          </button>
        </div>
        <p className="p-4">Some content...</p>
      </div>
    </div>
  );
};

export default Modal;

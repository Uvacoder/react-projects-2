import React from "react";

const Refresh = ({ fetchTours }) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-3xl leading-none">No More Tours</h2>
      <button
        onClick={() => {
          fetchTours();
        }}
        className="py-2 px-5 bg-gray-300 text-sm rounded-lg"
      >
        Refresh
      </button>
    </div>
  );
};

export default Refresh;

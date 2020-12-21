import React, { useEffect, useState } from "react";
import rgbToHex from "./utils";

const Single = ({ index, rgb, weight, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`cursor-pointer text-xs font-mono w-full h-36 p-4 ${
        index > 10 ? "text-white" : "text-black"
      }`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={(e) => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p>{weight}%</p>
      <p>{hexValue}</p>
      {alert && <p className="text-center mt-10">copied!</p>}
    </article>
  );
};

export default Single;

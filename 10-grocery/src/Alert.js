import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return (
    <div className={`text-xs mt-2 absolute top-0 left-0 ${type}`}>{msg}</div>
  );
};

export default Alert;

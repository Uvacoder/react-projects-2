import React from "react";
import Navbar from "./Navbar";
import "./styles/styles.css";

export default function App() {
  return (
    <div className="px-4">
      <header className="w-full">
        <Navbar />
      </header>
      <main className="max-w-lg mx-auto my-10">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-telcoight">
          Hey{" "}
          <span role="img" aria-label="img">
            👋
          </span>{" "}
          Welcome!
        </h2>
        <p className="mt-1">
          This is a React playground with TailWindCSS. This is a React
          playground with TailWindCSS.
        </p>
      </main>
    </div>
  );
}

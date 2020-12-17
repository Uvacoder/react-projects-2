import React, { useState } from "react";
import List from "./List";
import Data from "./data";

export default function App() {
  const [people, setPeople] = useState(Data);
  return (
    <main className="bg-gray-200 h-screen flex items-center">
      <section className="container max-w-xs mx-auto rounded-md">
        <h3 className="text-2xl">{people.length} birthday today</h3>
        <List people={people} />
        <button
          onClick={() => setPeople([])}
          className="w-full py-3 rounded-md text-white font-semibold bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

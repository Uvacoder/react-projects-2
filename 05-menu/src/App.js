import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./Data";

import "./styles/styles.css";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

export default function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main className="max-w-4xl mx-auto my-10 px-4">
      <h2 className="text-3xl font-extrabold text-gray-900 tracking-telcoight">
        Menu
      </h2>
      <p className="mt-1">
        This is a React playground with TailWindCSS. This is a React playground
        with TailWindCSS.
      </p>
      <Categories filterItems={filterItems} categories={allCategories} />
      <Menu items={menuItems} />
    </main>
  );
}

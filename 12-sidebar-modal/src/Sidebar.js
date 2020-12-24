import React from "react";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./Data";
import { useGlobalContext } from "./Context";
const Sidebar = () => {
  const { toggleSidebar, sidebar } = useGlobalContext();

  return (
    <aside className={`show-sidebar ${sidebar ? "flex" : "hidden"}`}>
      <div className="p-4 flex justify-between items-center">
        <h3 className="text-2xl">Sidebar</h3>
        <button onClick={toggleSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul
        aria-labelledby="main menu"
        className="p-4 pt-0 self-start flex-grow mt-5"
      >
        {links.map((item) => {
          const { id, url, text, icon } = item;
          return (
            <li key={id} className="py-1">
              <a href={url} className="flex items-center gap-3">
                <span className="text-gray-700">{icon}</span>
                <span className="hover:underline">{text}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul
        aria-labelledby="social links"
        className="border-t p-4 flex items-center gap-3"
      >
        {social.map((item) => {
          const { id, url, icon } = item;
          return (
            <li key={id} className="py-1">
              <a href={url} className="text-gray-400">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;

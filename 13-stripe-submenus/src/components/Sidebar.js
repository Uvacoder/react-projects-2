import React from "react";
import { HiX } from "react-icons/hi";
import sublinks from "../Data";
import { useGlobalContext } from "../Context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      className={`${
        isSidebarOpen ? "visible" : "hidden"
      } fixed w-full h-full bg-gray-900 z-10 top-0 left-0 grid place-items-center bg-opacity-80`}
    >
      <div className="relative bg-white m-4 p-6 pt-20 rounded-3xl w-10/12 h-5/6">
        <button
          onClick={closeSidebar}
          className="absolute top-6 right-5 bg-gray-100 p-2 rounded-full"
        >
          <HiX />
        </button>
        <div>
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index} className="mb-5">
                <h4 className="font-bold mb-2">{page}</h4>
                <div className="grid grid-cols-2">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a
                        href={url}
                        key={index}
                        className="flex items-center gap-3"
                      >
                        <span className="text-blue-800">{icon}</span>
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

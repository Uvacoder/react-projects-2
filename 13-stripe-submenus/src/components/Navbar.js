import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { useGlobalContext } from "../Context";

const Navbar = () => {
  const { openSidebar, openSubmenus, closeSubmenus } = useGlobalContext();
  const displaySubMenus = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom + 12;
    openSubmenus(page, { center, bottom });
  };

  const handleSubMenus = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenus();
    }
  };
  return (
    <nav
      onMouseOver={handleSubMenus}
      className="p-4 flex justify-between items-center max-w-4xl mx-auto"
    >
      <div className="flex justify-between w-full sm:w-auto">
        <h1 className="text-2xl font-bold">S.</h1>
        <button onClick={openSidebar} className="sm:hidden">
          <HiMenuAlt4 />
        </button>
      </div>
      <ul className="hidden sm:flex md:relative">
        <li>
          <button className="link-btn px-5" onMouseOver={displaySubMenus}>
            products
          </button>
        </li>
        <li>
          <button className="link-btn px-5" onMouseOver={displaySubMenus}>
            developers
          </button>
        </li>
        <li>
          <button className="link-btn px-5" onMouseOver={displaySubMenus}>
            company
          </button>
        </li>
      </ul>
      <button className="hidden sm:block py-2 px-5 bg-gray-900 text-white rounded-lg text-sm">
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;

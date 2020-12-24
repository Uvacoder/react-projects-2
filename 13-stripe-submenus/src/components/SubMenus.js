import React, { useEffect, useRef } from "react";

import { useGlobalContext } from "../Context";

const SubMenus = () => {
  const {
    isSubmenusOpen,
    location,
    page: { page, links }
  } = useGlobalContext();

  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [page, location, links]);

  return (
    <aside
      ref={container}
      className={`${
        isSubmenusOpen ? "block" : "hidden"
      } submenu absolute transition transform -translate-x-1/2 p-6 bg-white rounded-md top-16 left-1/2`}
    >
      <h4 className="mb-4 font-semibold">{page}</h4>
      <div className={`grid grid-cols-3 gap-7`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url} className="flex gap-x-2 items-center">
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default SubMenus;

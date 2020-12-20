import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-10 my-5">
      {items.map((menuitem) => {
        const { id, title, img, desc, price } = menuitem;

        return (
          <article key={id} className="mb-5 md:mb-0 flex gap-4">
            <img
              src={img}
              alt={title}
              className="w-28 h-28 object-cover rounded-xl"
            />
            <div>
              <header className="flex justify-between items-center font-semibold">
                <h4>{title}</h4>
                <span className="text-purple-600">{price}</span>
              </header>
              <p className="pt-2 text-sm">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;

import React from "react";
import { NavLink } from "react-router-dom";

const CategorySidebar = ({ categories }) => {
  //   console.log(categories);
  return (
    <div>
      <div className="flex flex-col gap-6 p-4 rounded-2xl border h-96 flex-grow">
        {categories.map((category, index) => (
          <NavLink key={index} to={`/cards/${category.category}`}>
            <button className="btn rounded-full w-full border border-purple-500 text-purple-500">
              {category.category}
            </button>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;

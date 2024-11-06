import React from "react";
import { NavLink } from "react-router-dom";

const CategorySidebar = ({ categories }) => {
  return (
    <div>
      <div className="flex flex-col gap-6 mb-4 p-4 rounded-2xl border flex-grow">
        <NavLink
          className={({ isActive }) =>
            `btn rounded-full w-full border border-purple-500 ${
              isActive ? "bg-purple-500 text-white" : ""
            }`
          }
          to="/"
        >
          All Products
        </NavLink>
        {categories.map((category, index) => (
          <NavLink
            className={({ isActive }) =>
              `btn rounded-full w-full border border-purple-500 ${
                isActive ? "bg-purple-500 text-white" : ""
              }`
            }
            key={index}
            to={`/cards/${category.category}`}
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;

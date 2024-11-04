import React from "react";
import { useLocation } from "react-router-dom";

const DBanner = () => {
  const { pathname } = useLocation();
  return (
    <div className="h-96 w-full bg-purple-600">
      <div className="p-8 space-y-4">
        <h1 className="text-2xl lg:text-4xl font-bold text-white text-center">
          {pathname === "/dashboard" ? "Dashboard" : "Product Details"}
        </h1>
        <p className="text-lg lg:text-xl text-gray-200 text-center">
          {pathname === "/dashboard"
            ? "Browse our collection of premium tech accessories and gadgets"
            : "View detailed specifications and features of this product"}
        </p>
        {pathname === "/dashboard" ? (
          <div className="flex gap-2 justify-center">
            <button className="btn btn-outline rounded-full text-white">
              Cart
            </button>
            <button className="btn btn-outline rounded-full text-white">
              Wishlist
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DBanner;

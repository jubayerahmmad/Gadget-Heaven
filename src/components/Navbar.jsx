import { Link, NavLink, useLocation } from "react-router-dom";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getStoredCart, getStoredWishlist } from "../Utils/utilities";

const Navbar = () => {
  const [cart, setCart] = useState(0);
  const [wishList, setWishList] = useState(0);
  const { pathname } = useLocation();
  useEffect(() => {
    const getCart = getStoredCart();
    const getWishList = getStoredWishlist();
    setCart(getCart.length);
    setWishList(getWishList.length);
  }, []);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar mb-6 relative z-50 my-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="gap-4 px-2 py-1 flex flex-col font-semibold dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-56 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className={`btn btn-ghost text-xl lg:text-4xl font-bold ${
            pathname === "/" ? "text-white" : "text-black"
          }`}
        >
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className={`text-2xl gap-4 px-4 py-2 flex font-semibold ${
            pathname === "/" ? "text-white" : "text-black"
          }`}
        >
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-2 mr-4">
        <div className="indicator">
          <span className="indicator-item badge badge-neutral">{cart}</span>
          <Link
            to="/dashboard"
            className="btn bg-white btn-sm lg:btn-md btn-circle"
          >
            <FaShoppingCart size={20} />
          </Link>
        </div>
        <div className="indicator">
          <span className="indicator-item badge badge-neutral">{wishList}</span>
          <Link
            to="/dashboard/wishlist"
            className="btn btn-circle bg-white btn-sm lg:btn-md"
          >
            <FaRegHeart size={20}></FaRegHeart>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

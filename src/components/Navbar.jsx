import { Link, NavLink } from "react-router-dom";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
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
        <Link to="/" className="btn btn-ghost text-xl lg:text-4xl font-bold">
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="text-2xl gap-4 px-4 py-2 flex font-semibold">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <a className="btn bg-white  btn-sm  btn-circle">
          <FaShoppingCart size={16} />
        </a>
        <a className="btn btn-circle bg-white btn-sm ">
          <FaRegHeart size={16}></FaRegHeart>
        </a>
      </div>
    </div>
  );
};

export default Navbar;

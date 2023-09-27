import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const links = (
    <>
      <li>
        <NavLink className="text-black text-xl  font-bold p-0 m-0" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-black text-xl font-bold  p-0 m-0"
          to="/donation"
        >
          Donation
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-black text-xl font-bold  p-0 m-0"
          to="/statistics"
        >
          Statistics
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar lg:max-w-7xl mx-auto pt-12 z-10  relative">
      <div className="navbar-start">
        <div className="dropdown ">
          <label
            tabIndex={0}
            className="btn bg-[#fff] outline-none border-none  lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] space-y-3 p-2 shadow-lg bg-white rounded-box w-52 "
          >
            {links}
          </ul>
        </div>

        <a className="normal-case  text-xl">
          <img src="/Logo.png"></img>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-12 ">{links}</ul>
      </div>
    </div>
  );
};

export default Header;

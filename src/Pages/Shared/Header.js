import React from "react";
import head from "../../images/SmartMart-RGB.png";
import { Link } from "react-router-dom";

const Header = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/product">Products</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/booking">Booking</Link>
      </li>
    </>
  );
  return (
    <div className="sticky bg-fuchsia-800 top-0 z-40 backdrop-blur-md backdrop-hue-rotate-30 ">
      <div class="navbar mx-auto bg-slate-800 text-white">
        <div class="navbar-start">
          <div className=" m-5">
            <Link to="/" class="normal-case text-xl">
              <img className="w-36" src={head} alt="" />
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menuItems}</ul>
          </div>
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

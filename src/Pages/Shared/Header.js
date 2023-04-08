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
    <div className="sticky top-0 z-40 backdrop-blur-md backdrop-hue-rotate-30 ">
      <div class="navbar mx-auto bg-slate-800 text-white">
        <div class="navbar-start">
          <div className="flex m-5 justify-items-center mb-8">
            <Link to="/" class="normal-case text-xl">
              <img className="w-36" src={head} alt="" />
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menuItems}</ul>
          </div>
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;

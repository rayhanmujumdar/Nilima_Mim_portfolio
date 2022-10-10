import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const html = document.getElementsByTagName("html")[0];
  const storeThemes = localStorage.getItem("themes");
  const [hide, setHide] = useState(
    storeThemes === "dark" || storeThemes === null ? false : true
  );
  const dark = () => {
    localStorage.setItem("themes", "dark");
    setHide(false);
    const themes = localStorage.getItem("themes");
    console.log(themes);
    html.setAttribute("data-theme", themes);
  };
  const light = () => {
    localStorage.setItem("themes", "light");
    setHide(true);
    const themes = localStorage.getItem("themes");
    console.log(themes);
    html.setAttribute("data-theme", themes);
  };
  html.setAttribute("data-theme", storeThemes);
  const navItem = (
    <>
      <li>
        <Link to="/" className="active:bg-gray-500">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="active:bg-gray-500">
          About
        </Link>
      </li>
      <li>
        <Link to="/service" className="active:bg-gray-500">
          Service
        </Link>
      </li>
      <li>
        <Link to="/contact" className="active:bg-gray-500">
          Contact
        </Link>
      </li>
      <li>
        <Link to="/blogs" className="active:bg-gray-500">
          Blogs
        </Link>
      </li>
      <li>
        {hide ? (
          <div onClick={dark} className="swap-on font-bold">
            <MoonIcon className="h-3"></MoonIcon>
            <span>Dark</span>
          </div>
        ) : (
          <div onClick={light} className="swap-off font-bold">
            <SunIcon className="h-3"></SunIcon>
            <span>Light</span>
          </div>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl md:block hidden"
        >
          Nilima <span className="text-secondary text-2xl">MiM</span>
        </Link>
        <Link to="/" className="btn btn-ghost normal-case text-xl md:hidden">
          <span className="text-secondary text-2xl">Mim</span>Akter
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://drive.google.com/file/d/18-yYDuh72bbnRsyKCWNyMD1GzOAJtTV5/view?usp=sharing"
          target="__blank"
          className="btn btn-active"
          download
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Header;

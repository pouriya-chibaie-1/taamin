import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./animation.css";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu((prev) => !prev);
  }

  return (
    <nav className="ml-5 bg-transparent border-gray-200 rounded dark:bg-gray-900">
      <div className="flex flex-wrap items-stretch justify-start">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${showMenu ? "w-max transDown" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="absolute flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-300 md:hidden md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "px-2 mb-4 text-lg rounded w-[60vw] h-10 flex justify-center items-center text-center bg-red-real text-white ml-4 hover:bg-red-600 active:bg-red-900"
                    : "px-2 mb-4 text-lg rounded w-[60vw] h-10 flex justify-center items-center text-center text-black hover:bg-gray-100 active:bg-gray-600"
                }
              >
                {`دسته بندی`}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive
                    ? "px-2 mb-4 text-lg rounded w-[60vw] h-10 flex justify-center items-center text-center bg-red-real text-white ml-4 hover:bg-red-600 active:bg-red-900"
                    : "px-2 mb-4 text-lg rounded w-[60vw] h-10 flex justify-center items-center text-center text-black hover:bg-gray-100 active:bg-gray-600"
                }
              >
                {`محصولات جدید`}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  isActive
                    ? "px-2 mb-4 text-lg rounded w-[60vw] h-10 flex justify-center items-center text-center bg-red-real text-white ml-4 hover:bg-red-600 active:bg-red-900"
                    : "px-2 mb-4 text-lg rounded w-[60vw] h-10 flex justify-center items-center text-center text-black hover:bg-gray-100 active:bg-gray-600"
                }
              >
                {`اخبار`}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favourites"
                className={({ isActive }) =>
                  isActive
                    ? "px-2 mb-4 text-lg rounded w-[60vw] h-10 flex justify-center items-center text-center bg-red-real text-white ml-4 hover:bg-red-600 active:bg-red-900"
                    : "px-2 mb-4 text-lg rounded w-[60vw] h-10 flex justify-center items-center text-center text-black hover:bg-gray-100 active:bg-gray-600"
                }
              >
                {`علاقمندی ها`}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "px-2 mb-4 text-lg rounded w-[60vw] h-10 flex justify-center items-center text-center bg-red-real text-white ml-4 hover:bg-red-600 active:bg-red-900"
                    : "px-2 mb-4 text-lg rounded w-[60vw] h-10 flex justify-center items-center text-center text-black hover:bg-gray-100 active:bg-gray-600"
                }
              >
                {`درباره ما`}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "px-2 mb-4 text-lg rounded w-[60vw] h-10 flex justify-center items-center text-center bg-red-real text-white ml-4 hover:bg-red-600 active:bg-red-900"
                    : "px-2 mb-4 text-lg rounded w-[60vw] h-10 flex justify-center items-center text-center text-black hover:bg-gray-100 active:bg-gray-600"
                }
              >
                {`تماس با ما`}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

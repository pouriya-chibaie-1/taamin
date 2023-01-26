import React from "react";

import { NavLink } from "react-router-dom";

import { FaSearch } from "react-icons/fa";
import Navigation from "../navigation/Navigation";

export default function Header() {
  return (
    <div className="relative z-20 flex flex-row md:flex-col items-center w-full h-min p-4 space-y-4 sticky md:relative top-0 bg-gray-200">
      <div className="flex items-center justify-center space-x-2 w-full h-8">
        <Navigation />
        <a className="" href="#">
          <img
            className="ml-4 h-8 rounded"
            src="https://via.placeholder.com/90x30.png"
            alt="logo picture"
          />
        </a>
        <div className="flex w-2/3 rounded overflow-hidden bg-gray-200">
          <input
            className="w-full h-8 px-4 py-4 bg-gray-300"
            type="text"
            placeholder="جستجوی سریع محصولات..."
          />
          <FaSearch className="bg-red-real text-white h-8 w-8 p-2 cursor-pointer hover:bg-red-600 active:bg-red-900" />
        </div>
      </div>
      <nav className="hidden md:flex justify-between items-center space-x-4 w-full lg:px-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "first:ml-4 px-2 py-1 rounded w-full text-center md:text-base lg:text-lg bg-red-real text-white ml-4 hover:bg-red-600 active:bg-red-900"
              : "first:ml-4 px-2 py-1 rounded w-full text-center md:text-base lg:text-lg border-solid border border-black text-black hover:bg-gray-300 active:bg-gray-600"
          }
        >
          {`دسته بندی`}
        </NavLink>
   
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive
              ? "px-2 py-1 rounded w-full text-center md:text-base lg:text-lg bg-red-real text-white ml-4 hover:bg-red-600 active:bg-red-900"
              : "px-2 py-1 rounded w-full text-center md:text-base lg:text-lg border-solid border border-black text-black hover:bg-gray-300 active:bg-gray-600"
          }
        >
          {`اخبار`}
        </NavLink>
        <NavLink
          to="/favourites"
          className={({ isActive }) =>
            isActive
              ? "px-2 py-1 rounded w-full text-center md:text-base lg:text-lg bg-red-real text-white ml-4 hover:bg-red-600 active:bg-red-900"
              : "px-2 py-1 rounded w-full text-center md:text-base lg:text-lg border-solid border border-black text-black hover:bg-gray-300 active:bg-gray-600"
          }
        >
          {`علاقمندی ها`}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "px-2 py-1 rounded w-full text-center md:text-base lg:text-lg bg-red-real text-white ml-4 hover:bg-red-600 active:bg-red-900"
              : "px-2 py-1 rounded w-full text-center md:text-base lg:text-lg border-solid border border-black text-black hover:bg-gray-300 active:bg-gray-600"
          }
        >
          {`درباره ما`}
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "px-2 py-1 rounded w-full text-center md:text-base lg:text-lg bg-red-real text-white ml-4 hover:bg-red-600 active:bg-red-900"
              : "px-2 py-1 rounded w-full text-center md:text-base lg:text-lg border-solid border border-black text-black hover:bg-gray-300 active:bg-gray-600"
          }
        >
          {`تماس با ما`}
        </NavLink>
      </nav>
    </div>
  );
}

import React from "react";

export default function ArticleCategory() {
  return (
    <div className="w-full md:w-full lg:w-60 p-4 bg-white shadow-lg mt-6 md:my-0 rounded">
      <h2 className="py-2 my-2 font-semibold">{`دسته بندی مقالات`}</h2>
      <div className="w-full h-[1px] bg-gray-100 my-3">
        <div className="w-1/4 h-[1px] bg-blue-900"></div>
      </div>
      <ul className="mt-4">
        <li className="hover:bg-gray-100 cursor-pointer">
          <a href="#">
            {`> `}
            {` مقالات`}
          </a>
        </li>
      </ul>
    </div>
  );
}

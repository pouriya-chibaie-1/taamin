import React from "react";
import { Link } from "react-router-dom";

export default function ArticleMostRead() {
  return (
    <div className="w-full md:w-full lg:w-60 p-4 bg-white shadow-lg mt-6 md:my-0 rounded">
      <h2 className="py-2 my-2 font-semibold">{`پربازدید ترین مطالب`}</h2>
      <div className="w-full h-[1px] bg-gray-100 my-3">
        <div className="w-1/4 h-[1px] bg-blue-900"></div>
      </div>
      <div>
        <div className=" first:mt-4 my-2 hover:bg-gray-100 cursor-pointer">
          <div>
            <Link className="flex items-center" to={`/article`}>
              <img
                className="ml-2 rounded-md"
                src="https://via.placeholder.com/40x40.png"
                alt="placeholder"
              />
              <h3 className="">{`آموزش حرفه ای بهترین روش شستن ماشین`}</h3>
            </Link>
          </div>
        </div>
        <div className="my-2 hover:bg-gray-100 cursor-pointer">
          <div>
            <Link className="flex items-center">
              <img
                className="ml-2 rounded-md"
                src="https://via.placeholder.com/40x40.png"
                alt="placeholder"
              />
              <h3 className="">{`آموزش حرفه ای بهترین روش شستن ماشین`}</h3>
            </Link>
          </div>
        </div>
        <div className="my-2 hover:bg-gray-100 cursor-pointer">
          <div>
            <Link className="flex items-center">
              <img
                className="ml-2 rounded-md"
                src="https://via.placeholder.com/40x40.png"
                alt="placeholder"
              />
              <h3 className="">{`آموزش حرفه ای بهترین روش شستن ماشین`}</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard({ to, name, imageUrl, content }) {
  return (
    <div className="w-full md:w-[240px] lg:w-[250px] h-fit flex flex-col items-center rounded overflow-hidden shadow-lg border">
      <Link className="w-full h-full" to={to}>
        <img
          className="w-full cursor-pointer"
          // src="https://via.placeholder.com/200x140.png"
          src={imageUrl}
          alt="placeholder"
        />
      </Link>
      <div className="p-4">
        <h2 className="py-2 text-cyan-800 md:text-sm lg:text-base xl:text-lg font-semibold hover:bg-gray-100 cursor-pointer">
          <Link to={to}>{name}</Link>
          {/* <Link to={to}>{`علت خاموش شدن ماشین در ۸ حالت مختلف`}</Link> */}
        </h2>
        <p className="">{`${content.split(" ").slice(0, 10).join(" ")} ...`}</p>
        {/* <p className="">{`خودرو به چه دلیلی بعد از استارت خوردن خاموش میشود؟ دلیل خاموش شدن ماشین در حال حرکت چیست؟ در این مقاله از مستریدکی، درباره دلایل خاموش شدن `}</p> */}
      </div>
    </div>
  );
}

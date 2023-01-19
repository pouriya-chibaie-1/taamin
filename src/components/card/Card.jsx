import React from "react";

export default function Card({
  name,
  price,
  imageUrl,
  offerCount,
  offerPrice,
  isStock,
  engineType,
  brand,
  partNumber,
}) {
  return (
    <div className="h-fit w-auto flex flex-col justify-center items-start rounded-t overflow-hidden border-b border-black relative">
      <p
        className={`${
          !isStock ? "flex" : "hidden"
        } absolute top-4 right-4 bg-red-real text-white text-sm w-10 h-6 flex justify-center items-center rounded`}
      >{`ناموجود`}</p>
      <img className="w-full" src={imageUrl} alt={name} />
      <div className="px-5 pb-5 pt-1 w-full flex flex-col justify-center space-y-2 text-center">
        <h3 className="mx-5 font-semibold">{name}</h3>
        <p className="text-xs">
          {`نوع موتور : `}
          {engineType}
        </p>
        <p className="text-xs">
          {`برند کالا : `}
          {brand}
        </p>
        <p className="text-xs">
          {`شماره فنی : `}
          {partNumber}
        </p>
        <div className="my-2 flex justify-evenly">
          <div className="flex flex-col items-center">
            <span className="text-xs">قیمت (ریال)</span>
            <div className="flex justify-center">
              <span
                className={`font-semibold text-sm ${
                  offerCount > 0 ? "line-through text-gray-400" : ""
                }`}
              >
                {price}
              </span>
              <span
                className={`font-semibold text-sm mr-4 block ${
                  offerCount > 0 ? "block" : "hidden"
                }`}
              >
                {offerCount > 0 ? `${offerPrice}` : ``}
              </span>
            </div>
          </div>
        </div>
        <button className="text-lg lg:text-base rounded bg-red-real px-2 py-1 text-white hover:bg-red-700 active:bg-red-900 h-8">
          {`مشاهده محصول`}
        </button>
      </div>
    </div>
  );
}

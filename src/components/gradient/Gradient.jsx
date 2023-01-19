import React from "react";

export default function Gradient({ header, pathString }) {
  return (
    <div className="bg-gradient-to-l from-red-real to-white w-full p-4 px-36 text-white">
      <h2 className="py-10 text-3xl font-bold">{header}</h2>
      <p>{pathString}</p>
    </div>
  );
}

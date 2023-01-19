import React from "react";

export default function AdBanner(props) {
  return (
    <div
      className={`flex justify-center items-center bg-${
        props.bg == "gray" ? "gray-400" : "red-real"
      } w-full h-24 text-white font-bold`}
    >
      محل درج تبلیغات شما
    </div>
  );
}

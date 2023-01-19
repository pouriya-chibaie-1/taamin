import React from "react";

import { ThreeCircles } from "react-loader-spinner";

export default function Spinner({ visible }) {
  return (
    <ThreeCircles
      height="100"
      width="100"
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass="w-screen h-screen flex justify-center items-center"
      visible={visible}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  );
}

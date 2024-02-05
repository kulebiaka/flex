import Image, { StaticImageData } from "next/image";
import React from "react";

export interface PortraitType {
  img?: StaticImageData;
  position?: string;
  fullname?: string;
}

const Portrait = ({ img, fullname, position }: PortraitType) => (
  <div className="w-[222px] text-center xs:w-[132px]" key={fullname}>
    {img ? (
      <>
        <div className="">
          <Image src={img} alt="" />
        </div>
        <p className="mt-[5px] text-[18px] uppercase leading-[20px] xs:text-[12px]">
          {position}
        </p>
        <h4 className="text-[22px] font-bold uppercase xs:text-[12px]">
          {fullname}
        </h4>
      </>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <radialGradient
          id="a10"
          cx=".66"
          fx=".66"
          cy=".3125"
          fy=".3125"
          gradientTransform="scale(1.5)"
        >
          <stop offset="0" stopColor="#777777"></stop>
          <stop offset=".3" stopColor="#777777" stopOpacity=".9"></stop>
          <stop offset=".6" stopColor="#777777" stopOpacity=".6"></stop>
          <stop offset=".8" stopColor="#777777" stopOpacity=".3"></stop>
          <stop offset="1" stopColor="#777777" stopOpacity="0"></stop>
        </radialGradient>
        <circle
          transform-origin="center"
          fill="none"
          stroke="url(#a10)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray="200 1000"
          strokeDashoffset="0"
          cx="100"
          cy="100"
          r="70"
        >
          <animateTransform
            type="rotate"
            attributeName="transform"
            calcMode="spline"
            dur="2"
            values="360;0"
            keyTimes="0;1"
            keySplines="0 0 1 1"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
        <circle
          transform-origin="center"
          fill="none"
          opacity=".2"
          stroke="#777777"
          stroke-width="9"
          stroke-linecap="round"
          cx="100"
          cy="100"
          r="70"
        ></circle>
      </svg>
    )}
  </div>
);

export default Portrait;

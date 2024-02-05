import Image, { StaticImageData } from "next/image";
import React from "react";

const membershipItem = ({
  tittle,
  img,
  benefits,
  price,
}: {
  tittle: string;
  img: any;
  benefits: Array<string>;
  price: number;
}) => {
  return (
    <div className="w-[315px] h-[488px] rounded-[30px] bg-[#f2f2f2] shadow-[3px_3px_6px_black] overflow-hidden relative text-[#0d0d0d] md:my-3 md:h-[272px] md:w-[340px]">
      <div
        className="h-[140px] flex flex-col justify-center overflow-hidden bg-center bg-cover bg-no-repeat md:h-[75px] "
        style={{ backgroundImage: `url(${img.src})` }}
      >
        <h3 className="text-white text-[32px] uppercase font-bold text-center z-10 mx-auto w-full ">
          {tittle}
        </h3>
      </div>
      <div>
        <ul className="h-[210px] list-disc flex flex-col space-y-[5px] mt-[18px] pl-[52px] font-[600] text-[18px] md:text-[12px] md:h-[88px] md:pl-10">
          {benefits?.map((e) => <li className="max-w-[200px] md:max-w-full">{e}</li>)}
        </ul>
      </div>
      <p className="text-[10px] text-center">
        <span className="font-[700] text-[12px]">{price} USD</span> per month
      </p>
      <div className="text-center">
        <button className="uppercase rounded-[37.4px] bg-[#CBFF5B] p-[10px_35px] font-[600] text-[12px] mt-[22px] mb-[27px] md:mb-5 md:mt-4">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default membershipItem;

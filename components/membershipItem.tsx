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
    <div className="relative h-[488px] w-[315px] overflow-hidden rounded-[30px] bg-[#f2f2f2] text-[#0d0d0d] shadow-[3px_3px_6px_black] md:my-3 md:h-[272px] md:w-[340px]">
      <div
        className="flex h-[140px] flex-col justify-center overflow-hidden bg-cover bg-center bg-no-repeat md:h-[75px] "
        style={{ backgroundImage: `url(${img.src})` }}
      >
        <h3 className="z-10 mx-auto w-full text-center text-[32px] font-bold uppercase text-white ">
          {tittle}
        </h3>
      </div>
      <div>
        <ul className="mt-[18px] flex h-[210px] list-disc flex-col space-y-[5px] pl-[52px] text-[18px] font-[600] md:h-[88px] md:pl-10 md:text-[12px]">
          {benefits?.map((b) => (
            <li key={b} className="max-w-[200px] md:max-w-full">{b}</li>
          ))}
        </ul>
      </div>
      <p className="text-center text-[10px]">
        <span className="text-[12px] font-[700]">{price} USD</span> per month
      </p>
      <div className="text-center">
        <button className="mb-[27px] mt-[22px] rounded-[37.4px] bg-[#CBFF5B] p-[10px_35px] text-[12px] font-[600] uppercase md:mb-5 md:mt-4">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default membershipItem;

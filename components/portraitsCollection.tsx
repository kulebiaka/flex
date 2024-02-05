import React from "react";
import Portrait, { PortraitType } from "./portrait";
import { StaticImageData } from "next/image";

const PortraitsCollection = ({
  portraits,
}: {
  portraits: Array<PortraitType>;
}) => {
  return (
    <div className="mx-auto max-w-[960px]">
      <div className="flex flex-wrap gap-[40px_147px] md:justify-between md:gap-0 ">
        {portraits.map((p) => (
          <Portrait
            key={p.fullname}
            position={p.position}
            fullname={p.fullname}
            img={p.img}
          />
        ))}
      </div>
    </div>
  );
};

export default PortraitsCollection;

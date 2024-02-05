import React from "react";

const Program = ({
  img,
  focusAreas,
  sessions,
  title,
}: {
  img: string;
  focusAreas: string;
  sessions: number;
  title: string;
}) => {
  return (
    <div
      className="h-[331px] w-[314px] rounded-[40px] bg-cover bg-center bg-no-repeat p-[40px_30px] text-white shadow-[inset_0px_10px_190px_black] md:my-1 xs:h-[175px] xs:w-[166px] xs:rounded-[30px] xs:p-[21px_17px] xs:shadow-[inset_0px_0px_70px_black]"
      style={{ backgroundImage: img }}
    >
      <h3 className="mb-[4px] h-[74px] text-[38px] font-bold uppercase leading-[0.967] xs:h-[38px] xs:text-[20px]">
        {title}
      </h3>
      <h4 className="text-[26px] font-[700] xs:text-[12px]">FOCUS AREAS:</h4>
      <p className="text-[22px] font-[600] xs:text-[10px]">{focusAreas}</p>
      <h4 className="text-[26px] font-[700] xs:text-[12px]">FREQUENCY:</h4>
      <p className="text-[18px] xs:text-[10px]">
        <span className="text-[22px] font-[600] xs:text-[12px]">
          {sessions} sessions
        </span>{" "}
        per week
      </p>
    </div>
  );
};

export default Program;

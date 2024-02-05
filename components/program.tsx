import React from "react";

const Program = ({
  img,
  focusAreas,
  sessions,
  tittle,
}: {
  img: string;
  focusAreas: string;
  sessions: number;
  tittle: string;
}) => {
  return (
    <div
      className='w-[314px] h-[331px] bg-cover bg-center bg-no-repeat rounded-[40px] text-white p-[40px_30px] shadow-[inset_0px_10px_190px_black] md:my-1 xs:w-[166px] xs:h-[175px] xs:p-[21px_17px] xs:shadow-[inset_0px_0px_70px_black] xs:rounded-[30px]'
      style={{ backgroundImage: img }}
    >
      <h3 className="text-[38px] font-bold uppercase leading-[0.967] h-[74px] mb-[4px] xs:text-[20px] xs:h-[38px]">
        {tittle}
      </h3>
      <h4 className="text-[26px] font-[700] xs:text-[12px]">FOCUS AREAS:</h4>
      <p className="text-[22px] font-[600] xs:text-[10px]">{focusAreas}</p>
      <h4 className="text-[26px] font-[700] xs:text-[12px]">FREQUENCY:</h4>
      <p className="text-[18px] xs:text-[10px]">
        <span className="text-[22px] font-[600] xs:text-[12px]">{sessions} sessions</span> per
        week
      </p>
    </div>
  );
};

export default Program;

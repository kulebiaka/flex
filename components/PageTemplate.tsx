import React from "react";

const PageTemplate = ({ children, title, bgColor, isMobile }: any) => {
  return (
    <main style={{ backgroundColor: bgColor }}>
      <h1 className="pb-[56px] pt-[100px] text-center text-[70px] font-[800] uppercase text-black xs:mx-auto xs:w-[345px] xs:pb-10 xs:pl-1 xs:pt-[110px] xs:text-start xs:text-[46px]">
        {title}
      </h1>
      {children}
    </main>
  );
};

export default PageTemplate;

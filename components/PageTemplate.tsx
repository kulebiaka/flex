import React from "react";

const PageTemplate = ({ children, title, bgColor, isMobile }: any) => {
  return (
    <main style={{ backgroundColor: bgColor }}>
      <h1 className="text-black font-[800] text-[70px] text-center pt-[100px] pb-[56px] uppercase xs:w-[345px] xs:mx-auto xs:text-[46px] xs:pt-[110px] xs:pb-10 xs:text-start xs:pl-1">
        {title}
      </h1>
      {children}
    </main>
  );
};

export default PageTemplate;

import React from "react";

const Burger = ({ onClick, theme }: any) => {
  return (
    <button
      className="h-[13px] flex flex-col items-end justify-between"
      onClick={onClick}
    >
      <BurgerLine theme={theme} width={"17px"} />
      <BurgerLine theme={theme} width={"20px"} />
      <BurgerLine theme={theme} width={"23px"} />
    </button>
  );
};

const BurgerLine = ({ width, theme }: { width: string, theme: string }) => (
  <div
    style={{ width, height: "3px", borderRadius: "5px", background: theme }}
  ></div>
);

export default Burger;

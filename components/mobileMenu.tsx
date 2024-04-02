import Link from "next/link";
import React from "react";

const links = [
  { to: "/", title: "home" },
  { to: "/about", title: "about us" },
  // { to: "/stretching", title: "stretching" },
  // { to: "/fitness", title: "fitness" },
  { to: "/coaches", title: "coaches" },
  { to: "/contacts", title: "contacts" },
];

const MobileMenu = ({
  isOpen,
  closeMenu,
}: {
  isOpen: boolean;
  closeMenu: () => void;
}) => {
  return (
    <div
      className={`fixed z-[100] h-[100%] w-[100%] bg-[#0d0d0d] ${isOpen ? "bloack" : "hidden"}`}
    >
      <div></div>
      <div className="flex h-[100%] flex-col justify-center text-center">
        <ul className="flex h-[100%] flex-col justify-center space-y-4 text-center text-[32px] uppercase text-white">
          {links.map((l) => (
            <li
              key={l.to}
              onClick={closeMenu}>
              <Link href={l.to}>{l.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;

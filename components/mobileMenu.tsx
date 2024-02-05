import Link from "next/link";
import React from "react";

const links = [
  { to: "/", title: "home" },
  { to: "/about", title: "about us" },
  { to: "/stretching", title: "stretching" },
  { to: "/fitness", title: "fitness" },
  { to: "/coaches", title: "coaches" },
  { to: "/contacts", title: "contacts" },
];

const MobileMenu = ({ isOpen, closeMenu }: { isOpen: boolean, closeMenu: () => void }) => {
  return (
    <div
      className={`fixed bg-[#0d0d0d] w-[100%] h-[100%] z-[100] ${isOpen ? "bloack" : "hidden"}`}
    >
      <div></div>
      <div className="text-center flex flex-col justify-center h-[100%]">
        <ul className="text-white text-[32px] space-y-4 uppercase text-center flex flex-col justify-center h-[100%]">
          {links.map((l) => (
            <li onClick={closeMenu}>
              <Link href={l.to}>{l.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;

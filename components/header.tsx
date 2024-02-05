"use client";

import React, { useEffect, useRef, useState } from "react";
import FlexLogo from "@/components/logo61_18";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Burger from "./burger";
import MobileMenu from "./mobileMenu";

const pathsWhiteTheme: Array<string> = ["/", "/about", "/stretching"];

const links = [
  { to: "/about", title: "about us" },
  { to: "/membership", title: "membership" },
  { to: "/programs", title: "programs" },
  { to: "/coaches", title: "coaches" },
  { to: "/contacts", title: "contacts" },
];

const Header = () => {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"white" | "black">("white");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [classList, setClassList] = useState("absolute xs:pt-[56px]");

  const handleScroll = () => {
    if (scrollY > 20) {
      setClassList(`fixed xs:pt-8 bg-${theme === "black" ? "white" : "black"}`);
    } else {
      setClassList("absolute xs:pt-[56px]");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if (pathsWhiteTheme.includes(pathname) || isMobileMenuOpen) {
      setTheme("white");
    } else {
      setTheme("black");
    }
  }, [pathname, isMobileMenuOpen]);

  return (
    <>
      <header
        className={`${classList} z-[101] w-full items-center py-[20px] pl-[30px] pr-[38px] xs:pt-[56px]`}
      >
        <div className="flex items-center md:justify-between">
          <div>
            <Link href="/">
              <FlexLogo color={theme} />
            </Link>
          </div>

          <nav className="w-[calc(100%-130px)] transition-all md:hidden">
            <ul
              className={`mr-[57px] flex justify-end space-x-3 text-${theme} font-semibold`}
            >
              {links.map((l) => (
                <li
                  key={l.to}
                  className={`px-3 py-2 uppercase leading-[100%] ${pathname === l.to ? "active-nav" : ""}`}
                >
                  <Link href={l.to}>{l.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative h-[34px] w-[71.54px] md:hidden">
            <div className="absolute left-0 top-0 h-[34px] w-[34px]">
              <div className="absolute left-0 top-0 h-[34px] w-[34px] rounded-full bg-stone-950" />
              <div className="absolute left-[7.79px] top-[7.08px] h-[19.12px] w-[19.12px] text-sm font-normal uppercase text-white">
                En
              </div>
            </div>
            <div className="absolute left-[37.54px] top-0 h-[34px] w-[34px]">
              <div className="absolute left-0 top-0 h-[34px] w-[34px] rounded-full bg-white" />
              <div className="absolute left-[7.79px] top-[7.08px] h-[19.12px] w-[19.12px] text-sm font-normal uppercase text-stone-950">
                Ru
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <Burger
              theme={theme}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            />
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        closeMenu={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;

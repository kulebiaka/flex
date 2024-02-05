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
  const [scroll, setScroll] = useState(0)
  const [classList, setClassList] = useState('absolute xs:pt-[56px]')
  const ignoreScroll = useRef(false)

  const handleScroll = () => {
    // if (ignoreScroll.current) {
    //   return
    // }
    // setScroll(window.scrollY)
    // ignoreScroll.current = true
    console.log(scrollY)

    if (scrollY > 20) {
      setClassList(`fixed xs:pt-9 bg-${theme === 'black' ? 'white' : 'black'}`)
    } else {
      setClassList('absolute xs:pt-[56px]')
    }

    // setTimeout(() => ignoreScroll.current = false, 100)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        className={`${classList} py-[20px] w-full pl-[30px] pr-[38px] items-center z-[101] xs:pt-[56px]`}>
        <div className="items-center flex md:justify-between">
          <div>
            <Link href="/">
              <FlexLogo color={theme} />
            </Link>
          </div>

          <nav className="w-[calc(100%-130px)] transition-all md:hidden">
            <ul
              className={`flex justify-end space-x-3 mr-[57px] text-${theme} font-semibold`}
            >
              {links.map((l) => (
                <li
                  className={`px-3 py-2 leading-[100%] uppercase ${pathname === l.to ? "active-nav" : ""}`}
                >
                  <Link href={l.to}>{l.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="w-[71.54px] h-[34px] relative md:hidden">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute">
              <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-stone-950 rounded-full" />
              <div className="w-[19.12px] h-[19.12px] left-[7.79px] top-[7.08px] absolute text-white text-sm font-normal uppercase">
                En
              </div>
            </div>
            <div className="w-[34px] h-[34px] left-[37.54px] top-0 absolute">
              <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
              <div className="w-[19.12px] h-[19.12px] left-[7.79px] top-[7.08px] absolute text-stone-950 text-sm font-normal uppercase">
                Ru
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <Burger theme={theme} onClick={() => setIsMobileMenuOpen((prev) => !prev)} />
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        closeMenu={() => setIsMobileMenuOpen(false)} //FIXME: throwing function in props provoke unnecessary rerenders
      />
    </>
  );
};

export default Header;
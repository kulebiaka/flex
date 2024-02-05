"use client";

import React, { useEffect, useState } from "react";
import FlexLogo from "./logo61_18";
import Link from "next/link";
import Image from "next/image";
import twitter from "@/public/icons/twitter.svg";
import instagram from "@/public/icons/instagram.svg";
import telegram from "@/public/icons/telegram.svg";
import { usePathname } from "next/navigation";
import useWindowWidth from "@/hooks/useWindowWidth";

const links = [
  { to: "/about", title: "About us" },
  { to: "/membership", title: "Membership" },
  { to: "/programs", title: "Programs" },
  { to: "/coaches", title: "Coaches" },
  { to: "/", title: "Career" },
];

const Footer = () => {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"black" | "white">("black");

  useEffect(() => {
    if (pathname === "/about" || pathname === "/coaches") {
      setTheme("black");
    } else {
      setTheme("white");
    }
  }, [pathname]);

  return (
    <footer
      className={`${theme === "white" ? "bg-[#0E0E0E] text-white" : "bg-[white] text-[#0d0d0d]"} w-full relative bottom-0 z-50`}
    >
      <div className="mx-auto pt-[60px] pb-[40px] md:mx-10 sm:mx-auto max-w-[1200px] lg:max-w-[960px] sm:w-[75%] 2xs:w-[300px]">
        <div className="mb-[42px] w-[90px]">
          <Link href="/">
            <FlexLogo width={90} height={24.86842} color={theme} />
          </Link>
        </div>

        <div className="flex lg:flex-wrap">
          <div className="min-w-[305px] lg:mb-10 mr-[16%] ">
            <p className="text-base mb-[14px]">
              Stay in know on the discount and <br />
              program releases, news etc.
            </p>
            <input
              placeholder="Enter Email to stay update"
              className={`pl-[19px] py-[5px] bg-inherit text-xs w-[305px] border-[1px] rounded-[10px]`}
            />
          </div>

          <div className="flex justify-between w-full xs:flex-wrap ">
            <div>
              <h3 className="text-base mb-2">Company</h3>
              <ul className="font-light">
                {links.map((l) => (
                  <li key={l.to}>
                    <Link href={l.to}>{l.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base mb-2">Support</h3>
              <ul className="font-light">
                <li>Help Center</li>
                <li>FAQs</li>
                <li>Refunds & Canceling</li>
              </ul>
            </div>

            <div className="mr-[100px] lg:mr-0 xs:w-full xs:mt-10 xs:flex xs:flex-wrap xs:justify-between">
              <div>
                <h3 className="text-base mb-2">Our contacts</h3>
                <div className="font-light">
                  <p>(555) 123-4567</p>
                  <p>321 FlexFit Lane</p>
                  <p>Brooklyn, NY 11201</p>
                  <p>United States</p>
                </div>
              </div>
              <div className="xs:w-[130px]">
                <h3 className="text-base my-2">Follow us</h3>
                <div className="flex space-x-[6px] items-center">
                  <a href="#">
                    <Image src={twitter} alt="twitter" />
                  </a>
                  <a href="#">
                    <Image src={instagram} alt="instagram" />
                  </a>
                  <a href="#">
                    <Image src={telegram} alt="telegram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xs:mt-10 w-[300px]">
          <span>TERMS & CONDITIONS</span>
          <span className="ml-2">PRIVATE POLICY</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

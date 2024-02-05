"use client";

import React, { useEffect, useState } from "react";
import FlexLogo from "./logo61_18";
import Link from "next/link";
import Image from "next/image";
import twitter from "@/public/icons/twitter.svg";
import instagram from "@/public/icons/instagram.svg";
import telegram from "@/public/icons/telegram.svg";
import { usePathname } from "next/navigation";

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
      className={`${theme === "white" ? "bg-[#0E0E0E] text-white" : "bg-[white] text-[#0d0d0d]"} relative bottom-0 z-50 w-full`}
    >
      <div className="mx-auto max-w-[1200px] pb-[40px] pt-[60px] lg:max-w-[960px] md:mx-10 sm:mx-auto sm:w-[75%] 2xs:w-[300px]">
        <div className="mb-[42px] w-[90px]">
          <Link href="/">
            <FlexLogo width={90} height={24.86842} color={theme} />
          </Link>
        </div>

        <div className="flex lg:flex-wrap">
          <div className="mr-[16%] min-w-[305px] lg:mb-10 ">
            <p className="mb-[14px] text-base">
              Stay in know on the discount and <br />
              program releases, news etc.
            </p>
            <input
              placeholder="Enter Email to stay update"
              className={`w-[305px] rounded-[10px] border-[1px] bg-inherit py-[5px] pl-[19px] text-xs`}
            />
          </div>

          <div className="flex w-full justify-between xs:flex-wrap ">
            <div>
              <h3 className="mb-2 text-base">Company</h3>
              <ul className="font-light">
                {links.map((l) => (
                  <li key={l.to}>
                    <Link href={l.to}>{l.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-base">Support</h3>
              <ul className="font-light">
                <li>Help Center</li>
                <li>FAQs</li>
                <li>Refunds & Canceling</li>
              </ul>
            </div>

            <div className="mr-[100px] lg:mr-0 xs:mt-10 xs:flex xs:w-full xs:flex-wrap xs:justify-between">
              <div>
                <h3 className="mb-2 text-base">Our contacts</h3>
                <div className="font-light">
                  <p>(555) 123-4567</p>
                  <p>321 FlexFit Lane</p>
                  <p>Brooklyn, NY 11201</p>
                  <p>United States</p>
                </div>
              </div>
              <div className="xs:w-[130px]">
                <h3 className="my-2 text-base">Follow us</h3>
                <div className="flex items-center space-x-[6px]">
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
        <div className="w-[300px] xs:mt-10">
          <span>TERMS & CONDITIONS</span>
          <span className="ml-2">PRIVATE POLICY</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

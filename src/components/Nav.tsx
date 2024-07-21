// pages/portfolio.tsx
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

import socialX from "../images/socialX.png";
import socialDiscord from "../images/socialDiscord.png";
import socialOpensea from "../images/socialOpensea.png";
import MAcci from "../images/MAdollLogo.png";
import MAdollWhite from "../images/MAdollLogoWhite.png";
import Discord from "../images/MAdoll1.png";

// import MAcci from "./images/MAcci.png";

const Nav: NextPage = () => {
  const [navTitle, setNavTitle] = useState("MAdoll Story");
  const [openNav, setOpenNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const [curTab, setCurTab] = useState(0);

  const links = ["story", "about", "team"];
  const socials = [
    { img: socialX, link: "https://x.com/MAcciNFT" },
    { img: socialDiscord, link: "https://opensea.io/" },
    { img: socialOpensea, link: "https://opensea.io/" },
  ];

  const handleCurTab = (id: number) => {
    setCurTab(id);
  };

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  const handleDirect = (link: string) => {
    // Toggle the navigation state
    setOpenNav(!openNav);

    // Update the URL without reloading the page
    const newHash = `#${link}`;
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search + newHash
    );

    // Only scroll if 'scrolling' is false
    if (!scrolling) {
      setScrolling(true);
      document
        .getElementById(link)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      // Set a timeout to reset 'scrolling' after the scroll is likely to have completed
      setTimeout(() => {
        setScrolling(false);
      }, 500); // Adjust the timeout duration according to your average scroll duration
    }
  };

  return (
    <>
      <div className="relative w-full px-[1.5vh] flex flex-col gap-[2vh] overflow-hidden lg:hidden">
        <div
          className={`${
            openNav
              ? "animate-fadeLeftNav fixed opacity-1"
              : "animate-fadeRightNav fixed opacity-0"
          } right-0 z-10 h-full w-[30%] bg-[#FF0083] transition-all ease-in-out`}
        >
          <div
            className={`flex flex-col justify-between py-[1.5vh] h-full w-full m-auto items-center text-[#fff]`}
          >
            <Image
              onClick={() => handleNav()}
              src={MAcci}
              alt="MAcci"
              className="w-[15%]"
            ></Image>

            <div className="flex justify-end items-end px-[1.5vh] flex-col w-full gap-[2vh] text-[2vh]">
              {links.map((link, id) => (
                <button key={id} onClick={() => handleDirect(link)}>
                  <h1
                    key={id}
                    className="uppercase focus:underline hover:text-[#fff] text-[#000]"
                  >
                    {link}
                  </h1>
                </button>
              ))}
            </div>

            <div className="flex justify-end items-end px-[1.5vh] flex-col w-full gap-[2vh]">
              {socials.map((social, id) => (
                <button key={id}>
                  <Image
                    className="grayscale brightness-0 invert h-[4vh] w-[4vh]"
                    src={social.img}
                    alt={`social ${id}`}
                    key={id}
                  ></Image>
                </button>
              ))}
            </div>
          </div>
        </div>

        <nav className="lg:hidden fixed flex w-full items-center  pr-[3vh] z-10">
          <div className="animate-fadeIn mr-auto font-semibold text-[#FF0083] text-[2.75vh] transition-all ease-in-out">
            {navTitle}
          </div>
          <Image
            onClick={() => handleNav()}
            src={MAcci}
            alt="MAcci"
            className={`absolute mr-[3vh] right-0 ${
              openNav ? "opacity-0 transition-all ease-in-out" : ""
            } w-[15%]`}
          ></Image>
          <Image
            onClick={() => handleNav()}
            src={MAdollWhite}
            alt="MAcci"
            className={`${
              openNav ? "" : "opacity-0 transition-all ease-in-out"
            } w-[15%]`}
          ></Image>
        </nav>
      </div>
    </>
  );
};

export default Nav;

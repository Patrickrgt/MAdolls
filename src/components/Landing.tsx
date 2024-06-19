// pages/portfolio.tsx
import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MAcci from "../images/MAdollLogo.png";
import Story from "./Story";
import About from "./About";
import Team from "./Team";
import socialX from "../images/socialX.png";
import socialDiscord from "../images/socialDiscord.png";
import socialOpensea from "../images/socialOpensea.png";

const Portfolio: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animation, setAnimation] = useState(true);
  const [curTab, setCurTab] = useState(0);

  const links = ["story", "about", "team"];
  const socials = [socialX, socialDiscord, socialOpensea];

  const handleCurTab = (id: number) => {
    setCurTab(id);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Head>
        <title>MAdoll by MAcci</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <div className="flex w-[90%] h-[80%] m-auto gap-[16vh]">
        <div className="flex flex-1 flex-col">
          <div className="w-[100%] m-auto h-full flex flex-col justify-between">
            <div className="flex flex-col">
              <Image
                src={MAcci}
                alt="MAcci"
                className=""
              ></Image>
              <div className="m-auto font-semibold text-[#FF0083] text-[2vh]">
              </div>
            </div>

            <div className="h-[40%] flex flex-col items-center justify-between">
              {links.map((link, id) => (
                <button onClick={() => handleCurTab(id)}>
                  <p
                    className={`${
                      curTab == id ? "underline" : ""
                    } text-[3vh] uppercase font-semibold text-[#FF0083] transition-all ease-in-out`}
                  >
                    {link}
                  </p>
                </button>
              ))}
            </div>

            <footer className="flex w-full justify-between">
              {socials.map((social, id) => (
                <Image src={social} alt={`social ${id}`} key={id}></Image>
              ))}
            </footer>
          </div>
        </div>

        {curTab == 0 ? <Story /> : curTab == 1 ? <About /> : <Team />}
      </div>
    </div>
  );
};

export default Portfolio;

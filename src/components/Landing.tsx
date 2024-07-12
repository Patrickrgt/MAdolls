// pages/portfolio.tsx
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import MAcci from "../images/MAdollLogo.png";
import Discord from "../images/MAdoll1.png";

import Story from "./Story";
import StoryMobile from "./StoryMobile";
import About from "./About";
import AboutMobile from "./AboutMobile";
import TeamMobile from "./TeamMobile";
import Team from "./Team";
import socialX from "../images/socialX.png";
import socialDiscord from "../images/socialDiscord.png";
import socialOpensea from "../images/socialOpensea.png";

const Portfolio: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [navTitle, setNavTitle] = useState("MAdoll Story");
  const [openNav, setOpenNav] = useState(false);
  const [animation, setAnimation] = useState(true);
  const [curTab, setCurTab] = useState(0);
  const storyRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   setAnimation(false)
  //   setTimeout(() => {
  //     setAnimation(true)
  //   }, 100)
  // }, [openNav])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            switch (entry.target.id) {
              case "story":
                setNavTitle("MAdoll Story");
                break;
              case "about":
                setNavTitle("MAdoll About");
                break;
              case "team":
                setNavTitle("MAdoll Team");
                break;
              default:
                break;
            }
          }
        });
      },
      { threshold: 0.30 } // Adjust the threshold to when you want the title to change
    );

    if (storyRef.current) {
      observer.observe(storyRef.current);
    }
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    if (teamRef.current) {
      observer.observe(teamRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

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

  return (
    <div className="w-screen flex lg:flex-col justify-center items-center lg:h-screen">
      <Head>
        <title>{`MAdoll ${navTitle} by MAcci`}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <div className="relative w-full px-[1.5vh] flex flex-col gap-[2vh] overflow-hidden lg:hidden">
        <div
          className={`${
            openNav ? "animate-fadeLeft fixed" : "animate-fadeOut fixed"
          } right-0 z-10 h-full w-[30%] bg-[#FF0083]`}
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
                <button
                  key={id}
                  onClick={() => (window.location.hash = `#${link}`)}
                >
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
            className={`${
              openNav
                ? "grayscale brightness-0 invert animate-fadeIn"
                : "animate-fadeIn"
            } w-[15%]`}
          ></Image>
        </nav>

        {/* <nav className="lg:hidden flex w-full items-center">
          <div className="mr-auto font-semibold text-[#FF0083] text-[2.75vh]">
            MAdoll Story
          </div>
          <Image src={MAcci} alt="MAcci" className={`${openNav ? "grayscale brightness-0 invert" : ""} w-[15%]`}></Image>
        </nav> */}

        <span ref={storyRef} id="story" className="lg:hidden pt-[6vh]">
          <div>
            <StoryMobile></StoryMobile>
          </div>
        </span>

        <span ref={aboutRef} id="about" className="lg:hidden pt-[6vh]">
          <div>
            <AboutMobile></AboutMobile>
          </div>
        </span>

        <span ref={teamRef} id="team" className="lg:hidden pt-[6vh]">
          <div>
            <TeamMobile></TeamMobile>
          </div>
        </span>
      </div>

      <div className="hidden lg:flex w-[90%] h-[80%] m-auto gap-[16vh]">
        <div className="flex flex-1 flex-col">
          <div className="w-[100%] m-auto h-full flex flex-col justify-between">
            <div className="flex flex-col">
              <Image src={MAcci} alt="MAcci" className=""></Image>
              <div className="m-auto font-semibold text-[#FF0083] text-[2vh]"></div>
            </div>

            <div className="h-[40%] flex flex-col items-center justify-between">
              {links.map((link, id) => (
                <button key={id} onClick={() => handleCurTab(id)}>
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
                <a key={id} href={social.link}>
                  <Image src={social.img} alt={`social ${id}`} key={id}></Image>
                </a>
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

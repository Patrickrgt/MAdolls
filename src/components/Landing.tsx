// pages/portfolio.tsx
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Audio from "./Audio";
import Cursor from "./Cursor";
import Nav from "./Nav";

// Mobile SSR
const StoryMobile = dynamic(() => import("./StoryMobile"));
const AboutMobile = dynamic(() => import("./AboutMobile"));
const TeamMobile = dynamic(() => import("./TeamMobile"));
const SpecialMobile = dynamic(() => import("./SpecialMobile"));
// import StoryMobile from "./StoryMobile";
// import AboutMobile from "./AboutMobile";
// import TeamMobile from "./TeamMobile";
// import SpecialMobile from "./SpecialMobile";

// Desktop SSR
// const Story = dynamic(() => import('./Story'))
// const About = dynamic(() => import('./About'))
// const Team = dynamic(() => import('./Team'))
import Story from "./Story";
import About from "./About";
import Team from "./Team";

import socialX from "../images/socialX.png";
import socialDiscord from "../images/socialDiscord.png";
import socialOpensea from "../images/socialOpensea.png";
import MAcci from "../images/MAdollLogo.png";
import MAdollWhite from "../images/MAdollLogoWhite.png";
import Discord from "../images/MAdoll1.png";

// import MAcci from "./images/MAcci.png";

const Portfolio: NextPage = () => {
  const [navTitle, setNavTitle] = useState("MAdoll Story");
  const [openNav, setOpenNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  const [curTab, setCurTab] = useState(0);
  const storyRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const specialRef = useRef<HTMLDivElement>(null);

  const links = ["story", "about", "team"];
  const socials = [
    { img: socialX, link: "https://x.com/MAcciNFT" },
    { img: socialDiscord, link: "https://opensea.io/" },
    { img: socialOpensea, link: "https://opensea.io/" },
  ];



  useEffect(() => {
    // Check if the window width indicates a mobile device
    const isMobile = window.innerWidth <= 320; // Adjust 768px according to your design's mobile breakpoint

    if (isMobile) {
      // Scroll to the top of the page
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Call handleResize initially in case the initial state is not updated
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const { width, height } = dimensions;
    console.log(`Width: ${width}, Height: ${height}`);

    if (width <= 768 && height <= 1024) {
      // Logic for small devices
      console.log('Small device view');
    } else {
      // Logic for larger devices
      console.log('Larger device view');
    }
  }, [dimensions]); // This effect runs when dimensions state updates


  useEffect(() => {
    if (!scrolling) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Ensure title changes only if not currently programmatically scrolling
              entry.target.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
              switch (entry.target.id) {
                case "story":
                  setNavTitle("MAdoll Story");
                  break;
                case "about":
                  setNavTitle("MAdoll About");
                  break;
                case "special":
                  setNavTitle("MAdoll Special");
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
        { threshold: 0.5 }
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
      if (specialRef.current) {
        observer.observe(specialRef.current);
      }

      return () => {
        observer.disconnect();
      };
    }
  }, [scrolling]); // Re-instantiate observer if 'scrolling' changes

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

  if ((dimensions.height >= 803 && dimensions.height <= 1279) && (dimensions.width >= 803 && dimensions.width <= 1279)) {
    return (
      <div>This webpage is not optimized on the current format. Please switch to desktop or mobile phone for best viewing.</div>
    );
  }
  
  return (
    <div className="w-screen flex md:flex-col justify-center items-center md:h-screen">
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

      

      <div className="relative w-full px-[1.5vh] flex flex-col gap-[2vh] overflow-hidden md:hidden">
        {/* Navigation */}
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

        <nav className="md:hidden fixed flex w-full items-center  pr-[3vh] z-10">
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

        {/* Mobile Components */}
        <span ref={storyRef} id="story" className="md:hidden pt-[6vh]">
          <div>
            <StoryMobile></StoryMobile>
          </div>
        </span>

        <span ref={aboutRef} id="about" className="md:hidden pt-[6vh]">
          <div>
            <AboutMobile></AboutMobile>
          </div>
        </span>

        <span ref={specialRef} id="special" className="md:hidden pt-[6vh]">
          <div>
            <SpecialMobile></SpecialMobile>
          </div>
        </span>

        <span ref={teamRef} id="team" className="md:hidden pt-[6vh]">
          <div>
            <TeamMobile></TeamMobile>
          </div>
        </span>
      </div>

      <div className="hidden md:flex w-[90%] m-auto gap-[16vh]">
        
        <div className="flex flex-1 flex-col h-[80vh]">
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
      {/* Custom Audio */}
      <Audio></Audio>
      {/* Custom Cursor */}
      <Cursor></Cursor>
    </div>
  );
};

export default Portfolio;

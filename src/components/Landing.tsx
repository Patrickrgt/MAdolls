// pages/portfolio.tsx
import type { NextPage } from "next";
import Head from "next/head";
import { Suspense, useEffect, useState, useRef } from "react";
import Image from "next/image";
import MAcci from "../images/MAdollLogo.png";
import MAdollWhite from "../images/MAdollLogoWhite.png";
import macciCursor from "../images/macciCursor.png";
import Discord from "../images/MAdoll1.png";

import Story from "./Story";
import StoryMobile from "./StoryMobile";
import About from "./About";
import AboutMobile from "./AboutMobile";
import TeamMobile from "./TeamMobile";
import Team from "./Team";
import SpecialMobile from "./SpecialMobile";
import socialX from "../images/socialX.png";
import socialDiscord from "../images/socialDiscord.png";
import socialOpensea from "../images/socialOpensea.png";
import pauseButton from "../images/pauseButton.png";
import playButton from "../images/playButton.png";

// import MAcci from "./images/MAcci.png";

const Portfolio: NextPage = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const [isLoading, setIsLoading] = useState(true);
  const [navTitle, setNavTitle] = useState("MAdoll Story");
  const [openNav, setOpenNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [windowWidth, setWindowWidth] = useState<number|null>(null);

  const [animation, setAnimation] = useState(true);

  const [music, setMusic] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const [curTab, setCurTab] = useState(0);
  const storyRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const specialRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const musicTracks = [
    {
      id: 1,
      src: "/CrispSummerBreeze.mp3",
      title: "Crisp Summer Breeze by Jexto",
    },
    // Add more tracks as needed
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Set the initial window dimensions
      setWindowWidth(window.innerWidth);
      // Then, continue handling resize events
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    // Simulating a loading process, replace this with your actual loading logic
    const timer = setTimeout(() => {
      setIsSplashVisible(false); // Hide splash after resources are loaded
    }, 3000); // Adjust time based on your load time
  
    return () => clearTimeout(timer);
  }, []);

  // Effect to toggle music play/pause
  useEffect(() => {
    if (music && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [music, currentTrackIndex]);

  // Add event listener to track cursor movement
  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPosition);
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  const handleMusic = () => {
    setMusic(!music);
  };

  // Optionally, handle track change
  const handleNextTrack = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex + 1 < musicTracks.length ? prevIndex + 1 : 0
    );
  };

  // Update cursor position
  const updateCursorPosition = (event: MouseEvent) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    // Check if the window width indicates a mobile device
    const isMobile = window.innerWidth <= 320; // Adjust 768px according to your design's mobile breakpoint

    if (isMobile) {
      // Scroll to the top of the page
      window.scrollTo(0, 0);
    }
  }, []);

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
    <Suspense>
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

      {/* Audio element */}
      {musicTracks.length > 0 && (
        <audio ref={audioRef} src={musicTracks[currentTrackIndex].src} loop>
          Your browser does not support the audio element.
        </audio>
      )}

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

        <span ref={specialRef} id="special" className="lg:hidden pt-[6vh]">
          <div>
            <SpecialMobile></SpecialMobile>
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
      {/* Custom Cursor */}

      <div className="hidden lg:block fixed lg:absolute bottom-0 right-0 overflow-hidden">
        <div className="flex m-[2vh] justify-center items-center gap-[2vh]">
          <h1
            className={`${
              music ? "lg:opacity-1" : "lg:opacity-0"
            }  italic transition-all duration-500 ease-in-out text-[2vh] font-light border-l-[0.75vh] border-l-[#FF1999] pl-[1vh]`}
          >
            {musicTracks[currentTrackIndex].title}
          </h1>

          <div className="flex bg-[#FF1999] rounded-full p-[1vh]">
            <div className="bg-[#D9D9D9] rounded-full p-[1vh]">
              <Image
                className={`${
                  music ? "animate-spin" : "animate-spinOff"
                } transition-all ease-in-out h-[3vh] w-[3vh]`}
                alt="MAdoll Logo"
                src={MAcci}
              ></Image>
            </div>
            <div className="p-[1vh]">
              {music ? (
                <Image
                  className="h-[3vh] w-[3vh]"
                  alt="playButton"
                  src={pauseButton}
                  onClick={() => handleMusic()}
                ></Image>
              ) : (
                <Image
                  className="h-[3vh] w-[3vh]"
                  alt="pauseButton"
                  src={playButton}
                  onClick={() => handleMusic()}
                ></Image>
              )}
            </div>
          </div>
        </div>
      </div>
      <Image
        src={macciCursor}
        alt="custom cursor"
        className="hidden lg:block absolute"
        style={{
          top: cursorPosition.y - 16,
          left: cursorPosition.x - 16,
          pointerEvents: "none",
        }}
        width={48}
        height={48}
      />
    </div>
    </Suspense>
  );
};

export default Portfolio;

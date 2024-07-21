// pages/portfolio.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper CSS
import { Navigation, Pagination, Scrollbar } from "swiper/modules"; // Import required Swiper components
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import sp01 from "../images/mobileSpecial/special-mobile-1.png";
import sp02 from "../images/mobileSpecial/special-mobile-2.png";
import sp03 from "../images/mobileSpecial/special-mobile-3.png";
import sp04 from "../images/mobileSpecial/special-mobile-4.png";
import sp05 from "../images/mobileSpecial/special-mobile-5.png";
import sp06 from "../images/mobileSpecial/special-mobile-6.png";
import sp07 from "../images/mobileSpecial/special-mobile-7.png";
import sp08 from "../images/mobileSpecial/special-mobile-8.png";

import arrowLeft from "../images/mobileSpecial/arrowLeft.png";
import arrowRight from "../images/mobileSpecial/arrowRight.png";

const SpecialMobile: NextPage = () => {
  const specialBackground = [sp01, sp02, sp03, sp04, sp05, sp06, sp07, sp08];
  const [animationClass, setAnimationClass] = useState("");
  const [prevAnimationClass, setPrevAnimationClass] = useState("");
  const [curSpecial, setCurSpecial] = useState(0);
  const [prevSpecial, setPrevSpecial] = useState<number | null>(null);
  const [touchPosition, setTouchPosition] = useState(null);

  const handleCurSpecial = (action: string) => {
    if (action === "+1" && curSpecial < specialBackground.length - 1) {
      setPrevSpecial(curSpecial);
      setCurSpecial((prev) =>
        prev < specialBackground.length - 1 ? prev + 1 : prev
      );
      setAnimationClass("animate-fadeLeftMob");
      setPrevAnimationClass("animate-fadeDownRightMob");
    } else if (action === "-1" && curSpecial > 0) {
      // Swipe right
      setPrevSpecial(curSpecial);
      setCurSpecial((prev) => (prev > 0 ? prev - 1 : prev));
      setAnimationClass("animate-fadeRightMob");
      setPrevAnimationClass("animate-fadeDownLeftMob");
    }
  };

  const handleLoad = () => {
    console.log("Image loaded:");
  };

  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: any) => {
    if (touchPosition === null) {
      return;
    }
    const currentTouch = e.touches[0].clientX;
    const diff = touchPosition - currentTouch;
    if (diff > 5) {
      // Swipe left
      setPrevSpecial(curSpecial);
      setCurSpecial((prev) =>
        prev < specialBackground.length - 1 ? prev + 1 : prev
      );
      setAnimationClass("animate-fadeLeftMob");
      setPrevAnimationClass("animate-fadeDownRightMob");
    } else if (diff < -5) {
      // Swipe right
      setPrevSpecial(curSpecial);
      setCurSpecial((prev) => (prev > 0 ? prev - 1 : prev));
      setAnimationClass("animate-fadeRightMob");
      setPrevAnimationClass("animate-fadeDownLeftMob");
    }
    setTouchPosition(null); // Reset touch position after handling the swipe
  };

  useEffect(() => {
    // Ensure this code block runs only in the browser
    if (typeof window !== "undefined") {
      const texts = document.querySelectorAll(".MAdoll");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle(
              "animate-fadeRightObserver",
              entry.isIntersecting
            );
            if (entry.isIntersecting) observer.unobserve(entry.target);
          });
        },
        {
          threshold: 1,
        }
      );

      texts.forEach((text) => observer.observe(text));

      // Clean up the observer when the component unmounts
      return () => texts.forEach((text) => observer.unobserve(text));
    }
  }, []);

  useEffect(() => {
    // Ensure this code block runs only in the browser
    if (typeof window !== "undefined") {
      const texts = document.querySelectorAll(".MAdoll-big");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle(
              "animate-fadeRightObserver",
              entry.isIntersecting
            );
            if (entry.isIntersecting) observer.unobserve(entry.target);
          });
        },
        {
          threshold: 0.3,
        }
      );

      texts.forEach((text) => observer.observe(text));

      // Clean up the observer when the component unmounts
      return () => texts.forEach((text) => observer.unobserve(text));
    }
  }, []);

  return (
    <>
      <div className="relative pt-[1.6vh]">
        <div
          className="swiper-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className="flex relative">
            <Image
              alt="test"
              src={sp01}
              width={700}
              height={700}
              className={`invisible`}
            />
            {specialBackground.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`special background ${index + 1}`}
                width={700}
                height={700}
                className={`absolute z-[1] ${
                  index === curSpecial ? animationClass : "hidden"
                }`}
              />
            ))}
            {specialBackground.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`special background ${index + 1}`}
                width={700}
                height={700}
                onLoad={() => handleLoad()}
                className={`z-[0] absolute ${
                  index === prevSpecial ? prevAnimationClass : "hidden"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex w-full justify-between text-[2.75vh] leading-loose absolute bottom-[0]">
          <button className="w-[5%]" onClick={() => handleCurSpecial("-1")}>
            <Image alt="arrow left" src={arrowLeft}></Image>
          </button>
          {/* Display current page number */}
          <button className="w-[5%]" onClick={() => handleCurSpecial("+1")}>
            <Image alt="arrow right" src={arrowRight}></Image>
          </button>
        </div>
        <div className="w-full flex justify-center">
          <span className="text-[#898989] underline">{`${curSpecial + 1}/${
            specialBackground.length
          }`}</span>{" "}
        </div>
      </div>
      <div className="flex flex-col justify-between relative items-center overflow-hidden m-auto w-[94%]">
        <div className="flex flex-col">
          <div className="py-[1vh]">
            <h1 className="MAdoll opacity-0 overflow-hidden font-semibold text-[1.95vh]">
              Some of Madoll’s backgrounds are special too!
            </h1>
            <p className="MAdoll opacity-0 text-[1.5vh] hover:text-[#FF0083] transition-all ease-in-out">
              These images represent memories from MAcci’s experiences and are
              incorporated in a small percentage of MAdolls in the collection.
            </p>
            <p className="MAdoll opacity-0 text-[1.5vh] hover:text-[#FF0083] transition-all ease-in-out">
              マドールの背景にも特別なものがある！
            </p>
            <p className="MAdoll opacity-0 text-[1.5vh] hover:text-[#FF0083] transition-all ease-in-out">
              これらのイメージはMAcciの経験からの思い出を表しており、コレクションの中のごく一部のMAdollに取り入れられています。{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialMobile;

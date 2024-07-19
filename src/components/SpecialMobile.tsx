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
  const [curSpecial, setCurSpecial] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const handleCurSpecial = (action: string) => {
    if (action === "+1" && curSpecial < specialBackground.length - 1) {
      setCurSpecial((prevState) => prevState + 1); // Use functional form of setState
    } else if (action === "-1" && curSpecial > 0) {
      // Ensure curSpecial does not go below 1
      setCurSpecial((prevState) => prevState - 1); // Use functional form of setState
    }
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
      setCurSpecial((prev) =>
        prev < specialBackground.length - 1 ? prev + 1 : prev
      );
      setAnimationClass('animate-fadeLeft');
    } else if (diff < -5) {
      // Swipe right
      setCurSpecial((prev) => (prev > 0 ? prev - 1 : prev));
      setAnimationClass('animate-fadeRight');
    }
    setTouchPosition(null); // Reset touch position after handling the swipe
  };

  return (
    <div className="relative">
      <div
        className="swiper-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="flex overflow-hidden">
          {specialBackground.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`special background ${index + 1}`}
              width={700}
              height={700}
              className={`${
                index === curSpecial ? animationClass : "hidden"
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
  );
};

export default SpecialMobile;

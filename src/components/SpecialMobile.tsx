// pages/portfolio.tsx
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

import arrowLeft from "../images/mobileSpecial/arrowLeft.png"
import arrowRight from "../images/mobileSpecial/arrowRight.png"

const SpecialMobile: NextPage = () => {

  const specialBackground = [
    sp01,
    sp02,
    sp03,
    sp04,
    sp05,
    sp06,
    sp07,
    sp08,
  ]

  const [curSpecial, setCurSpecial] = useState(0)

  const handleCurSpecial = (action: string) => {
    if (action === "+1" && curSpecial < specialBackground.length - 1) {
      setCurSpecial(prevState => prevState + 1); // Use functional form of setState
    } else if (action === "-1" && curSpecial > 0) { // Ensure curSpecial does not go below 1
      setCurSpecial(prevState => prevState - 1); // Use functional form of setState
    }
  }

  return (
    <>
      <div className="flex flex-col justify-between relative items-center overflow-hidden">
        {specialBackground.map((background, id) => (
          <Image key={id} className={`${id === curSpecial ? "animate-fadeIn block" : "hidden"}`} src={specialBackground[curSpecial]} alt={'special background'}></Image>
        ))}
        <div className="flex w-full justify-between text-[2.75vh] leading-loose">
          <button className="w-[5%]" onClick={() => handleCurSpecial("-1")}>
            <Image alt="arrow left" src={arrowLeft}></Image>
          </button>
          <span className="text-[#898989] underline">{`${curSpecial + 1}/${specialBackground.length}`}</span> {/* Display current page number */}
          <button className="w-[5%]" onClick={() => handleCurSpecial("+1")}>
            <Image alt="arrow right" src={arrowRight}></Image>
          </button>
        </div>
      </div>
      </>
  );
};

export default SpecialMobile;

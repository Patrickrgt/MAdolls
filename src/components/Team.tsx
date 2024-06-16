// pages/portfolio.tsx
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MAdoll1 from "../images/MAdoll1.png";
import MAdoll2 from "../images/MAdoll2.png";
import MAdoll3 from "../images/MAdoll3.png";
import MAdoll4 from "../images/MAdoll4.png";
import MAdoll5 from "../images/MAdoll5.png";
import MAdoll6 from "../images/MAdoll6.png";

const Team: NextPage = () => {
  const MAdolls = [MAdoll1, MAdoll2, MAdoll3, MAdoll4, MAdoll5, MAdoll6];
  const [curDoll, setCurDoll] = useState(0);

  const handleCurDoll = (id: number) => {
    setCurDoll(id);
  };

  return (
    <div className="flex flex-col w-[80%] h-full justify-between ">
      
    </div>
  );
};

export default Team;

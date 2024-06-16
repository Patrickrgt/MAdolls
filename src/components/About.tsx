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

const About: NextPage = () => {
  const MAdolls = [MAdoll1, MAdoll2, MAdoll3, MAdoll4, MAdoll5, MAdoll6];
  const [curDoll, setCurDoll] = useState(0);

  const handleCurDoll = (id: number) => {
    setCurDoll(id);
  };

  return (
    <div className="flex flex-col w-[80%] h-full justify-between ">
      <div>
        <div className="font-semibold text-[6vh] hover:text-[#FF0083] transition-all ease-in-out  cursor-none">
          About MAdoll's skins
        </div>
        <div className="w-[80%] group">
          <div className="group-hover:border-[#FF0083] border-l-[1vh] pl-[2vh] transition-all ease-in-out cursor-none">
            <h1 className="text-[1.75vh] hover:text-[#FF0083] leading-tight font-semibold transition-all ease-in-out">
              No two MAdoll skins are alike.
            </h1>
            <h1 className="text-[1.75vh] hover:text-[#FF0083] leading-tight transition-all ease-in-out">
              This is because two layers are superimposed to create a variety of
              colors.
            </h1>
            <h1 className="text-[1.75vh] hover:text-[#FF0083] leading-tight transition-all ease-in-out">
              Enjoy your own colors, only for that MAdoll.
            </h1>
            <br />
            <h1 className="text-[1.75vh] hover:text-[#FF0083] leading-tight font-semibold transition-all ease-in-out">
              MAdollのスキンは2つとして同じものはありません。
            </h1>
            <h1 className="text-[1.75vh] hover:text-[#FF0083] leading-tight transition-all ease-in-out">
            これは、2つのレイヤーを重ね合わせることで、さまざまな色が生まれるからだ。
            </h1>
            <h1 className="text-[1.75vh] hover:text-[#FF0083] leading-tight transition-all ease-in-out">
              そのMAdollのためだけに、自分だけの色を楽しむ。
            </h1>
          </div>
        </div>
      </div>

      <div className="w-[70%]">
        <div className="grid grid-cols-2">
          <Image
            src={MAdolls[curDoll]}
            alt="MAdoll"
            className="h-full w-fit "
          />
          <div className="grid grid-rows-2 grid-cols-3">
            {MAdolls.map((doll, id) => (
              <button
                onClick={() => handleCurDoll(id)}
                className="h-fit w-full aspect-square p-0 border-0 m-auto"
              >
                <Image
                  className="h-fit w-full aspect-square hover:border-[#FF0083] hover:border-[0.5vh] border-transparent border-[0.5vh] transition-all ease-in-out"
                  src={doll}
                  alt="doll"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

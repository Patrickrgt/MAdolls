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

const Story: NextPage = () => {
  const MAdolls = [MAdoll1, MAdoll2, MAdoll3, MAdoll4, MAdoll5, MAdoll6];
  const [curDoll, setCurDoll] = useState(0);

  const handleCurDoll = (id: number) => {
    setCurDoll(id);
  };

  return (
    <div className="flex flex-col w-[80%] h-full justify-between ">
      <div>
        <div className="font-semibold text-[6vh] hover:text-[#FF0083] transition-all ease-in-out  cursor-none">MAdoll Story</div>
        <div className="w-[80%] group">
          <div className="group-hover:border-[#FF0083] border-l-[1vh] pl-[2vh] transition-all ease-in-out cursor-none">

          <h1 className="text-[1.75vh] hover:text-[#FF0083] leading-tight font-semibold transition-all ease-in-out">
            This is a generative collection in which MAcci, as an individual
            creator, challenges NFT's and continues to search of possibilities.
          </h1>
          <p className="text-[1.5vh] hover:text-[#FF0083] leading-tight mt-[0.5vh] transition-all ease-in-out">
            I cannot promise any specific benefits or airdrops for this
            collection as we move forward into an uncertain future with changing
            rules and circumstances. What I promise is my hard work and my
            thoughts for all of you.
          </p>
          <p className="text-[1.5vh] hover:text-[#FF0083] leading-tight mt-[0.5vh] transition-all ease-in-out">
            I want to continue to share with you the various joys, headwinds and
            challenges. MAdoll is a “cyber doll” inspired by the dolls we all
            played with in our childhood.
          </p>
          <p className="text-[1.5vh] hover:text-[#FF0083] leading-tight mt-[0.5vh] transition-all ease-in-out">
            As a former color designer, I have a strong passion for color. As
            part of my expression, no two MAdolls have the same skin color. "All
            colors can shine” is a policy I have consistently held as a NFT
            creator. Let's play around with novelty, unbound by anything. Just
            like back then.
          </p>

          <br />

          <h1 className="font-semibold text-[1.75vh] leading-tight mt-[0.5vh] hover:text-[#FF0083] transition-all ease-in-out">
            このコレクションは、マッチが個人クリエーターとしてNFTに挑戦し、可能性を模索し続けるジェネレイティブなコレクションである。
          </h1>
          <p className="text-[1.5vh] font-normal mt-[0.5vh] hover:text-[#FF0083] transition-all ease-in-out">
            ルールや状況が変化する不確実な未来に向かって前進している今、私はこのコレクションについて具体的な特典やエアドロップを約束することはできない。私が約束するのは、私の努力と皆さんへの思いです。
          </p>
          <p className="text-[1.5vh] font-normal mt-[0.5vh] hover:text-[#FF0083] transition-all ease-in-out">
            様々な喜び、逆風、そして挑戦をこれからも皆さんと分かち合いたい。MAdollは、私たちが子供の頃に遊んだ人形にインスパイアされた「サイバー人形」です。
          </p>

          <p className="text-[1.5vh] font-normal mt-[0.5vh] hover:text-[#FF0083] transition-all ease-in-out">
            元カラーデザイナーとして、私は色に強い情熱を持っています。私の表現の一環として、同じ肌の色をしたMAdollは2体といません。「どんな色も輝ける」というのが、NFTクリエイターとしての一貫したポリシーです。何にも縛られず、斬新な遊びをしよう。あの頃のように。
          </p>
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

export default Story;

// pages/portfolio.tsx
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import skin1 from "../images/skins/skin1.png";
import skin2 from "../images/skins/skin2.png";
import skin3 from "../images/skins/skin3.png";
import skin4 from "../images/skins/skin4.png";
import skin5 from "../images/skins/skin5.png";
import skin6 from "../images/skins/skin6.png";
import skin7 from "../images/skins/skin7.png";
import skin8 from "../images/skins/skin8.png";
import skin9 from "../images/skins/skin9.png";
import skin10 from "../images/skins/skin10.png";
import skin11 from "../images/skins/skin11.png";
import skin12 from "../images/skins/skin12.png";
import skin13 from "../images/skins/skin13.png";
import skin14 from "../images/skins/skin14.png";
import skin15 from "../images/skins/skin15.png";
import aboutSkin from "../images/aboutSkin.png";

import color01 from "../images/colors/color-1.png";
import color02 from "../images/colors/color-2.png";
import color03 from "../images/colors/color-3.png";
import color04 from "../images/colors/color-4.png";
import color05 from "../images/colors/color-5.png";
import color06 from "../images/colors/color-6.png";
import color07 from "../images/colors/color-7.png";
import color08 from "../images/colors/color-8.png";
import color09 from "../images/colors/color-9.png";
import color10 from "../images/colors/color-10.png";
import color11 from "../images/colors/color-11.png";
import color12 from "../images/colors/color-12.png";
import color13 from "../images/colors/color-13.png";
import color14 from "../images/colors/color-14.png";
import color15 from "../images/colors/color-15.png";
import color16 from "../images/colors/color-16.png";

import bg01 from "../images/backgrounds/background-01.png";
import bg02 from "../images/backgrounds/background-02.png";
import bg03 from "../images/backgrounds/background-03.png";
import bg04 from "../images/backgrounds/background-04.png";
import bg05 from "../images/backgrounds/background-05.png";
import bg06 from "../images/backgrounds/background-06.png";
import bg07 from "../images/backgrounds/background-07.png";
import bg08 from "../images/backgrounds/background-08.png";

import thumb1 from "../images/thumbnails/thumbnail-01.png";
import thumb2 from "../images/thumbnails/thumbnail-02.png";
import thumb3 from "../images/thumbnails/thumbnail-03.png";
import thumb4 from "../images/thumbnails/thumbnail-04.png";
import thumb5 from "../images/thumbnails/thumbnail-05.png";
import thumb6 from "../images/thumbnails/thumbnail-06.png";
import thumb7 from "../images/thumbnails/thumbnail-07.png";
import thumb8 from "../images/thumbnails/thumbnail-08.png";

const About: NextPage = () => {
  const backgrounds = [bg01, bg02, bg03, bg04, bg05, bg06, bg07, bg08];

  const thumbnails = [
    thumb1,
    thumb2,
    thumb3,
    thumb4,
    thumb5,
    thumb6,
    thumb7,
    thumb8,
  ];

  const skins = [
    skin1,
    skin2,
    skin3,
    skin4,
    skin5,
    skin6,
    skin7,
    skin8,
    skin9,
    skin10,
    skin11,
    skin12,
    skin13,
    skin14,
    skin15,
  ];

  const colors = [
    { title: "Sunset memories", img: color01, hex: '#FF823E' },
    { title: "Stimulating", img: color02, hex: '#FF3D83' },
    { title: "Surge", img: color03, hex: '#00FF00' },
    { title: "Stand out", img: color04, hex: '#FF0000' },
    { title: "Warm memory", img: color05, hex: '#FF8283' },
    { title: "Feeling of expectation", img: color06, hex: '#92FF3B' },
    { title: "Being absorbed in", img: color07, hex: '#34FF8F' },
    { title: "Direct transmission", img: color08, hex: '#82823E' },
    { title: "Optimistic", img: color09, hex: '#FF82FF' },
    { title: "Own world", img: color10, hex: '#34898F' },
    { title: "Take in", img: color11, hex: '#873DFF' },
    { title: "Invite", img: color12, hex: '#8F418F' },
    { title: "I am I", img: color13, hex: '#21231E' },
    { title: "Doesn't seem to exist", img: color14, hex: '#E0DFE4' },
    { title: "Trust", img: color15, hex: '#0000FF' },
  ];

  const [curBg, setCurBg] = useState(0);
  const [curTitle, setCurTitle] = useState(0);
  const [curTab, setCurTab] = useState(0);

  const handleCurTab = (id: number) => {
    setCurTab(id);
  };

  const handleCurTitle = (id: number) => {
    setCurTitle(id);
  };

  const handleCurBg = (id: number) => {
    setCurBg(id);
  };

  return (
    <div className="flex flex-col w-[80%] justify-between relative overflow-hidden">
      <div className={`${curTab != 0 ? "hidden" : "block"} overflow-hidden`}>
        <div className="flex">
          <div className="animate-fadeIn font-semibold text-[6vh] hover:text-[#FF0083] transition-all ease-in-out cursor-none overflow-hidden">
            MAdoll Skins
          </div>
          <button
            onClick={() => handleCurTab(1)}
            className="pl-[2vh] animate-fadeIn font-semibold text-[3vh] text-[#FF0083] hover:text-[#000] transition-all ease-in-out cursor-pointer overflow-hidden"
          >
            🖼️ MAdoll Backgrounds
          </button>
          <button
            onClick={() => handleCurTab(2)}
            className="pl-[2vh] animate-fadeIn font-semibold text-[3vh] text-[#FF0083] hover:text-[#000] transition-all ease-in-out cursor-pointer overflow-hidden"
          >
            🌄 MAdoll Specials
            </button>
        </div>

        <div className="w-[80%] group overflow-hidden">
          <div className="animate-fadeRight group-hover:border-[#FF0083] border-l-[1vh] pl-[2vh] transition-all ease-in-out cursor-none">
            <div className="animate-fadeLeft">
              <h1 className="text-[1.75vh] hover:text-[#FF0083] leading-tight font-semibold transition-all ease-in-out">
                No two MAdoll skins are alike.
              </h1>
              <h1 className="text-[1.75vh] hover:text-[#FF0083] leading-tight transition-all ease-in-out">
                This is because two layers are superimposed to create a variety
                of colors.
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

        <div className="w-[80%] overflow-hidden">
          <Image
            src={aboutSkin}
            className="animate-fadeIn m-auto w-[70%] h-fit"
            alt="aboutSkin"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAGxABAQEBAQEBAQAAAAAAAAAAAAECERIDITH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECEv/aAAwDAQACEQMRAD8A86HyWQ+YlzHrSK5VyllXK0V5VyeEyeKxQwlEwMWmLQBPSWldJaLU6jtz7dG0Nkqdjm+jl1/XX9I5dT9Q6gwrCBWx6/DyNw0i0ivk2Vcp5UypIeRTJ4nDxSGMwMYBCsFACaS0rpLRaWxHaO19I7LYTHNuOfU/XVuOfU/U7zrSJcbh7A4j5rY9jgyMMdWOnyaHhIaGkDFIaJw0pox2L0emAehW6W1mwKno9JouBiWktK6S0WwMQ2jqfq+0tQMDEuNw/A4TAx6ok6MquOvDw0JKPRLYeUZSdHokp+j0nW6IH6Fpet0Ra0lG0loDhdJaU0loMDE9JVXSdLYFhGECld/TSp9GVV12KSj0ko9BPo/R6TrdFKn6PSdHogbrdL1uieNaW1rS2sYuqnqm1U9UGLolNSUlJQBqxSOvrdL0On11apKbqUppWS6qnR6nKaVkbT9HpJR6ISm63QYVJWtJaakrHlLqp2m0naFrWhaS0bSWp2p2taHQtDpNT11dDpPQej6v6UlPKh08ran10tKaVKU8ralaeU0JDQ2tKZgYdPK1JTUtbT6npLVU0lqha2ltTtHVT1pDvrE+q103pO1uo+qn6dHpvSfpvR52f0rKfNQlVzVPReulpTypZqkGVPVIaEhobRlMzMOqShS01JptNqekd1XSG6W0NT1UrTaqdrm6u1PqtaHS2h1sQvS7MxFxlWyhP6tlXktWyplLKkUhFIeEh4c0EQEVIWl0ak0Ap6c/0dGnP9CdMhpPR9J6QiPZLQ61A7ltf//Z"
          ></Image>
          <div className="flex">
            {skins.map((doll, id) => (
              <Image
              key={id}
                style={{
                  animation: `fadeIn 0.5s ease-out ${id * 0.15}s forwards`,
                }}
                className="animate-fadeIn sm:opacity-0 h-fit w-full aspect-square hover:border-[#FF0083] hover:border-[0.25vh] border-transparent border-[0.25vh] transition-all ease-in-out"
                src={doll}
                alt="doll"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAGxABAQEBAQEBAQAAAAAAAAAAAAECERIDITH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECEv/aAAwDAQACEQMRAD8A86HyWQ+YlzHrSK5VyllXK0V5VyeEyeKxQwlEwMWmLQBPSWldJaLU6jtz7dG0Nkqdjm+jl1/XX9I5dT9Q6gwrCBWx6/DyNw0i0ivk2Vcp5UypIeRTJ4nDxSGMwMYBCsFACaS0rpLRaWxHaO19I7LYTHNuOfU/XVuOfU/U7zrSJcbh7A4j5rY9jgyMMdWOnyaHhIaGkDFIaJw0pox2L0emAehW6W1mwKno9JouBiWktK6S0WwMQ2jqfq+0tQMDEuNw/A4TAx6ok6MquOvDw0JKPRLYeUZSdHokp+j0nW6IH6Fpet0Ra0lG0loDhdJaU0loMDE9JVXSdLYFhGECld/TSp9GVV12KSj0ko9BPo/R6TrdFKn6PSdHogbrdL1uieNaW1rS2sYuqnqm1U9UGLolNSUlJQBqxSOvrdL0On11apKbqUppWS6qnR6nKaVkbT9HpJR6ISm63QYVJWtJaakrHlLqp2m0naFrWhaS0bSWp2p2taHQtDpNT11dDpPQej6v6UlPKh08ran10tKaVKU8ralaeU0JDQ2tKZgYdPK1JTUtbT6npLVU0lqha2ltTtHVT1pDvrE+q103pO1uo+qn6dHpvSfpvR52f0rKfNQlVzVPReulpTypZqkGVPVIaEhobRlMzMOqShS01JptNqekd1XSG6W0NT1UrTaqdrm6u1PqtaHS2h1sQvS7MxFxlWyhP6tlXktWyplLKkUhFIeEh4c0EQEVIWl0ak0Ap6c/0dGnP9CdMhpPR9J6QiPZLQ61A7ltf//Z"
              />
            ))}
          </div>
        </div>
      </div>

      <div className={`${curTab != 1 ? "hidden" : "block"} flex flex-col`}>
        <div className="flex">
          <div className="animate-fadeIn font-semibold text-[6vh] hover:text-[#FF0083] transition-all ease-in-out cursor-none overflow-hidden">
          MAdoll Backgrounds
          </div>
          <button
            onClick={() => handleCurTab(0)}
            className="pl-[2vh] animate-fadeIn font-semibold text-[3vh] text-[#FF0083] hover:text-[#000] transition-all ease-in-out cursor-pointer overflow-hidden"
          >
            🎨 MAdoll Skins
          </button>
          <button
            onClick={() => handleCurTab(2)}
            className="pl-[2vh] animate-fadeIn font-semibold text-[3vh] text-[#FF0083] hover:text-[#000] transition-all ease-in-out cursor-pointer overflow-hidden"
          >
           🌄 MAdoll Specials
          </button>
        </div>

        <div className="w-[80%] group overflow-hidden">
          <div className="animate-fadeRight group-hover:border-[#FF0083] border-l-[1vh] pl-[2vh] transition-all ease-in-out cursor-none">
            <div className="animate-fadeLeft">
              <h1 className="text-[1.75vh] hover:text-[#FF0083] leading-tight font-semibold transition-all ease-in-out">
                All MAdoll color backgrounds are titled. This is something I do
                all the time.
              </h1>
              <h1 className="text-[1.75vh] hover:text-[#FF0083] leading-tight transition-all ease-in-out">
                I put my color impressions into words.
              </h1>
              <br />
              <h1 className="text-[1.75vh] hover:text-[#FF0083] leading-tight font-semibold transition-all ease-in-out">
                MAdollのカラー背景にはすべてタイトルが付いています。これは私がいつもやっていることです。
              </h1>
              <h1 className="text-[1.75vh] hover:text-[#FF0083] leading-tight transition-all ease-in-out">
                私は自分の色の印象を言葉にした。
              </h1>
            </div>
          </div>
        </div>

        <div className="overflow-hidden flex flex-col justify-start items-stretch gap-[2vh] pt-[4vh] w-[80%]">
          <div className="grid grid-cols-5 grid-rows-3 overflow-hidden gap-[1vh] m-auto">
            {colors.map((color, id) => (
              <div key={id}>
                <Image
                  onClick={() => handleCurTitle(id)}
                  style={{
                    animation: `fadeIn 0.5s ease-out ${id * 0.15}s forwards`,
                  }}
                  className={`${
                    curTitle == id ? "border-[#FF0083]" : "border-transparent"
                  } animate-fadeIn h-[12vh] w-[12vh] sm:opacity-0 aspect-square hover:border-[#FF0083] hover:border-[0.5vh] border-[0.5vh] transition-all ease-in-out`}
                  src={color.img}
                  alt="doll"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAGxABAQEBAQEBAQAAAAAAAAAAAAECERIDITH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECEv/aAAwDAQACEQMRAD8A86HyWQ+YlzHrSK5VyllXK0V5VyeEyeKxQwlEwMWmLQBPSWldJaLU6jtz7dG0Nkqdjm+jl1/XX9I5dT9Q6gwrCBWx6/DyNw0i0ivk2Vcp5UypIeRTJ4nDxSGMwMYBCsFACaS0rpLRaWxHaO19I7LYTHNuOfU/XVuOfU/U7zrSJcbh7A4j5rY9jgyMMdWOnyaHhIaGkDFIaJw0pox2L0emAehW6W1mwKno9JouBiWktK6S0WwMQ2jqfq+0tQMDEuNw/A4TAx6ok6MquOvDw0JKPRLYeUZSdHokp+j0nW6IH6Fpet0Ra0lG0loDhdJaU0loMDE9JVXSdLYFhGECld/TSp9GVV12KSj0ko9BPo/R6TrdFKn6PSdHogbrdL1uieNaW1rS2sYuqnqm1U9UGLolNSUlJQBqxSOvrdL0On11apKbqUppWS6qnR6nKaVkbT9HpJR6ISm63QYVJWtJaakrHlLqp2m0naFrWhaS0bSWp2p2taHQtDpNT11dDpPQej6v6UlPKh08ran10tKaVKU8ralaeU0JDQ2tKZgYdPK1JTUtbT6npLVU0lqha2ltTtHVT1pDvrE+q103pO1uo+qn6dHpvSfpvR52f0rKfNQlVzVPReulpTypZqkGVPVIaEhobRlMzMOqShS01JptNqekd1XSG6W0NT1UrTaqdrm6u1PqtaHS2h1sQvS7MxFxlWyhP6tlXktWyplLKkUhFIeEh4c0EQEVIWl0ak0Ap6c/0dGnP9CdMhpPR9J6QiPZLQ61A7ltf//Z"
                />
              </div>
            ))}
          </div>
          <div
      style={{ color: colors[curTitle].hex }}
      className="m-auto text-center animate-fadeIn font-semibold text-[6vh] transition-all ease-in-out cursor-none overflow-hidden"
>
          {`${colors[curTitle].title}`}</div>

        </div>
        </div>

      <div className={`${curTab != 2 ? "hidden" : "block"} flex flex-col`}>
        <div className="flex">
          <div className="animate-fadeIn font-semibold text-[6vh] hover:text-[#FF0083] transition-all ease-in-out cursor-none overflow-hidden">
            MAdoll Specials
          </div>
          <button
            onClick={() => handleCurTab(0)}
            className="pl-[2vh] animate-fadeIn font-semibold text-[3vh] text-[#FF0083] hover:text-[#000] transition-all ease-in-out cursor-pointer overflow-hidden"
          >
            🎨 MAdoll Skins
          </button>
          <button
            onClick={() => handleCurTab(1)}
            className="pl-[2vh] animate-fadeIn font-semibold text-[3vh] text-[#FF0083] hover:text-[#000] transition-all ease-in-out cursor-pointer overflow-hidden"
          >
            🖼️ MAdoll Backgrounds
            </button>
        </div>

        <div className="w-[80%] group overflow-hidden">
          <div className="animate-fadeRight group-hover:border-[#FF0083] border-l-[1vh] pl-[2vh] transition-all ease-in-out cursor-none">
            <div className="animate-fadeLeft">
              <h1 className="text-[1.75vh] hover:text-[#FF0083] leading-tight font-semibold transition-all ease-in-out">
                Some of Madoll’s backgrounds are special too!
              </h1>
              <h1 className="text-[1.75vh] hover:text-[#FF0083] leading-tight transition-all ease-in-out">
                These images represent memories from MAcci’s experiences and are
                incorporated in a small percentage of MAdolls in the collection.{" "}
              </h1>
              <br />
              <h1 className="text-[1.75vh] hover:text-[#FF0083] leading-tight font-semibold transition-all ease-in-out">
                マドールの背景にも特別なものがある！
              </h1>
              <h1 className="text-[1.75vh] hover:text-[#FF0083] leading-tight transition-all ease-in-out">
                これらのイメージはMAcciの経験からの思い出を表しており、コレクションの中のごく一部のMAdollに取り入れられています。{" "}
              </h1>
            </div>
          </div>
        </div>

        <div className="overflow-hidden flex justify-start items-stretch gap-[2vh] pt-[4vh] w-[90%]">
          <div className="w-[60%]">
            <Image
              src={backgrounds[curBg]}
              className="animate-fadeIn h-full"
              alt="aboutSkin"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAGxABAQEBAQEBAQAAAAAAAAAAAAECERIDITH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECEv/aAAwDAQACEQMRAD8A86HyWQ+YlzHrSK5VyllXK0V5VyeEyeKxQwlEwMWmLQBPSWldJaLU6jtz7dG0Nkqdjm+jl1/XX9I5dT9Q6gwrCBWx6/DyNw0i0ivk2Vcp5UypIeRTJ4nDxSGMwMYBCsFACaS0rpLRaWxHaO19I7LYTHNuOfU/XVuOfU/U7zrSJcbh7A4j5rY9jgyMMdWOnyaHhIaGkDFIaJw0pox2L0emAehW6W1mwKno9JouBiWktK6S0WwMQ2jqfq+0tQMDEuNw/A4TAx6ok6MquOvDw0JKPRLYeUZSdHokp+j0nW6IH6Fpet0Ra0lG0loDhdJaU0loMDE9JVXSdLYFhGECld/TSp9GVV12KSj0ko9BPo/R6TrdFKn6PSdHogbrdL1uieNaW1rS2sYuqnqm1U9UGLolNSUlJQBqxSOvrdL0On11apKbqUppWS6qnR6nKaVkbT9HpJR6ISm63QYVJWtJaakrHlLqp2m0naFrWhaS0bSWp2p2taHQtDpNT11dDpPQej6v6UlPKh08ran10tKaVKU8ralaeU0JDQ2tKZgYdPK1JTUtbT6npLVU0lqha2ltTtHVT1pDvrE+q103pO1uo+qn6dHpvSfpvR52f0rKfNQlVzVPReulpTypZqkGVPVIaEhobRlMzMOqShS01JptNqekd1XSG6W0NT1UrTaqdrm6u1PqtaHS2h1sQvS7MxFxlWyhP6tlXktWyplLKkUhFIeEh4c0EQEVIWl0ak0Ap6c/0dGnP9CdMhpPR9J6QiPZLQ61A7ltf//Z"
            ></Image>
          </div>

          <div className="grid grid-cols-2 grid-rows-4 overflow-hidden gap-[1vh] mr-auto">
            {thumbnails.map((thumbnail, id) => (
              <Image
              key={id}
                onClick={() => handleCurBg(id)}
                style={{
                  animation: `fadeIn 0.5s ease-out ${id * 0.15}s forwards`,
                }}
                className={`${
                  curBg == id ? "border-[#FF0083]" : "border-transparent"
                } animate-fadeIn h-[12vh] w-[12vh] sm:opacity-0 aspect-square hover:border-[#FF0083] hover:border-[0.5vh] border-[0.5vh] transition-all ease-in-out`}
                src={thumbnail}
                alt="doll"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAGxABAQEBAQEBAQAAAAAAAAAAAAECERIDITH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECEv/aAAwDAQACEQMRAD8A86HyWQ+YlzHrSK5VyllXK0V5VyeEyeKxQwlEwMWmLQBPSWldJaLU6jtz7dG0Nkqdjm+jl1/XX9I5dT9Q6gwrCBWx6/DyNw0i0ivk2Vcp5UypIeRTJ4nDxSGMwMYBCsFACaS0rpLRaWxHaO19I7LYTHNuOfU/XVuOfU/U7zrSJcbh7A4j5rY9jgyMMdWOnyaHhIaGkDFIaJw0pox2L0emAehW6W1mwKno9JouBiWktK6S0WwMQ2jqfq+0tQMDEuNw/A4TAx6ok6MquOvDw0JKPRLYeUZSdHokp+j0nW6IH6Fpet0Ra0lG0loDhdJaU0loMDE9JVXSdLYFhGECld/TSp9GVV12KSj0ko9BPo/R6TrdFKn6PSdHogbrdL1uieNaW1rS2sYuqnqm1U9UGLolNSUlJQBqxSOvrdL0On11apKbqUppWS6qnR6nKaVkbT9HpJR6ISm63QYVJWtJaakrHlLqp2m0naFrWhaS0bSWp2p2taHQtDpNT11dDpPQej6v6UlPKh08ran10tKaVKU8ralaeU0JDQ2tKZgYdPK1JTUtbT6npLVU0lqha2ltTtHVT1pDvrE+q103pO1uo+qn6dHpvSfpvR52f0rKfNQlVzVPReulpTypZqkGVPVIaEhobRlMzMOqShS01JptNqekd1XSG6W0NT1UrTaqdrm6u1PqtaHS2h1sQvS7MxFxlWyhP6tlXktWyplLKkUhFIeEh4c0EQEVIWl0ak0Ap6c/0dGnP9CdMhpPR9J6QiPZLQ61A7ltf//Z"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

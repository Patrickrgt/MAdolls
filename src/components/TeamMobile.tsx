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
import MAcci from "../images/MAdoll Team/MAcci.png";
import shvrk from "../images/MAdoll Team/shvrk.png";
import chuck from "../images/MAdoll Team/chuck.png";
import mado from "../images/MAdoll Team/mado.png";
import bobby from "../images/MAdoll Team/bobby.png";

import arrowLeft from "../images/mobileSpecial/arrowLeft.png"
import arrowRight from "../images/mobileSpecial/arrowRight.png"

const TeamMobile: NextPage = () => {
  const Team = [
    {
      member: MAcci,
      name: "MAcci",
      title: "Artist",
      desc: `I'm a former color designer. \n In the process, I always had a thought. \n\n I enjoy my job very much. \n\nBut the products that leave the nest are always in the same family of colors...\n\nSo-called "sellable colors," "standout colors," "safe colors," and so on.\nI often put them away with the thought, "This color is really a nice combination, too.\nWith these feelings in mind, I decided to\nI have been engaged in creative activities that "value colors," such as "creating characters from colors.`,
      link: "google",
      headline: "I make work that values color",
    },
    {
      member: shvrk,
      name: "shvrkboy",
      title: "Developer",
      desc: "hoyyy",
      link: "google",
      headline: "I make work that values color",
    },
    {
      member: chuck,
      name: "chuck",
      title: "Moderator",
      desc: "hoyyy",
      link: "google",
      headline: "I make work that values color",
    },
    {
      member: mado,
      name: "madotsuki",
      title: "Moderator",
      desc: "hoyyy",
      link: "google",
      headline: "I make work that values color",
    },
    {
      member: bobby,
      name: "bobbystick",
      title: "Moderator",
      desc: "hoyyy",
      link: "google",
      headline: "I make work that values color",
    },
  ];
  const [curDoll, setCurDoll] = useState(0);



  const handleCurDoll = (action: string) => {
    if (action === "+1" && curDoll < Team.length - 1) {
      setCurDoll(prevState => prevState + 1); // Use functional form of setState
    } else if (action === "-1" && curDoll > 0) { // Ensure curSpecial does not go below 1
      setCurDoll(prevState => prevState - 1); // Use functional form of setState
    }
  }

  const renderDescriptionWithLineBreaks = (desc: string) => {
    return desc.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  useEffect(() => {
    console.log(curDoll)
  }, [curDoll])

  return (
    <div className="overflow-hidden flex flex-col gap-[2vh] h-full justify-between">
      <div className="flex flex-col flex-0">

        <div className="flex gap-[4vh]  overflow-hidden h-full ">
          {Team.map((doll, id) => (
            <button
            key={id}
              style={{
                animation: `fadeUp 0.5s ease-out ${id * 0.1}s forwards`,
              }}
              className={`${curDoll === id ? "block" : "hidden"} animate-fadeUp opacity-0 overflow-hidden h-full w-full aspect-square p-0 border-0 m-auto`}
            >
              <Image
                className={`${curDoll == id ? "border-[#FF0083]" : "border-[#000000]"
                  } h-fit w-full aspect-square hover:border-[#FF0083] hover:border-[0.5vh] border-[0.5vh] transition-all ease-in-out`}
                src={doll.member}
                alt="doll"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAGxABAQEBAQEBAQAAAAAAAAAAAAECERIDITH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECEv/aAAwDAQACEQMRAD8A86HyWQ+YlzHrSK5VyllXK0V5VyeEyeKxQwlEwMWmLQBPSWldJaLU6jtz7dG0Nkqdjm+jl1/XX9I5dT9Q6gwrCBWx6/DyNw0i0ivk2Vcp5UypIeRTJ4nDxSGMwMYBCsFACaS0rpLRaWxHaO19I7LYTHNuOfU/XVuOfU/U7zrSJcbh7A4j5rY9jgyMMdWOnyaHhIaGkDFIaJw0pox2L0emAehW6W1mwKno9JouBiWktK6S0WwMQ2jqfq+0tQMDEuNw/A4TAx6ok6MquOvDw0JKPRLYeUZSdHokp+j0nW6IH6Fpet0Ra0lG0loDhdJaU0loMDE9JVXSdLYFhGECld/TSp9GVV12KSj0ko9BPo/R6TrdFKn6PSdHogbrdL1uieNaW1rS2sYuqnqm1U9UGLolNSUlJQBqxSOvrdL0On11apKbqUppWS6qnR6nKaVkbT9HpJR6ISm63QYVJWtJaakrHlLqp2m0naFrWhaS0bSWp2p2taHQtDpNT11dDpPQej6v6UlPKh08ran10tKaVKU8ralaeU0JDQ2tKZgYdPK1JTUtbT6npLVU0lqha2ltTtHVT1pDvrE+q103pO1uo+qn6dHpvSfpvR52f0rKfNQlVzVPReulpTypZqkGVPVIaEhobRlMzMOqShS01JptNqekd1XSG6W0NT1UrTaqdrm6u1PqtaHS2h1sQvS7MxFxlWyhP6tlXktWyplLKkUhFIeEh4c0EQEVIWl0ak0Ap6c/0dGnP9CdMhpPR9J6QiPZLQ61A7ltf//Z"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="">
        <div className="flex gap-[4vh] w-full h-full m-auto justify-start items-center flex-1">


          <div className="animate-fadeLeft flex flex-col gap-[3vh] h-full justify-between items-between">
            <div className="flex flex-col h-full">
              <h2 className="font-semibold text-[2.75vh] hover:text-[#FF0083] transition-all ease-in-out cursor-none">
                {Team[curDoll].name}
              </h2>
              <h3 className="font-semibold underline text-[2.25vh] hover:text-[#FF0083] transition-all ease-in-out cursor-none">
                {Team[curDoll].title}
              </h3>
            </div>

            <div className="flex flex-col justify-between h-full">
              <h3 className="font-semibold text-[1.75vh] hover:text-[#FF0083] transition-all ease-in-out cursor-none">
                {Team[curDoll].headline}
              </h3>
              <p className="whitespace-pre-line	text-[1.25vh] hover:text-[#FF0083] leading-tight mt-[0.5vh] transition-all ease-in-out">
                {Team[curDoll].desc}
              </p>
              <span className="border-b-black border-b-[0.25vh] pt-[2vh]"></span>
            </div>
          </div>
        </div>
        <div className="w-full m-auto flex justify-between py-[4vh]">
          <button className="w-[10%]" onClick={() => handleCurDoll("-1")}>
            <Image alt={`left arrow`} src={arrowLeft}></Image>
          </button>
          <button className="w-[10%]" onClick={() => handleCurDoll("+1")}>
            <Image alt={`right arrow`} src={arrowRight}></Image>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamMobile;

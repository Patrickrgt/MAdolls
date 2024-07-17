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

const Team: NextPage = () => {
  const Team = [
    {
      member: MAcci,
      name: "MAcci",
      title: "Artist",
      desc: `I'm a former color designer. \n In the process, I always had a thought. \n\n I enjoy my job very much. \n\nBut the products that leave the nest are always in the same family of colors...\n\nSo-called "sellable colors," "standout colors," "safe colors," and so on. I often put them away with the thought, "This color is really a nice combination, too. With these feelings in mind, I decided to I have been engaged in creative activities that "value colors," such as "creating characters from colors.`,
      link: "google",
      headline: "色を大切にする作品作り / I make work that values color",
    },
    {
      member: shvrk,
      name: "shvrkboy",
      title: "Developer",
      desc: "Growing developer \n when I'm not procrastinating I'm coding \n\n I help build brand identities with artists, traders, and devs. \nI usually start with the wireframes and communicate with the client all changes before coding. \nI'm proud of actually coding some super sick projects but also I sometimes fall through if the idea can get really crazy. Always trying to improve.  \n\nI think I have an eye for design as well, and I love collaboration because I'll always learn something new about design.",
      link: "google",
      headline: "アーティストとの共同開発 / developing with artists",
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
      desc: "Witch tripping through web3, \nmaking friends and finding great artists along the way.",
      link: "google",
      headline: "キノコ大好き / I love mushrooms~",
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

  const handleCurDoll = (id: number) => {
    setCurDoll(id);
  };

  const renderDescriptionWithLineBreaks = (desc: string) => {
    return desc.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="overflow-hidden flex flex-col w-[80%] h-full justify-between">
      <div className="flex flex-col flex-0">
        <div className="animate-fadeIn font-semibold text-[6vh] hover:text-[#FF0083] transition-all ease-in-out  cursor-none  overflow-hidden h-fit ">
          MAdoll Team
        </div>
        <div className="flex w-[80%] gap-[4vh]  overflow-hidden h-full ">
          {Team.map((doll, id) => (
            <button
              key={id}
              onClick={() => handleCurDoll(id)}
              style={{
                animation: `fadeUp 0.5s ease-out ${id * 0.1}s forwards`,
              }}
              className="animate-fadeUp opacity-0 overflow-hidden h-full w-full aspect-square p-0 border-0 m-auto"
            >
              <Image
                className={`${
                  curDoll == id ? "border-[#FF0083]" : "border-[#000000]"
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
        <div className="flex gap-[4vh]">
          <div className="animate-fadeRight flex">
            <Image
              src={Team[curDoll].member}
              alt="MAdoll"
              className="h-[40vh] w-full border-[#FF0083] border-[0.5vh]"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAGxABAQEBAQEBAQAAAAAAAAAAAAECERIDITH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECEv/aAAwDAQACEQMRAD8A86HyWQ+YlzHrSK5VyllXK0V5VyeEyeKxQwlEwMWmLQBPSWldJaLU6jtz7dG0Nkqdjm+jl1/XX9I5dT9Q6gwrCBWx6/DyNw0i0ivk2Vcp5UypIeRTJ4nDxSGMwMYBCsFACaS0rpLRaWxHaO19I7LYTHNuOfU/XVuOfU/U7zrSJcbh7A4j5rY9jgyMMdWOnyaHhIaGkDFIaJw0pox2L0emAehW6W1mwKno9JouBiWktK6S0WwMQ2jqfq+0tQMDEuNw/A4TAx6ok6MquOvDw0JKPRLYeUZSdHokp+j0nW6IH6Fpet0Ra0lG0loDhdJaU0loMDE9JVXSdLYFhGECld/TSp9GVV12KSj0ko9BPo/R6TrdFKn6PSdHogbrdL1uieNaW1rS2sYuqnqm1U9UGLolNSUlJQBqxSOvrdL0On11apKbqUppWS6qnR6nKaVkbT9HpJR6ISm63QYVJWtJaakrHlLqp2m0naFrWhaS0bSWp2p2taHQtDpNT11dDpPQej6v6UlPKh08ran10tKaVKU8ralaeU0JDQ2tKZgYdPK1JTUtbT6npLVU0lqha2ltTtHVT1pDvrE+q103pO1uo+qn6dHpvSfpvR52f0rKfNQlVzVPReulpTypZqkGVPVIaEhobRlMzMOqShS01JptNqekd1XSG6W0NT1UrTaqdrm6u1PqtaHS2h1sQvS7MxFxlWyhP6tlXktWyplLKkUhFIeEh4c0EQEVIWl0ak0Ap6c/0dGnP9CdMhpPR9J6QiPZLQ61A7ltf//Z"
            />
          </div>

          <div className="animate-fadeLeft flex flex-col w-[70%] justify-between items-between">
            <h2 className="font-semibold text-[6vh] hover:text-[#FF0083] transition-all ease-in-out cursor-none">
              {Team[curDoll].name}
            </h2>
            <h3 className="font-semibold underline text-[3.25vh] hover:text-[#FF0083] transition-all ease-in-out cursor-none">
              {Team[curDoll].title}
            </h3>

            <div className="w-[80%] flex gap-[2vh] flex-col justify-between border-b-2 border-b-black">
              <div className="flex flex-col justify-between">
                <h3 className="font-semibold text-[3vh] hover:text-[#FF0083] transition-all ease-in-out cursor-none">
                  {Team[curDoll].headline}
                </h3>
                <p className="text-[1.5vh] hover:text-[#FF0083] leading-tight mt-[0.5vh] transition-all ease-in-out whitespace-pre-line">
                  {Team[curDoll].desc}
                </p>
              </div>
              <span className="border-b-black border-b-[0.25vh]"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

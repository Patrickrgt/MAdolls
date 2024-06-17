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

const About: NextPage = () => {
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
  const [curDoll, setCurDoll] = useState(0);

  const handleCurDoll = (id: number) => {
    setCurDoll(id);
  };

  return (
    <div className="flex flex-col w-[80%] h-full justify-between ">
      <div className="animate-fadeIn font-semibold text-[6vh] hover:text-[#FF0083] transition-all ease-in-out  cursor-none">
        MAdoll Skins
      </div>
      <div className="w-[80%] group">
        <div className="animate-fadeRight group-hover:border-[#FF0083] border-l-[1vh] pl-[2vh] transition-all ease-in-out cursor-none">
          <div className="animate-fadeLeft">
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

      <div className="w-[80%]">
        <Image
          src={aboutSkin}
          className="animate-fadeIn m-auto w-[80%] h-fit"
          alt="aboutSkin"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAGxABAQEBAQEBAQAAAAAAAAAAAAECERIDITH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECEv/aAAwDAQACEQMRAD8A86HyWQ+YlzHrSK5VyllXK0V5VyeEyeKxQwlEwMWmLQBPSWldJaLU6jtz7dG0Nkqdjm+jl1/XX9I5dT9Q6gwrCBWx6/DyNw0i0ivk2Vcp5UypIeRTJ4nDxSGMwMYBCsFACaS0rpLRaWxHaO19I7LYTHNuOfU/XVuOfU/U7zrSJcbh7A4j5rY9jgyMMdWOnyaHhIaGkDFIaJw0pox2L0emAehW6W1mwKno9JouBiWktK6S0WwMQ2jqfq+0tQMDEuNw/A4TAx6ok6MquOvDw0JKPRLYeUZSdHokp+j0nW6IH6Fpet0Ra0lG0loDhdJaU0loMDE9JVXSdLYFhGECld/TSp9GVV12KSj0ko9BPo/R6TrdFKn6PSdHogbrdL1uieNaW1rS2sYuqnqm1U9UGLolNSUlJQBqxSOvrdL0On11apKbqUppWS6qnR6nKaVkbT9HpJR6ISm63QYVJWtJaakrHlLqp2m0naFrWhaS0bSWp2p2taHQtDpNT11dDpPQej6v6UlPKh08ran10tKaVKU8ralaeU0JDQ2tKZgYdPK1JTUtbT6npLVU0lqha2ltTtHVT1pDvrE+q103pO1uo+qn6dHpvSfpvR52f0rKfNQlVzVPReulpTypZqkGVPVIaEhobRlMzMOqShS01JptNqekd1XSG6W0NT1UrTaqdrm6u1PqtaHS2h1sQvS7MxFxlWyhP6tlXktWyplLKkUhFIeEh4c0EQEVIWl0ak0Ap6c/0dGnP9CdMhpPR9J6QiPZLQ61A7ltf//Z"
        ></Image>
        <div className="flex">
          {skins.map((doll, id) => (
            <Image
              style={{
                animation: `fadeIn 0.5s ease-out ${id * 0.15}s forwards`,
              }}
              className="animate-fadeIn opacity-0 h-fit w-full aspect-square hover:border-[#FF0083] hover:border-[0.25vh] border-transparent border-[0.25vh] transition-all ease-in-out"
              src={doll}
              alt="doll"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAGxABAQEBAQEBAQAAAAAAAAAAAAECERIDITH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECEv/aAAwDAQACEQMRAD8A86HyWQ+YlzHrSK5VyllXK0V5VyeEyeKxQwlEwMWmLQBPSWldJaLU6jtz7dG0Nkqdjm+jl1/XX9I5dT9Q6gwrCBWx6/DyNw0i0ivk2Vcp5UypIeRTJ4nDxSGMwMYBCsFACaS0rpLRaWxHaO19I7LYTHNuOfU/XVuOfU/U7zrSJcbh7A4j5rY9jgyMMdWOnyaHhIaGkDFIaJw0pox2L0emAehW6W1mwKno9JouBiWktK6S0WwMQ2jqfq+0tQMDEuNw/A4TAx6ok6MquOvDw0JKPRLYeUZSdHokp+j0nW6IH6Fpet0Ra0lG0loDhdJaU0loMDE9JVXSdLYFhGECld/TSp9GVV12KSj0ko9BPo/R6TrdFKn6PSdHogbrdL1uieNaW1rS2sYuqnqm1U9UGLolNSUlJQBqxSOvrdL0On11apKbqUppWS6qnR6nKaVkbT9HpJR6ISm63QYVJWtJaakrHlLqp2m0naFrWhaS0bSWp2p2taHQtDpNT11dDpPQej6v6UlPKh08ran10tKaVKU8ralaeU0JDQ2tKZgYdPK1JTUtbT6npLVU0lqha2ltTtHVT1pDvrE+q103pO1uo+qn6dHpvSfpvR52f0rKfNQlVzVPReulpTypZqkGVPVIaEhobRlMzMOqShS01JptNqekd1XSG6W0NT1UrTaqdrm6u1PqtaHS2h1sQvS7MxFxlWyhP6tlXktWyplLKkUhFIeEh4c0EQEVIWl0ak0Ap6c/0dGnP9CdMhpPR9J6QiPZLQ61A7ltf//Z"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

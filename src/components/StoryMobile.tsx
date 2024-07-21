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
          threshold: 0.5,
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
    <div className="h-fit overflow-hidden">
      <div className="flex flex-col tracking-none py-[1vh] border-b-[0.25vh] border-[#d1d1d1] w-[94%] m-auto">
        <h1 className="MAdoll opacity-0 overflow-hidden leading-normal font-semibold text-[1.95vh] hover:text-[#FF0083] transition-all ease-in-out">
          This is a generative collection in which MAcci, as an individual
          creator, challenges {`NFT's`} and continues to search of
          possibilities.
        </h1>
        <p className="MAdoll opacity-0 text-[1.5vh] hover:text-[#FF0083] transition-all ease-in-out">
          MAdoll is a “cyber doll” inspired by the dolls we all played with in
          our childhood.
        </p>
        <p className="MAdoll opacity-0 text-[1.5vh] hover:text-[#FF0083] transition-all ease-in-out">
          As a former color designer, I have a strong passion for color. As part
          of my expression, no two MAdolls have the same skin color.{" "}
          {`"All colors
        can shine”`}{" "}
          is a policy I have consistently held as a NFT creator. I want to
          continue to share with you the various joys, headwinds and challenges.
        </p>

        <p className="MAdoll opacity-0 text-[1.5vh] hover:text-[#FF0083] transition-all ease-in-out">
          I cannot promise any specific benefits or airdrops for this collection
          as we move forward into an uncertain future with changing rules and
          circumstances. What I promise is my hard work and my thoughts for all
          of you.
        </p>
        <p className="MAdoll opacity-0 text-[1.5vh] hover:text-[#FF0083] transition-all ease-in-out italic">
          {`Let's`} play around with novelty, unbound by anything. Just like
          back then.
        </p>
      </div>

      <div className="flex flex-col overflow-hidden">
        <div className="w-full flex min-h-[400px] max-h-[400px] h-[400px]">
          <Image
            src={MAdolls[curDoll]}
            alt="MAdoll"
            className="MAdoll-big animate-fadeIn w-full m-auto"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAGxABAQEBAQEBAQAAAAAAAAAAAAECERIDITH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECEv/aAAwDAQACEQMRAD8A86HyWQ+YlzHrSK5VyllXK0V5VyeEyeKxQwlEwMWmLQBPSWldJaLU6jtz7dG0Nkqdjm+jl1/XX9I5dT9Q6gwrCBWx6/DyNw0i0ivk2Vcp5UypIeRTJ4nDxSGMwMYBCsFACaS0rpLRaWxHaO19I7LYTHNuOfU/XVuOfU/U7zrSJcbh7A4j5rY9jgyMMdWOnyaHhIaGkDFIaJw0pox2L0emAehW6W1mwKno9JouBiWktK6S0WwMQ2jqfq+0tQMDEuNw/A4TAx6ok6MquOvDw0JKPRLYeUZSdHokp+j0nW6IH6Fpet0Ra0lG0loDhdJaU0loMDE9JVXSdLYFhGECld/TSp9GVV12KSj0ko9BPo/R6TrdFKn6PSdHogbrdL1uieNaW1rS2sYuqnqm1U9UGLolNSUlJQBqxSOvrdL0On11apKbqUppWS6qnR6nKaVkbT9HpJR6ISm63QYVJWtJaakrHlLqp2m0naFrWhaS0bSWp2p2taHQtDpNT11dDpPQej6v6UlPKh08ran10tKaVKU8ralaeU0JDQ2tKZgYdPK1JTUtbT6npLVU0lqha2ltTtHVT1pDvrE+q103pO1uo+qn6dHpvSfpvR52f0rKfNQlVzVPReulpTypZqkGVPVIaEhobRlMzMOqShS01JptNqekd1XSG6W0NT1UrTaqdrm6u1PqtaHS2h1sQvS7MxFxlWyhP6tlXktWyplLKkUhFIeEh4c0EQEVIWl0ak0Ap6c/0dGnP9CdMhpPR9J6QiPZLQ61A7ltf//Z"
          />
        </div>

        <div className="grid grid-cols-3 grid-rows-2 overflow-hidden">
          {MAdolls.map((doll, id) => (
            <button
              key={id}
              onClick={() => handleCurDoll(id)}
              className="MAdoll-big opacity-0 h-fit aspect-square p-0 border-0 m-auto"
            >
              <Image
                className="h-fit m-auto aspect-square hover:border-[#FF0083] hover:border-[0.5vh] border-transparent border-[0.5vh] transition-all ease-in-out"
                src={doll}
                alt="doll"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAGxABAQEBAQEBAQAAAAAAAAAAAAECERIDITH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECEv/aAAwDAQACEQMRAD8A86HyWQ+YlzHrSK5VyllXK0V5VyeEyeKxQwlEwMWmLQBPSWldJaLU6jtz7dG0Nkqdjm+jl1/XX9I5dT9Q6gwrCBWx6/DyNw0i0ivk2Vcp5UypIeRTJ4nDxSGMwMYBCsFACaS0rpLRaWxHaO19I7LYTHNuOfU/XVuOfU/U7zrSJcbh7A4j5rY9jgyMMdWOnyaHhIaGkDFIaJw0pox2L0emAehW6W1mwKno9JouBiWktK6S0WwMQ2jqfq+0tQMDEuNw/A4TAx6ok6MquOvDw0JKPRLYeUZSdHokp+j0nW6IH6Fpet0Ra0lG0loDhdJaU0loMDE9JVXSdLYFhGECld/TSp9GVV12KSj0ko9BPo/R6TrdFKn6PSdHogbrdL1uieNaW1rS2sYuqnqm1U9UGLolNSUlJQBqxSOvrdL0On11apKbqUppWS6qnR6nKaVkbT9HpJR6ISm63QYVJWtJaakrHlLqp2m0naFrWhaS0bSWp2p2taHQtDpNT11dDpPQej6v6UlPKh08ran10tKaVKU8ralaeU0JDQ2tKZgYdPK1JTUtbT6npLVU0lqha2ltTtHVT1pDvrE+q103pO1uo+qn6dHpvSfpvR52f0rKfNQlVzVPReulpTypZqkGVPVIaEhobRlMzMOqShS01JptNqekd1XSG6W0NT1UrTaqdrm6u1PqtaHS2h1sQvS7MxFxlWyhP6tlXktWyplLKkUhFIeEh4c0EQEVIWl0ak0Ap6c/0dGnP9CdMhpPR9J6QiPZLQ61A7ltf//Z"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;

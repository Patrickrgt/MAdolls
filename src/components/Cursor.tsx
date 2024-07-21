import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Image from "next/image";
import macciCursor from "../images/macciCursor.png";

// import MAcci from "./images/MAcci.png";

const Cursor: NextPage = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Add event listener to track cursor movement
  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPosition);
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  // Update cursor position
  const updateCursorPosition = (event: MouseEvent) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <>
      <Image
        src={macciCursor}
        alt="custom cursor"
        className="hidden lg:block absolute"
        style={{
          top: cursorPosition.y - 16,
          left: cursorPosition.x - 16,
          pointerEvents: "none",
        }}
        width={48}
        height={48}
      />
    </>
  );
};

export default Cursor;

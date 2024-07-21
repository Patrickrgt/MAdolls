import type { NextPage } from "next";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// Mobile SSR
import pauseButton from "../images/pauseButton.png";
import playButton from "../images/playButton.png";
import MAcci from "../images/MAdollLogo.png";

const Audio: NextPage = () => {
  const [music, setMusic] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const musicTracks = [
    {
      id: 1,
      src: "/CrispSummerBreeze.mp3",
      title: "Crisp Summer Breeze by Jexto",
    },
    // Add more tracks as needed
  ];

  // Effect to toggle music play/pause
  useEffect(() => {
    if (music && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [music, currentTrackIndex]);

  const handleMusic = () => {
    setMusic(!music);
  };

  // Optionally, handle track change
  const handleNextTrack = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex + 1 < musicTracks.length ? prevIndex + 1 : 0
    );
  };

  return (
<>
      {/* Audio element */}
      {musicTracks.length > 0 && (
        <audio ref={audioRef} src={musicTracks[currentTrackIndex].src} loop>
          Your browser does not support the audio element.
        </audio>
      )}

      <div className="hidden lg:block fixed lg:absolute bottom-0 right-0 overflow-hidden">
        <div className="flex m-[2vh] justify-center items-center gap-[2vh]">
          <h1
            className={`${
              music ? "lg:opacity-1" : "lg:opacity-0"
            }  italic transition-all duration-500 ease-in-out text-[2vh] font-light border-l-[0.75vh] border-l-[#FF1999] pl-[1vh]`}
          >
            {musicTracks[currentTrackIndex].title}
          </h1>

          <div className="flex bg-[#FF1999] rounded-full p-[1vh]">
            <div className="bg-[#D9D9D9] rounded-full p-[1vh]">
              <Image
                className={`${
                  music ? "animate-spin" : "animate-spinOff"
                } transition-all ease-in-out h-[3vh] w-[3vh]`}
                alt="MAdoll Logo"
                src={MAcci}
              ></Image>
            </div>
            <div className="p-[1vh]">
              {music ? (
                <Image
                  className="h-[3vh] w-[3vh]"
                  alt="playButton"
                  src={pauseButton}
                  onClick={() => handleMusic()}
                ></Image>
              ) : (
                <Image
                  className="h-[3vh] w-[3vh]"
                  alt="pauseButton"
                  src={playButton}
                  onClick={() => handleMusic()}
                ></Image>
              )}
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default Audio;

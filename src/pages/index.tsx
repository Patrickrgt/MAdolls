import Image from "next/image";
import { Inter } from "next/font/google";
import Landing from "../components/Landing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` ${inter.className}`}
    >
      <Landing />
    </main>
  );
}

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={barlow.className}>
      <Component {...pageProps} />
    </main>
  );
}

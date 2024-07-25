import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Barlow } from "next/font/google";
import Head from "next/head";

const barlow = Barlow({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:title" content="MAdoll" />
        <meta property="og:description" content="This is a generative collection in which MAcci, as an individual creator, challenges NFT's and continues to search of possibilities." />
        <meta property="og:image" content="https://i.imgur.com/VyrNETf.png" />
        <meta property="og:url" content="https://www.madoll.art/" />
        <meta property="og:type" content="website" />
      </Head>
      <main className={barlow.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

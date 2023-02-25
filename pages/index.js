import Head from "next/head";
import Image from "next/image";
import Slider from "../components/Slider/Slider";

export default function Home() {
  return (
    <>
      <Head>
        <title>ifonah | Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <h1 className="text-4xl p-40 text-fuchsia-600">Home</h1>
    </>
  );
}

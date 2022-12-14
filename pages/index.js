import Head from "next/head";
import Image from "next/image";
// import HomePage from "../components/HomePage/HomePage";
import styles from "../styles/Home.module.css";
import Navbar from "./../components/Container/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ifonah | Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1 className="text-4xl p-40 text-fuchsia-600">Home</h1>
    </div>
  );
}

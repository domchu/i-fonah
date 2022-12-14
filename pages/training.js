import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Container/Navbar";
import styles from "../styles/Home.module.css";

export default function Training() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1 className="text-3xl p-40 text-fuchsia-600">Training</h1>
    </div>
  );
}

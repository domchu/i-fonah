import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Container/Navbar";
import styles from "../styles/Home.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>contact</h1>
    </div>
  );
}

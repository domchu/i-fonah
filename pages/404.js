import Head from "next/head";
import Image from "next/image";

export default function Error() {
  return (
    <>
      <Head>
        <title>i-fonah | 404 Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl p-40 text-fuchsia-600">Error 404</h1>
    </>
  );
}

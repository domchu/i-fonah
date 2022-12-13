import "../styles/globals.css";

import Navbar from "../components/Container/Navbar";
import Footer from "./../components/Container/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

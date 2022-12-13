// import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "../component/Container/Navbar";
import Footer from "./../component/Container/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

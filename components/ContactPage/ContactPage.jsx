import React from "react";
import Link from "next/link";
import banner from "../../public/images/contact2.jpg";

const ContactPage = () => {
  return (
    <>
      <div>
        <div
          className="contact-banner"
          style={{
            backgroundImage: `url(${banner.src})`,
            width: "100%",
            height: "70vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1>CONTACT US</h1>

          <Link href="/" passHref>
            HOME
          </Link>
          <Link href="/" passHref>
            MAKE A CALL
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

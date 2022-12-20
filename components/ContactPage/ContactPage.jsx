import React from "react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <>
      <div>
        <div className="contact-banner">
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

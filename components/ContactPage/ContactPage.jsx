import React from "react";
import Link from "next/link";
import banner from "../../public/images/contact2.jpg";

const ContactPage = () => {
  return (
    <>
      <div>
        <div
          className="brightness-50"
          style={{
            backgroundImage: `url(${banner.src})`,
            width: "100%",
            height: "70vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className=""
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "left",
              marginLeft: "20rem",
            }}
          >
            <h1 className="contact-text">CONTACT US</h1>

            <div>
              <Link
                href="/"
                className="contact-btn bg-orange-500 hover:bg-orange-200 hover:animate-bounce hover:text-black "
                passHref
              >
                HOME
              </Link>
              <Link
                href="tel:+234(0) 703 4278 995"
                className="contact-btn bg-orange-500 hover:bg-orange-200 hover:animate-bounce hover:text-black"
                passHref
              >
                MAKE A CALL
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

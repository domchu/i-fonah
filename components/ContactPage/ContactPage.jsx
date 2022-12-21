import React from "react";
import Link from "next/link";
import banner from "../../public/images/contact.jpg";

const ContactPage = () => {
  return (
    <>
      <div>
        <div
          className="brightness-50 h-12"
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
      {/* the form section of the project */}
      <div className="flex-wrap border-x-2 border-y-2 border-solid h-auto flex justify-around mt-16 sm:flex-nowrap ">
        <div className="contact-detail bg-slate-600 text-white flex-wrap pl-d pr-5 h-full w-full">
          <h1 className="text-center text-3xl mt-5">Contact Details</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            sed illo ut quidem molestiae doloribus saepe inventore quam vel
            dolore quos enim asperiores cupiditate tempora repellat architecto
            totam, similique suscipit accusamus dolores porro, ipsa maxime!
            Consectetur, fugit. Qui officia ipsam maiores ullam modi hic laborum
            eveniet ab illum, placeat eaque.
          </p>
        </div>
        <div className="contact-form text-black flex-wrap pl-d pr-5 h-full w-4/5">
          <h1 className="items-center text-left text-3xl mt-5">
            Send A Message
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex
            recusandae harum aliquid cupiditate nulla id perferendis eius
            quisquam nam velit similique asperiores non consectetur rem dolorum
            explicabo facilis porro, deserunt totam? Ad, inventore explicabo
            reprehenderit possimus optio libero commodi sequi blanditiis!
            Voluptate qui modi ut iure, aliquam quia eligendi?
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

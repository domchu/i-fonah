import React from "react";
import Link from "next/link";
import banner from "../../public/images/contact.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GiTimeBomb } from "react-icons/gi";

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
      <div className="flex-wrap border-x-2 border-y-2 border-solid h-auto flex  mt-16 sm:flex-nowrap ">
        <div className="contact-detail bg-slate-600 text-white flex-wrap pl-d pr-5 h-full w-2/5">
          <h1 className="text-center text-3xl mt-5 w-full">Contact Details</h1>
          <div className="bg-white h-1 w-1/5 flex items-center justify-center text-center m-auto mt-2 mb-2"></div>
          <div className="text-center">
            <div className="flex justify-center">
              <FaMapMarkerAlt />
              <h3>
                HeadOffice Address <br />{" "}
                <p> 25 Allen Avenue, Ikeja. Lagos state</p>
              </h3>
            </div>
            <div className="flex justify-center">
              <FaMapMarkerAlt />
              <h3>
                HeadOffice Address <br />{" "}
                <p> 25 Allen Avenue, Ikeja. Lagos state</p>
              </h3>
            </div>
            <div className="flex justify-center">
              <FaMapMarkerAlt />
              <h3>
                HeadOffice Address <br />{" "}
                <p> 25 Allen Avenue, Ikeja. Lagos state</p>
              </h3>
            </div>
            <div className="flex justify-center">
              <FaMapMarkerAlt />
              <h3>
                HeadOffice Address <br />{" "}
                <p> 25 Allen Avenue, Ikeja. Lagos state</p>
              </h3>
            </div>
          </div>
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

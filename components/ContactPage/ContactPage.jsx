import React from "react";
import Link from "next/link";
import banner from "../../public/images/contact.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GiTimeBomb } from "react-icons/gi";
import { RxEnvelopeClosed } from "react-icons/rx";

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
        <div className="contact-detail bg-black text-white flex-wrap pl-d pr-5 h-full w-full">
          <h1 className=" text-3xl mt-5 w-full">Contact Details</h1>
          <div className="bg-gray-500 h-1 w-1/5 my-6"></div>
          <div className="">
            <div>
              <div>
                <FaMapMarkerAlt className="text-4xl grid place-items-center" />
                <h3>HeadOffice Address </h3>
                <p> 25 Allen Avenue, Ikeja. Lagos state</p>
              </div>
            </div>
            <div className="bg-gray-500 h-1 w-1/5 my-6"></div>
            <div className="">
              <h3>
                <FiPhoneCall className="text-4xl" />
                HeadOffice Address
              </h3>
              <p> 25 Allen Avenue, Ikeja. Lagos state</p>
            </div>
            <div className="bg-gray-500 h-1 w-1/5 my-6"></div>
            <div className="">
              <GiTimeBomb className="text-4xl" />
              <h3>HeadOffice Address</h3>
              <p> 25 Allen Avenue, Ikeja. Lagos state</p>
            </div>
            <div className="bg-gray-500 h-1 w-1/5 my-6"></div>
            <div className="">
              <RxEnvelopeClosed className="text-4xl" />
              <h3> HeadOffice Address</h3>
              <p> 25 Allen Avenue, Ikeja. Lagos state</p>
            </div>
          </div>
        </div>
        <div className="contact-form text-black flex-wrap pl-d pr-5 h-full w-4/5">
          <div>
            <h1 className="items-center text-left text-3xl mt-5">
              Send A Message
            </h1>
            <p>
              your email address will not be published. Required fills are
              marked with *
            </p>
            <div>
              <input type="text" name="name" placeholder="Name.......*" />
              <input type="text" name="name" placeholder="Email.......*" />
            </div>
            <div>
              <input type="text" name="name" placeholder="Subject.......*" />
            </div>
          </div>
          <div className="">
            <textarea
              name=""
              placeholder="Your Message....."
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button
            type="submit"
            className="p-4 m-4 text-white bg-orange-500 rounded-md hover:animate-bounce hover:bg-orange-300 hover:text-black delay-100 ease-in-out"
          >
            SEND MESSAGE
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

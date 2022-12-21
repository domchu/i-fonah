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
            className="md:grid md:place-items-center"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h1 className="contact-text lg:mt-20">CONTACT US</h1>

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
      <div className="flex-wrap border-x-4 border-y-4 border-solid h-auto flex  mt-16 sm:flex-nowrap lg:m-x-8">
        <div className="contact-detail bg-black text-white flex-wrap pr-5 h-full w-full">
          <h1 className=" text-3xl mt-5 w-full grid place-items-center">
            Contact Details
          </h1>
          <div className="bg-gray-500 h-1 w-1/5 my-6  items-center flex justify-center m-auto"></div>
          <div>
            <div className="contact-details">
              <FaMapMarkerAlt className="contact-icons" />
              <h3 className="my-2 text-xl md:text-2xl">HeadOffice Address </h3>
              <p className="text-xl"> 25 Allen Avenue, Ikeja. Lagos state</p>
            </div>
            <div className="bg-gray-500 h-1 w-1/5 my-6 items-center flex justify-center m-auto"></div>
            <div className="contact-details">
              <FiPhoneCall className="contact-icons" />
              <h3 className="my-2 text-xl md:text-2xl">For Rental Support</h3>
              <p className="text-xl"> +234 7034278995 / +234 80110998914</p>
            </div>
            <div className="bg-gray-500 h-1 w-1/5 my-6  items-center flex justify-center m-auto"></div>
            <div className="contact-details">
              <GiTimeBomb className="contact-icons" />
              <h3 className="my-2 text-xl md:text-2xl">The Office Hours</h3>
              <p className="text-xl"> Mon-Fri 09:00 - 18:00</p>
            </div>
            <div className="bg-gray-500 h-1 w-1/5 my-6  items-center flex justify-center m-auto"></div>
            <div className="contact-details mb-8">
              <RxEnvelopeClosed className="contact-icons" />
              <h3 className="my-2 text-xl md:text-2xl"> Send Us Email</h3>
              <p className="text-xl"> ochu.dominic.onah@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact-form text-black flex-wrap ml-6 pl-d pr-5 h-full w-full">
          <div>
            <h1 className="items-center text-center text-3xl mt-5">
              Send A Message
            </h1>
            <div className="bg-black text-center m-auto h-1 w-2/5 my-6 md:w-1/5"></div>
            <p className="text-2xl capitalize">
              your email address will not be published. Required fills are
              marked with *
            </p>
            <div>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name.......*"
                  className="pl-6 p-3 mt-4 mb-2  border-x-2 border-y-2 border-solid w-4/5 font-bold text-lg"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Email.......*"
                  className="pl-6 p-3 mt-4 mb-2 border-x-2 border-y-2 border-solid w-4/5 font-bold text-lg"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Subject.......*"
                className="pl-6 p-3 mt-4 mb-2 border-x-2 border-y-2 border-solid w-4/5 font-bold text-lg"
              />
            </div>
          </div>
          <div>
            <textarea
              className="mt-2 pl-6 pt-6 font-bold border-x-2 border-y-2 border-solid w-4/5 text-lg"
              name=""
              placeholder="Your Message....."
              cols="30"
              rows="7"
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

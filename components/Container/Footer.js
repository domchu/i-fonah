import React from "react";
import Link from "next/link";
// import SocialIcons from "../SocialData";
import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className=" block md:flex justify-evenly p-8 text-white bg-black text-2xl">
        <div>
          <h1 className="py-4 text-3xl">
            IFON<span className="text-orange-400">TECH</span>
          </h1>
        </div>
        <div>
          <h1 className="py-4 text-3xl">Main Office</h1>
          <div>
            <div className="flex ">
              <div>
                <h4 className="text-orange-400">Address </h4>
              </div>
              <div>
                <p className="py-2 text-xs pl-2">
                  25 Allen Avenue, Ikeja. Lagos state
                </p>
              </div>
            </div>
            <div className="flex py-2 ">
              <div>
                <h4 className="text-orange-400">Contact </h4>
              </div>
              <div>
                <p className="py-2 text-xs pl-2">+234(0) 703 4278 995</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="py-4 text-3xl">Useful Links</h1>
          <ul>
            <li className="footer-links ">
              <Link href="/services" passHref>
                Our Services
              </Link>
            </li>
            <li className="footer-links ">
              <Link href="/" passHref>
                Our Team
              </Link>
            </li>
            <li className="footer-links">
              <Link href="/" passHref>
                Portfolio
              </Link>
            </li>
            <li className="footer-links">
              <Link href="/" passHref>
                Short Codes
              </Link>
            </li>
            <li className="footer-links">
              <Link href="/" passHref>
                Topography
              </Link>
            </li>
            <li className="footer-links ">
              <Link href="/" passHref>
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="py-3 text-3xl">Social Media Handler</h1>
          {/* {SocialIcons.map((item, index) => {
            const { url, icon } = item;
            return (
              <li key={index}>
                <a href={url}>{icon} </a>
                <Link href={url} passHref>
                  {icon}
                </Link>
              </li>
            );
          })} */}
          <ul className="flex gap-2 pt-3">
            <li className="hover:text-orange-400 hover:animate-bounce text-xm delay-75 hover:border-x-2 hover:border-y-2">
              <a href="https://www.twitter.com">
                <FaLinkedin />
              </a>
            </li>
            <li className="hover:text-orange-400 hover:animate-bounce text-xm delay-75 hover:border-x-2 hover:border-y-2">
              <a href="https://www.twitter.com">
                <FaFacebook />
              </a>
            </li>
            <li className="hover:text-orange-400 hover:animate-bounce text-xm delay-75 hover:border-x-2 hover:border-y-2">
              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>
            </li>
            <li className="hover:text-orange-400 hover:animate-bounce text-xm delay-75 hover:border-x-2 hover:border-y-2">
              <a href="https://www.twitter.com">
                <FaWhatsapp />
              </a>
            </li>
            <li className=" hover:text-orange-400 hover:animate-spin text-xm delay-75 hover:border-x-2 hover:border-y-2">
              <a href="https://www.twitter.com">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="underline"></div>
      <div className="footer">
        <p className="footer-text">IfonTech &copy;2022, All Right Reserved</p>
      </div>
    </>
  );
};

export default Footer;

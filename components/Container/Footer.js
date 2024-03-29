import React from "react";
import Link from "next/link";
import socialIcons from "../SocialData";

const Footer = () => {
  return (
    <>
      <div className=" block md:flex justify-evenly p-8 text-white bg-black text-2xl">
        <div>
          <h1 className="py-4 text-4xl">
            ARO<span className="text-orange-400">NOX</span>
          </h1>
        </div>
        <div>
          <h1 className="py-4 text-4xl">Main Office</h1>
          <div>
            <div className="flex ">
              <div>
                <h4 className="text-orange-400">Address </h4>
              </div>
              <div>
                <p className="py-2 text-sm pl-2">
                  25 Allen Avenue, Ikeja. Lagos state
                </p>
              </div>
            </div>
            <div className="flex py-2 ">
              <div>
                <h4 className="text-orange-400">Contact </h4>
              </div>
              <div>
                <p className="py-2 text-sm pl-2">+234(0) 703 4278 995</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="py-4 text-4xl">Useful Links</h1>
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
          <h1 className="py-3 text-4xl">Social Media Handler</h1>
          <div className="flex gap-4 pt-3">
            {socialIcons.map((item, index) => {
              const { url, icon } = item;
              return (
                <>
                  <ul>
                    <li
                      key={index}
                      className="hover:text-orange-400 hover:animate-bounce text-xm delay-200"
                    >
                      <Link href={url} passHref>
                        {icon}
                      </Link>
                    </li>
                  </ul>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="underline"></div>
      <div className="footer">
        <p className="footer-text">
          &copy; 2022 Aronox, All Right Reserved | Power by Aronox Software
          Enginering Company
        </p>
      </div>
    </>
  );
};

export default Footer;

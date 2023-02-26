import React from "react";
import Image from "next/image";
import contact2 from "../../public/images/contact2.jpg";

const AboutUs = () => {
  return (
    <>
      <div classNmae="about-us">
        <div className="title">
          <h2>ABOUT US</h2>
        </div>
        <div>
          <h1>We're Delivering Only exceptional Qualify Work</h1>
        </div>
        <div className="about-us-container">
          <div>
            <Image src={contact2} alt="about us" width={500} height={450} />
          </div>
          <div>
            <p>
              we are formed from extensive experience in innovation and digital
              transformation. we worked mainly in the creation of digital
              solution and product based on new technologies in an open
              innovation model.
            </p>
            <br />
            <p>
              Our team of creative and technologies geeks think and work
              differently.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;

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
        </div>
      </div>
    </>
  );
};
export default AboutUs;

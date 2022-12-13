// import React from "react";
// import Link from "next/link";
// import { AiOutlineMenuUnfold } from "react-icons/ai";

// const Navbar = () => {
//   return (
//     <div
//       className="flex justify-between align-center color-#fff text-white h-20 items-center text-2xl bg-black"

//     >
//       <div>
//         <Link href="/" className="pl-8" passHref>
//           Logo
//         </Link>
//         <div className="px-4 cursor-pointer md:hidden">
//           <AiOutlineMenuUnfold />
//         </div>
//       </div>
//       <div className="pr-8 md:block hidden">
//         <div>
//           <Link href="/" className="p-4" passHref>
//             Home
//           </Link>
//           <Link href="/about" className="p-4" passHref>
//             About
//           </Link>
//           <Link href="/blog" className="p-4" passHref>
//             Blog
//           </Link>
//           <Link href="/services" className="p-4" passHref>
//             Services
//           </Link>
//         </div>
//       </div>
//       <div>
//         <Link href="/contact" className="p-4" passHref>
//           Contact
//         </Link>
//       </div>
//     </div>
//     //the headings are of two type
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  //dark mode initialization
  const [color, setColor] = useState("black");
  const [textColor, setTextColor] = useState("white");

  const handleMenu = () => {
    setMenu(!menu);
  };

  //dark mode
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#000");
        setTextColor("#fff");
      } else {
        setColor("transparent");
        setTextColor("#fff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/" passHref>
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            IFONAH
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className=" hidden sm:flex">
          <li className="p-4 text-2xl  hover:text-gray-500">
            <Link href="/" passHref>
              Home
            </Link>
          </li>
          <li className="p-4 text-2xl  hover:text-gray-500">
            <Link href="/#about" passHref>
              About
            </Link>
          </li>
          <li className="p-4 text-2xl  hover:text-gray-500">
            <Link href="/blog" passHref>
              Blog
            </Link>
          </li>
          <li className="p-4 text-2xl  hover:text-gray-500">
            <Link href="/services" passHref>
              Services
            </Link>
          </li>
        </ul>
        <li className="p-4 text-2xl  hover:text-gray-500">
          <Link href="/contact" passHref>
            Contact
          </Link>
        </li>
        {/* mobile button */}
        <div
          onClick={handleMenu}
          className="block sm:hidden z-10 cursor-pointer"
        >
          <h1>Menu</h1>
          {menu ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* mobile menu */}
        <div
          className={
            menu
              ? "sm:hidden absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute left-[-100%] top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleMenu}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li
              onClick={handleMenu}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#about" passHref>
                About
              </Link>
            </li>
            <li
              onClick={handleMenu}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/Blog" passHref>
                Blog
              </Link>
            </li>
            <li
              onClick={handleMenu}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/Blog" passHref>
                Services
              </Link>
            </li>
            <li
              onClick={handleMenu}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact" passHref>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

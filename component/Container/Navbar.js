import React from "react";
import Link from "next/link";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="bg-#000 h-60px flex justify-between align-center">
      <div>
        <Link href="/" className="pl-8" passHref>
          Logo
        </Link>
        <div className="px-4 cursor-pointer md:hidden">
          <AiOutlineMenuUnfold />
        </div>
      </div>
      <div className="pr-8 md:block hidden">
        <div>
          <Link href="/" className="p-4" passHref>
            Home
          </Link>
          <Link href="/about" className="p-4" passHref>
            About
          </Link>
          <Link href="/blog" className="p-4" passHref>
            Blog
          </Link>
          <Link href="/services" className="p-4" passHref>
            Services
          </Link>
        </div>
        <div>
          <Link href="/contact" className="p-4" passHref>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex justify-evenly p-8 text-white bg-black  text-2xl ">
        <div>
          <h1 className="py-4 text-3xl">i-fonah</h1>
        </div>
        <div>
          <h1 className="py-4 text-3xl">Main Office</h1>
          <div>
            <p className="py-2 text-xs">
              Address : 25 Allen Avenue, Ikeja. Lagos state
            </p>
            <h3 className="text-xs">Contact : +234(0) 703 4278 995</h3>
          </div>
        </div>
        <div>
          <h1 className="py-4 text-3xl">Useful Links</h1>
          <ul>
            <li className="hover:text-orange-200 py-2 text-xs">
              <Link href="/" className="un-list" passHref>
                Our Services
              </Link>
            </li>
            <li className="hover:text-orange-200 py-2 text-xs">
              <Link href="/" className="un-list" passHref>
                Our Team
              </Link>
            </li>
            <li className="hover:text-orange-200 py-2 text-xs">
              <Link href="/" className="un-list" passHref>
                Portfolio
              </Link>
            </li>
            <li className="hover:text-orange-200 py-2 text-xs">
              <Link href="/" className="un-list" passHref>
                Short Codes
              </Link>
            </li>
            <li className="hover:text-orange-200 py-2 text-xs">
              <Link href="/" className="un-list" passHref>
                Topography
              </Link>
            </li>
            <li className="hover:text-orange-200 py-2 text-xs">
              <Link href="/" className="un-list" passHref>
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="py-4 text-3xl">Social Media</h1>
        </div>
      </div>
      <div className="footer">
        <p className="h-20 text-xl text-black flex justify-center items-center">
          i-fonah &copy;2022 All Right Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;

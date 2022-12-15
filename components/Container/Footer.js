import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div>
        <div>
          <h1>i-fonah</h1>
        </div>
        <div>
          <h1>Main Office</h1>
          <div>
            <p>25 Allen Avenue, Ikeja. Lagos state</p>
            <h3>Contact: +234(0) 703 4278 995</h3>
          </div>
        </div>
        <div>
          <h1>Useful Links</h1>
          <ul>
            <li>
              <Link href="/" className="un-list" passHref>
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/" className="un-list" passHref>
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/" className="un-list" passHref>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/" className="un-list" passHref>
                Short Codes
              </Link>
            </li>
            <li>
              <Link href="/" className="un-list" passHref>
                Topography
              </Link>
            </li>
            <li>
              <Link href="/" className="un-list" passHref>
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
      <div className="footer">
        <p className="h-20 text-2xl text-black flex justify-center items-center">
          i-fonah &copy;2022 All Right Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;

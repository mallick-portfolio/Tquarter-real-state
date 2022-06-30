import Image from "next/image";
import logo from "../../public/images/logo-2.png";
import { ImLocation2 } from "react-icons/im";
import { BiPhoneCall } from "react-icons/bi";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
const FooterFirstCol = () => {
  return (
    <div>
      <Image src={logo} alt="footer logo" />
      <p className="mt-3 text-base font-normal">
        Lorem Ipsum is simply dummy text of the and typesetting industry.
      </p>
      <div className="py-4 text-base">
        <div className="flex items-start justify-start my-2">
          <FaMapMarkerAlt className="mt-1" />
          <p className="ml-4 my-0 py-0">Brooklyn, New York, United States</p>
        </div>
        <div className="flex items-start justify-start my-2">
          <BiPhoneCall className="mt-1" />
          <p className="ml-4 my-0 py-0">+0123-456789</p>
        </div>
        <div className="flex items-start justify-start my-2">
          <FaEnvelope className="mt-1" />
          <p className="ml-4 my-0 py-0">example@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <FaFacebookF className="cursor-pointer" />
        <FaTwitter className="cursor-pointer" />
        <FaLinkedinIn className="cursor-pointer" />
        <FaYoutube className="cursor-pointer" />
      </div>
    </div>
  );
};

export default FooterFirstCol;

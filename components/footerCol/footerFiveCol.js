import Image from "next/image";
import { IoIosPaperPlane } from "react-icons/io";
import payment from "../../public/images/payment-4.png";
const FooterFiveCol = () => {
  return (
    <div>
      <h1 className="text-2xl mb-4 font-bold mt-2">Newsletter</h1>
      <p className="text-base font-normal">
        Subscribe to our weekly Newsletter and receive updates via email.
      </p>
      <div className="py-4 text-base relative">
        <input
          type="text"
          className="focus:outline-none  py-3 pl-3 text-primary"
          placeholder="Email*"
        />
        <span className="absolute top-4 -right-1 h-12 w-14 py-4 bg-secondary">
          <IoIosPaperPlane className="text-center ml-4 text-base" />
        </span>
      </div>
      <div className="text-base">
        <p className="text-xl mb-3 font-bold">We Accept</p>
        <Image src={payment} alt={"Payment"} />
      </div>
    </div>
  );
};

export default FooterFiveCol;

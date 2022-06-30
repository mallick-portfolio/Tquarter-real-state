import FooterFirstCol from "../footerCol/footerFirstCol.js";
import FooterFiveCol from "../footerCol/footerFiveCol.js";
import FooterFourCol from "../footerCol/footerFourCol.js";
import FooterSecondCol from "../footerCol/footerSecondCol.js";
import FooterThirdCol from "../footerCol/footerThirdCol.js";
const Footer = () => {
  return (
    <>
      <div className="mx-24 -mb-24 z-50 px-12 py-12 relative flex justify-between items-center text-white bg-secondary">
        <div>
          <h3 className="text-4xl font-bold mb-3">Looking for a dream home?</h3>
          <p>We can help you realize your dream of a new home</p>
        </div>
        <div>
          <button
            className="btn2 px-12 py-4 relative bg-white uppercase  tracking-wider leading-none text-primary overflow-hidden"
            type="button"
          >
            <span className="absolute inset-0 bg-black"></span>
            <span className="absolute inset-0 flex justify-center items-center hover:text-white">
              Explore propertise
            </span>
            Explore propertise
          </button>
        </div>
      </div>
      <footer className="bg-[#171B2A] text-white pb-24 pt-32 relative">
        <div className="grid grid-cols-5 px-10 mx-auto gap-4">
          <div>
            <FooterFirstCol />
          </div>
          <div>
            <FooterSecondCol />
          </div>
          <div>
            <FooterThirdCol />
          </div>
          <div>
            <FooterFourCol />
          </div>
          <div>
            <FooterFiveCol />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

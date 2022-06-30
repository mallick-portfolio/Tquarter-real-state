import FooterFirstCol from "../footerCol/footerFirstCol.js";
import FooterFourCol from "../footerCol/footerFourCol.js";
import FooterSecondCol from "../footerCol/footerSecondCol.js";
import FooterThirdCol from "../footerCol/footerThirdCol.js";
const Footer = () => {
  return (
    <footer className="bg-[#171B2A] text-white py-24">
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
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;

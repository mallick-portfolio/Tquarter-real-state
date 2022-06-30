import FooterFirstCol from "../footerCol/footerFirstCol.js";
import FooterSecondCol from "../footerCol/footerSecondCol.js";
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
        <div></div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;

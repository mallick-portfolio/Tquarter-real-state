import FooterFirstCol from "../footerCol/footerFirstCol.js";
const Footer = () => {
  return (
    <footer className="bg-[#171B2A] text-white py-24">
      <div className="grid grid-cols-5 container mx-auto">
        <div>
          <FooterFirstCol />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;

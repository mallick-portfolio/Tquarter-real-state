import Image from "next/image.js";
import Logo from "../../public/images/logo.png";
const Header = () => {
  return (
    <div className=" py-5 bg-white">
      <navbar className="flex justify-between items-center container mx-auto">
        <div>
          <Image src={Logo} alt={"Logo"} />
        </div>
        <nav>
          <ul className="flex items-center text-lg">
            <li className="px-5 py-2 text-primary font-semibold">
              <a href="">Home</a>
            </li>
            <li className="px-5 py-2 text-primary font-semibold">
              <a href="">About</a>
            </li>
            <li className="px-5 py-2 text-primary font-semibold">
              <a href="">Shop</a>
            </li>
            <li className="px-5 py-2 text-primary font-semibold">
              <a href="">News</a>
            </li>
            <li className="px-5 py-2 text-primary font-semibold">
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </navbar>
    </div>
  );
};

export default Header;

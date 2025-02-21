import PropTypes from "prop-types";
import socialnature from "../image/Logo.jpg";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = ({ toggleMenu }) => {
  return (
    <nav className="flex justify-between items-center h-16 mx-0 xl:mx-8 2xl:mx-80 bg-white font-karla font-normal text-[#5D5D5D] ">
      <div className="w-full lg:w-auto px-3 lg:px-5">
        <img
          className="lg:w-[199px] h-[29px] mb-3.5 cursor-pointer "
          src={socialnature}
          alt="Loading socialnature"
        />
      </div>

      <div className="hidden lg:block text-sm w-full">
        <Link to="/TryProducts" className="hover:text-[#5D5D5D]/75 px-5">
          Try Products
        </Link>
        <Link to="/Launchpad" className="hover:text-[#5D5D5D]/75 px-5">
          Launchpad
        </Link>
        <Link to="/HowItWorks" className="hover:text-[#5D5D5D]/75 px-5">
          How It Works
        </Link>
        <Link to="/OurMission" className="hover:text-[#5D5D5D]/75 px-5">
          Our Mission
        </Link>
      </div>

      <div className="flex">
        <div className="px-0 lg:px-5 lg:py-2.5">
          <button className="bg-[#37c0c0] bg-gradient-to-b from-[#d1239d] to-[#e42748] hover:bg-gradient-to-tl text-white font-medium rounded text-sm text-nowrap px-4 py-1.5 ">
            SIGN UP
          </button>
        </div>
        <div className="px-0 lg:px-5 lg:py-2.5 flex items-center ">
          <a
            href="#Login"
            className="text-sm hover:text-[#5D5D5D]/75 hidden lg:block"
          >
            Login
          </a>
        </div>
        <div
          className="px-[13px] cursor-pointer flex items-center lg:hidden"
          onClick={toggleMenu}
        >
          <FiMenu className="w-6 h-6 " />
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default Navbar;

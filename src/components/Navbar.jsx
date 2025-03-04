import PropTypes from "prop-types";
import socialnature from "../image/Logo.jpg";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = ({ toggleMenu }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 px-4 py-4 h-[60px] z-50 flex justify-center bg-white font-karla font-normal text-[#111111] ">
      <div className="flex justify-between items-center w-full lg:max-w-[1200px] h-full lg:px-4">
        <div className="flex items-center">
          <img
            className="max-w-[140px] h-auto mb-3.5 cursor-pointer "
            src={socialnature}
            alt="Loading socialnature"
          />
          <div className="hidden lg:block text-sm/[16px]">
            <Link to="/TryProducts" className="hover:text-[#5d5d5d]/75 px-5">
              Try Products
            </Link>
            <Link to="/Launchpad" className="hover:text-[#5d5d5d]/75 px-5">
              Launchpad
            </Link>
            <Link to="/HowItWorks" className="hover:text-[#5d5d5d]/75 px-5">
              How It Works
            </Link>
            <Link to="/OurMission" className="hover:text-[#5d5d5d]/75 px-5">
              Our Mission
            </Link>
          </div>
        </div>

        <div className="flex">
          <div className="px-0 lg:px-5 lg:py-2.5">
            <button className="bg-[#37c0c0] bg-gradient-to-br from-[#e42748] to-[#d1239d] hover:bg-gradient-to-tl text-white font-medium rounded text-sm text-nowrap px-4 py-1.5 ">
              SIGN UP
            </button>
          </div>
          <div className="px-0 lg:px-5 lg:py-2.5 flex items-center ">
            <a
              href="#Login"
              className="text-sm hover:text-[#5d5d5d]/75 hidden lg:block"
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
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default Navbar;

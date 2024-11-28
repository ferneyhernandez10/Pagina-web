import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MobileNavbar = ({ mobileMenuToggle }) => {
  return (
    <div
      className="grid grid-rows-3 text-left items-center text-sm bg-white font-karla font-normal text-[#5D5D5D] "
      onClick={mobileMenuToggle}
    >
      <Link to="/sign-in" className="hover:text-[#5D5D5D]/75 px-3 py-3.5 ">
        Sign Up
      </Link>
      <Link to="/sign-in" className="hover:text-[#5D5D5D]/75 px-3 py-3.5 ">
        Login
      </Link>
      <Link to="/Tryproducts" className="hover:text-[#5D5D5D]/75 px-3 py-3.5 ">
        Try Products
      </Link>
      <Link to="/launchpad" className="hover:text-[#5D5D5D]/75 px-3 py-3.5 ">
        Launchpad
      </Link>
      <Link to="/HowItWorks" className="hover:text-[#5D5D5D]/75 px-3 py-3.5 ">
        How It Works
      </Link>
      <Link to="/OurMission" className="hover:text-[#5D5D5D]/75 px-3 py-3.5 ">
        Our Mission
      </Link>
    </div>
  );
};

MobileNavbar.propTypes = {
  mobileMenuToggle: PropTypes.func.isRequired,
};

export default MobileNavbar;

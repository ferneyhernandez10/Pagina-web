import PropTypes from "prop-types";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const hiddenMenu = () => {
      if (window.innerWidth > 1023 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", hiddenMenu);

    return () => {
      window.removeEventListener("resize", hiddenMenu);
    };
  });

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="h-screen">
      <Navbar toggleMenu={toggleMenu} />
      {isMobileMenuOpen && <MobileNavbar mobileMenuToggle={toggleMenu} />}
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;

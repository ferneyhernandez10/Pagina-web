import PropTypes from "prop-types";

const FooterSection = ({
  title,
  children,
  uppercase = false,
  className = "",
}) => {
  return (
    <div className={`h-full px-[15px] mb-8 md:mb-0 ${className}`}>
      <h5
        className={`mt-[2.8px] mb-[18px] font-Montserrat text-base/[22.4px] font-semibold tracking-[1px] ${
          uppercase ? "uppercase" : ""
        }`}
      >
        {title}
      </h5>
      {children}
    </div>
  );
};

FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  uppercase: PropTypes.bool,
  className: PropTypes.string,
};

export default FooterSection;

import PropTypes from "prop-types";

const FooterLinkList = ({ links }) => {
  return (
    <ul className="md:mb-5 leading-[22.4px]">
      {links.map((link, index) => (
        <li
          key={index}
          className="mb-1 font-karla text-sm/[22.4px] font-normal cursor-pointer"
        >
          {link}
        </li>
      ))}
    </ul>
  );
};

FooterLinkList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FooterLinkList;

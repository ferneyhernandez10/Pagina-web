import PropTypes from "prop-types";

const Title = ({ text }) => {
  return (
    <h2 className="font-Montserrat mt-[2.8px] mb-[7px] text-2xl md:text-[32px]/[40px] font-bold text-[#333333]">
      {text}
    </h2>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;

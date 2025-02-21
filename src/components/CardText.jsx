import PropTypes from "prop-types";

const CardText = ({ title, subtitle, isCardProducts }) => {
  return (
    <div className={`font-karla text-base font-normal text-[#5D5D5D] px-2 md:px-4 pt-2 md:pt-4 pb-[3px] md:pb-2 ${isCardProducts ? "h-[99px]" : "h-[107px]" } lg:h-auto`}>
      <div>
        <span className="text-sm font-normal">{title}</span>
      </div>

      {/* <div className="h-12 lg:h-auto "> */}
      <div>
        <span className="text-base/[20px] font-bold">{subtitle}</span>
      </div>
    </div>
  );
};

CardText.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  isCardProducts: PropTypes.bool,
};

export default CardText;

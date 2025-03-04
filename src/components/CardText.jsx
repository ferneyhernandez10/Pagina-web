import PropTypes from "prop-types";

const CardText = ({ title, subtitle }) => {
  return (
    <>
      <div>
        <span className="text-sm font-normal">{title}</span>
      </div>

      <div>
        <span className="text-base/[20px] font-bold">{subtitle}</span>
      </div>
    </>
  );
};

CardText.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default CardText;

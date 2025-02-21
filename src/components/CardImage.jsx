import PropTypes from "prop-types";

const CardImage = ({ centerImage }) => {
  return (
    <div className="px-4 pt-10 pb-4 rounded-xl border-solid border-b-4 border-slate-100">
      <img
        className="max-w-full h-auto"
        src={centerImage}
        alt="Card center image"
      />
    </div>
  );
};

CardImage.propTypes = {
  centerImage: PropTypes.string.isRequired,
};

export default CardImage;

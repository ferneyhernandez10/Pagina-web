import PropTypes from "prop-types";

const CardImage = ({ image }) => {
  return (
    <div className="px-4 pt-10 pb-4 rounded-xl border-slate-100">
      <img className="max-w-full h-auto" src={image} alt="Card center image" />
    </div>
  );
};

CardImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default CardImage;

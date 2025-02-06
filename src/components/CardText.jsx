import PropTypes from "prop-types";

const CardText = ({ product }) => {
  return (
    <div className="font-karla text-base font-normal text-[#5D5D5D] px-2 md:px-4 pt-2 md:pt-4 pb-[3px] md:pb-2">
      <div>
        <span className="text-sm font-normal">{product.title}</span>
      </div>

      <div className="h-12 md:h-auto">
        <span className="text-base/[20px] font-bold">{product.subtitle}</span>
      </div>
    </div>
  );
};

CardText.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CardText;

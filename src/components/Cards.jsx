import PropTypes from "prop-types";

const Cards = ({ pagedProducts, Component }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {pagedProducts.map((product, index) => (
        <Component key={index} {...product} />
      ))}
    </div>
  );
};

Cards.propTypes = {
  pagedProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  Component: PropTypes.elementType.isRequired,
};

export default Cards;

import PropTypes from "prop-types";

const Cards = ({ pagedProducts, Component }) => {
  return (
    <div className="-mx-4 px-2 md:px-0 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {pagedProducts.map((product, id) => (
        <Component key={id} {...product} />
      ))}
    </div>
  );
};

Cards.propTypes = {
  pagedProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  Component: PropTypes.elementType.isRequired,
};

export default Cards;

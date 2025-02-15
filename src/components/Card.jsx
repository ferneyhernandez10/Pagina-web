import PropTypes from "prop-types";

const Card = ({ children }) => {
  return <>{children}</>;
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;

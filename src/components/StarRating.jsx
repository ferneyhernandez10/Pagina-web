import PropTypes from "prop-types";
import { IoIosStar } from "react-icons/io";

const StarRating = ({ className }) => {
  const baseStyles = "flex gap-x-[3px] text-[#ffb624]";
  const styles = `${baseStyles} ${className || ""}`;
  return (
    <div className={styles}>
      {[...Array(5)].map((_, id) => (
        <IoIosStar key={id} className="w-full max-w-4 max-h-4" />
      ))}
    </div>
  );
};

StarRating.propTypes = {
  className: PropTypes.string,
};

export default StarRating;

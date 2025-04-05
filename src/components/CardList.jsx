import PropTypes from "prop-types";

const CardList = ({ src, title }) => {
  return (
    <div className="w-1/2 md:w-full p-2 md:p-4">
      <div className="bg-white max-w-full h-full rounded-lg border-2 border-solid border-transparent shadow-soft md:shadow-custom hover:border-[#cccccc] ">
        <div className="flex flex-col items-center px-2 pt-2 pb-[3px] md:px-4 md:pt-4 md:pb-2 ">
          <div className="m-[3px] md:m-2">
            <img src={src} alt={title} />
          </div>
          <h3 className="w-full font-Montserrat font-bold text-base md:text-2xl text-center ">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

CardList.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CardList;

import PropTypes from "prop-types";
import { FcLike } from "react-icons/fc";

const CardTextAndSmallImages = ({ texto1, texto2, smallImages }) => {
  return (
    <div className="px-2 md:px-4 pb-2 md:pb-4">
      <div className="flex font-karla text-base font-normal text-[#333333]">
        <div className="lg:w-6 lg:h-6 flex justify-center">
          <FcLike />
        </div>
        <span className="text-sm">
          <span className="mx-[3.5px]">{texto1}</span>
          <span>{texto2}</span>
        </span>
      </div>

      <div className="pt-2 md:pt-4">
        {Array.isArray(smallImages) ? (
          <div className="flex">
            {smallImages.map((img, index) => (
              <img
                key={index}
                className="w-[26px] md:w-8 h-[26px] md:h-8 rounded-sm"
                src={img}
                alt="Card small images"
              />
            ))}
          </div>
        ) : (
          <img
            className="w-[26px] md:w-8 h-[26px] md:h-8 rounded-sm"
            src={smallImages}
            alt="Card small images"
          />
        )}
      </div>
    </div>
  );
};

CardTextAndSmallImages.propTypes = {
  texto1: PropTypes.string.isRequired,
  texto2: PropTypes.string.isRequired,
  smallImages: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
    .isRequired,
};

export default CardTextAndSmallImages;

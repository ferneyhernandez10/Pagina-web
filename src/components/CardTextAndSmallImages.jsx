import PropTypes from "prop-types";

const CardTextAndSmallImages = ({
  icon,
  isCardProducts,
  texto1,
  texto2,
  smallImages,
}) => {
  return (
    <div className="px-2 md:px-4 pb-2 md:pb-4">
      <div
        className={`${
          isCardProducts ? "flex" : "flex items-center "
        } font-karla text-base font-normal text-[#333333]`}
      >
        {icon && <div className="flex max-w-full h-full mr-[5px] ">{icon}</div>}
        <span className="text-sm">
          <span className="mx-[3.5px]">{texto1}</span>
          <span>{texto2}</span>
        </span>
      </div>

      {smallImages && (
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
      )}
    </div>
  );
};

CardTextAndSmallImages.propTypes = {
  icon: PropTypes.node,
  isCardProducts: PropTypes.bool,
  texto1: PropTypes.string.isRequired,
  texto2: PropTypes.string.isRequired,
  smallImages: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default CardTextAndSmallImages;

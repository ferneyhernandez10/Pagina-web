import PropTypes from "prop-types";
import Card from "./Card";
import CardImage from "./CardImage";
import CardText from "./CardText";
import CardTextAndSmallImages from "./CardTextAndSmallImages";

const CardProducts = ({
  topText,
  centerImage,
  title,
  subtitle,
  texto1,
  texto2,
  smallImages,
}) => {
  return (
    <Card>
      <div className="p-2 md:p-4">
        <div className="rounded-lg border-2 border-white border-solid hover:border-[#cccccc]">
          <div className="w-full h-full rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer">
            <div className="relative w-full h-full">
              <div
                className="absolute top-3 left-0 flex items-center w-auto h-6 md:h-[34px] px-2 md:px-4 mb-2 bg-right bg-no-repeat bg-cover"
                style={{
                  backgroundImage:
                    "url(https://www.socialnature.com/images/badge-pink.svg)",
                }}
              >
                <span className="w-full h-full font-karla text-xs/[24px] lg:text-sm/[24px] font-bold text-white uppercase text-nowrap flex items-center">
                  {topText}
                </span>
              </div>

              <CardImage centerImage={centerImage} />

              <CardText title={title} subtitle={subtitle} />

              <CardTextAndSmallImages
                texto1={texto1}
                texto2={texto2}
                smallImages={smallImages}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

CardProducts.propTypes = {
  topText: PropTypes.string.isRequired,
  centerImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  texto1: PropTypes.string.isRequired,
  texto2: PropTypes.string.isRequired,
  smallImages: PropTypes.node,
};

export default CardProducts;

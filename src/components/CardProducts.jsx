import PropTypes from "prop-types";
import Card from "./Card";
import CardImage from "./CardImage";
import CardText from "./CardText";
import CardTextAndSmallImages from "./CardTextAndSmallImages";
import { FcLike } from "react-icons/fc";

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
        <div className="rounded-lg border-2 border-white border-solid hover:border-[#cccccc] h-full">
          <div className="w-full h-full rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer">
            <div className="relative w-full h-full flex flex-col ">
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

              <div className="font-karla text-base font-normal text-[#5D5D5D] px-2 md:px-4 pt-2 md:pt-4 pb-[3px] md:pb-2 flex-grow flex-shrink-0">
                <CardText
                  title={title}
                  subtitle={subtitle}
                />
              </div>

              <CardTextAndSmallImages
                icon={<FcLike />}
                isCardProducts={true}
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

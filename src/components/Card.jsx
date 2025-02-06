import PropTypes from "prop-types";
import CardImage from "./CardImage";
import CardText from "./CardText";
import CardTextAndSmallImages from "./CardTextAndSmallImages";

const Card = ({ product }) => {
  return (
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
                {product.topText}
              </span>
            </div>

            <CardImage image={product.centerImage} />

            <CardText product={product} />

            <CardTextAndSmallImages
              product={product}
              smallImages={product.smallImages}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Card;

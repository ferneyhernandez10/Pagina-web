import PropTypes from "prop-types";
import Card from "./Card";
import CardImage from "./CardImage";
import CardText from "./CardText";
import CardTextAndSmallImages from "./CardTextAndSmallImages";

const TopRatedProductCards = ({
  centerImage,
  title,
  subtitle,
  texto1,
  texto2,
}) => {
  return (
    <Card>
      <div className="p-2 md:p-4">
        <div className="rounded-lg border-2 border-white border-solid hover:border-[#cccccc] h-full">
          <div className="w-full h-full rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer">
            <div className="relative w-full h-full ">
              <CardImage centerImage={centerImage} />

              <CardText title={title} subtitle={subtitle} />

              <CardTextAndSmallImages
                texto1={texto1}
                texto2={texto2}
                // smallImages={product.smallImages}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

TopRatedProductCards.propTypes = {
  centerImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  texto1: PropTypes.string.isRequired,
  texto2: PropTypes.string.isRequired,
};

export default TopRatedProductCards;

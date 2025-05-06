import PropTypes from "prop-types";
import StarRating from "./StarRating";
import UserInfo from "./UserInfo";
import { MdKeyboardArrowRight } from "react-icons/md";
import TimeReviewed from "./TimeReviewed";

const ReviewCards = ({ review }) => {
  const featuredImage = review?.product?.featuredImage;
  const rating = review?.rating;
  const name = review?.product?.name;
  const title = review?.title;
  const description = review?.description;
  const user = review?.user;
  const createdAt = review?.createdAt;

  return (
    <div className="mb-6 md:mb-0">
      <div className="p-2 md:p-4 ">
        <div className="bg-white border-2 border-solid border-transparent rounded-lg hover:border-[#cccccc] ">
          <div className="cursor-pointer px-2 md:px-4 pt-2 md:pt-4 pb-[3px] md:pb-2 ">
            <div className="flex gap-x-2 mb-2 md:mb-4 ">
              <div className="w-[53px] h-[53px] p-1 border border-solid border-[#cccccc] ">
                <img src={featuredImage} alt="Loading..." />
              </div>
              <div className="flex flex-col max-w-full ">
                <StarRating className="mb-2" rating={rating} />
                <div className="flex items-center max-w-full font-karla text-base font-normal text-[#08adcd] ">
                  <p className="text-base/[20px] ">{name}</p>
                  <div className="pl-1">
                    <MdKeyboardArrowRight className="w-3 h-3 " />
                  </div>
                </div>
              </div>
            </div>
            <div className="font-karla text-base font-normal">
              <p className="font-bold leading-5 text-[#333333]">{title}</p>
              <br />
              <p className="leading-5 text-[#333333]">{`"${description}"`}</p>
            </div>
            <UserInfo user={user} />
          </div>
        </div>
      </div>
      <div className="mx-4 font-karla text-base font-normal">
        <p className="leading-5 text-[#aaaaaa]">
          <TimeReviewed createdAt={createdAt} />
        </p>
      </div>
    </div>
  );
};

ReviewCards.propTypes = {
  review: PropTypes.shape({
    product: PropTypes.shape({
      featuredImage: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    user: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      avatar: PropTypes.string,
    }).isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewCards;

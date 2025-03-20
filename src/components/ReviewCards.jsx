import PropTypes from "prop-types";
import StarRating from "./StarRating";
import UserInfo from "./UserInfo";
import { MdKeyboardArrowRight } from "react-icons/md";

const ReviewCards = ({ review }) => {
  return (
    <div className="mb-6 md:mb-0">
      <div className="p-2 md:p-4 ">
        <div className="bg-white border-2 border-solid border-transparent rounded-lg hover:border-[#cccccc] ">
          <div className="cursor-pointer px-2 md:px-4 pt-2 md:pt-4 pb-[3px] md:pb-2 ">
            <div className="flex gap-x-2 mb-2 md:mb-4 ">
              <div className="w-[53px] h-[53px] p-1 border border-solid border-[#cccccc] ">
                <img src={review.smallImages} alt="Loading..." />
              </div>
              <div className="flex flex-col max-w-full ">
                <StarRating className="mb-2" />
                <div className="flex items-center max-w-full font-karla text-base font-normal text-[#08adcd] ">
                  <p className="text-base/[20px] ">{review.title}</p>
                  <div className="pl-1">
                    <MdKeyboardArrowRight className="w-3 h-3 " />
                  </div>
                </div>
              </div>
            </div>
            <div className="font-karla text-base font-normal">
              <p className="font-bold leading-5 text-[#333333]">
                {review.texto1}
              </p>
              <br />
              <p className="leading-5 text-[#333333]">{review.texto2}</p>
            </div>
            <UserInfo username={review.username} />
          </div>
        </div>
      </div>
      <div className="mx-4 font-karla text-base font-normal">
        <p className="leading-5 text-[#aaaaaa]">Reviewed 11 minutes ago</p>
      </div>
    </div>
  );
};

ReviewCards.propTypes = {
  review: PropTypes.shape({
    title: PropTypes.string.isRequired,
    texto1: PropTypes.string.isRequired,
    texto2: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    smallImages: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewCards;

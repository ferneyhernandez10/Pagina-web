import { useEffect, useState } from "react";
import ReviewCards from "./ReviewCards";

const RecentReviews = () => {
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    fetch("https://api1.socialnature.com/api/v1/reviews?limit=4")
      .then((response) => response.json())
      .then((reviewsData) => setReviewsData(reviewsData));
  }, []);

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4">
      <div className="mb-6 md:mb-8">
        <h2 className="mt-[2.8px] mb-[7px] max-w-full text-2xl md:text-[32px] text-left font-Montserrat font-bold md:leading-10 text-[#333333] ">
          Recent reviews
        </h2>
      </div>
      <div className="grid md:grid-cols-2 -mx-4 -mt-4 gap-x-4 px-2 md:px-0 ">
        {reviewsData?.map((review) => (
          <ReviewCards key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default RecentReviews;

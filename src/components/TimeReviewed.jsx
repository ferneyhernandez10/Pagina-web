import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const TimeReviewed = ({ createdAt }) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const calculateTimeAgo = () => {
      const currentDate = new Date();
      const givenDate = new Date(createdAt);

      const timeDifference = currentDate - givenDate;

      const minutesDifference = Math.floor(timeDifference / (1000 * 60));

      if (minutesDifference < 1) {
        setTimeAgo("Reviewed just now");
      } else if (minutesDifference === 1) {
        setTimeAgo("Reviewed 1 minute ago");
      } else {
        setTimeAgo(`Reviewed ${minutesDifference} minutes ago`);
      }
    };

    calculateTimeAgo();

    // const intervalId = setInterval(calculateTimeAgo, 60000);

    // return () => clearInterval(intervalId);
  }, [createdAt]);

  return <>{timeAgo}</>;
};

TimeReviewed.propTypes = {
  createdAt: PropTypes.string.isRequired,
};

export default TimeReviewed;

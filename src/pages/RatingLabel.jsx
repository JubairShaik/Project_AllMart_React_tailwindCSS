import React from "react";
import PropTypes from "prop-types";

const RatingLabel = ({ rating }) => {
  const backgroundColor = rating < 2.5 ? "red" : "green";

  return (
   <div
   style={{
    backgroundColor: backgroundColor,
  }}

   className="flex items-center text-2xl px-2 rounded-md mr-1 text-white "
   > 
   <span>
   {rating}
   </span>
   <span className="text-xl">⭐</span></div>
  );
};

RatingLabel.propTypes = {
  rating: PropTypes.number.isRequired 
};

export default RatingLabel;

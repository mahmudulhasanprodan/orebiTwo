import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";


const RatingStar = ({rating}) => {
  
  const StarRating = Array.from({ length: 5 }, (x, index) => {
    let FractionNumber = index + 0.5;
    return (
      <span>
        {rating >= index + 1 ? (
          <FaStar className="text-yellow-400"/>
        ) : rating >= FractionNumber ? (
          <FaStarHalfAlt className="text-yellow-400"/>
        ) : (
          <FaRegStar className="text-yellow-400"/>
        )}
      </span>
    );
  });

  return (
    <>
      <div className="flex items-center gap-x-4">
        <div className="flex cursor-pointer items-center gap-x-3">
          {StarRating}
        </div>
        <p>
          {rating >= Math.floor(rating)
            ? `${Math.floor(rating)}.5`
            : `${Math.floor(rating)}`}
          {" Review"}
        </p>
      </div>
    </>
  );
}

export default RatingStar

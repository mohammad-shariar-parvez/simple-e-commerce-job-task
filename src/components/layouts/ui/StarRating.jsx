import React from 'react';

const StarRating = ({ rating, review_count }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const renderStars = () => {
    const stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i key={i} className='fa-solid fa-star text-yellow-400 text-sm'></i>
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <i
          key='half'
          className='fa-solid fa-star-half-stroke text-yellow-400 text-sm'
        ></i>
      );
    }

    // Remaining empty stars
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <i
          key={`empty-${i}`}
          className='fa-regular fa-star text-yellow-400 text-sm'
        ></i>
      );
    }

    return stars;
  };

  return (
    <p className='flex items-center mt-1'>
      <div>
        <div className='flex flex-col md:flex-row '>
          <div>{renderStars()}</div>
          <div>
            <span className='ms-0 md:ms-2 font-semibold me-1 text-sm'>
              {rating}
            </span>
            <span className='text-sm '>({review_count} reviews)</span>
          </div>
        </div>
      </div>
    </p>
  );
};

export default StarRating;

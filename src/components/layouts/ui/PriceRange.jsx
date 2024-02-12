import React from 'react';

const PriceRange = ({
  productPrice,
  handleFilterClick,
  priceDisplay,
  minPrice,
  maxPrice,
}) => {
  return (
    <span
      className={`cursor-pointer ${
        productPrice.minPrice == minPrice && productPrice.maxPrice == maxPrice
          ? 'font-semibold '
          : ''
      }`}
      onClick={() => handleFilterClick(minPrice, maxPrice)}
    >
      <i className='fa-solid fa-yen-sign text-sm me-2  '></i>
      {priceDisplay}
    </span>
  );
};

export default PriceRange;

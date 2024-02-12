import React from 'react';

const PriceInput = ({
  priceSearchInput,
  handleInputChange,
  placeholder,
  name,
}) => {
  return (
    <input
      type='number'
      name={name}
      placeholder={placeholder}
      value={priceSearchInput || ''}
      onChange={handleInputChange}
      aria-describedby='helper-text-explanation'
      className='bg-gray-50 border border-gray-300   rounded focus:outline-gray-300 block w-full p-1  '
    />
  );
};

export default PriceInput;

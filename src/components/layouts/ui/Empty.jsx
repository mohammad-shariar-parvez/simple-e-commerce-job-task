import React from 'react';

const Empty = ({ description }) => {
  return (
    <div className='flex items-center justify-center   min-h-28 md:min-h-80  '>
      <div>
        <i className='fa-solid fa-box-open block text-center text-5xl mb-4'></i>
        <h1 className='text-red-500'>{description}</h1>
      </div>
    </div>
  );
};

export default Empty;

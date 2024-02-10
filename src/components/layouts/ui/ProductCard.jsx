import React from 'react';

const ProductCard = ({ item }) => {
  return (
    <div className=' bg-shadowLight  rounded-md p-[14px]   space-y-4  relative   '>
      <img
        src={item.image_urls[0]}
        alt='chicken-pasta'
        className=' w-full h-auto md:h-40 object-cover object-top '
      />
      <div>
        <h6 className='m-0 leading-none font-bold text-gray-700 '>Nice pro</h6>
        <span className='text-xs'>${item.price}</span>{' '}
        <span className='text-xs'>$/each</span>
        <p className='text-xs my-3 text-justify'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          blanditiis ipsum asperiores!
        </p>
      </div>

      <div className='w-full space-y-2'>
        <button
          id='myButton${id}'
          className='bg-tomato text-white w-full p-1 rounded-sm hover:bg-tomatoDark'
        >
          Add to Order
        </button>
        <button className=' block ring-2 ring-tomato ring-inset  w-full p-1 rounded-sm text-tomato'>
          Customize
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

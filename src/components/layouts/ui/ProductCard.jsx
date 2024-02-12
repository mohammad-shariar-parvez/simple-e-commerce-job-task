import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const ProductCard = ({ item }) => {
  return (
    <div className=' bg-shadowLight  rounded-md p-[14px]   space-y-4  relative   '>
      <img
        src={item.image_urls[0]}
        alt='chicken-pasta'
        className=' w-full h-auto md:h-40 object-cover object-top '
      />
      <div>
        <h6 className='m-0 leading-none text-justify font-bold text-gray-700 mb-2 whitespace-nowrap overflow-hidden overflow-ellipsis'>
          `{item.title?.slice(0, 18)}...`
        </h6>
        <span className='text-sm  font-medium '>
          <i className='fa-solid fa-yen-sign me-1'></i>
          {item.price}
        </span>

        <StarRating
          rating={item?.review_average}
          review_count={item?.review_count}
        />

        <p className='text-xs my-3 text-justify overflow-hidden max-h-[33px] leading-4 overflow-ellipsis'>
          `{item.description?.slice(0, 49)}...`
        </p>
      </div>

      <Link
        className='w-full space-y-2'
        key={item.item_id}
        to={`/product/${item.platform}/${item.item_id}`}
      >
        <button
          id='myButton${id}'
          className='bg-tomato text-white w-full p-1 rounded-sm hover:bg-tomatoDark'
        >
          Check Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;

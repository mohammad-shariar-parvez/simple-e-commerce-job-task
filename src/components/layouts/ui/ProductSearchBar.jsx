import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  resetSearchTerm,
  updateSearchTerm,
} from '../../../redux/features/filter/filterSlice';

const ProductSearchBar = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the searchQuery to Redux or perform any other actions
    dispatch(updateSearchTerm({ searchQuery }));

    // Optionally, you can clear the input field after submission
    // setSearchQuery('');
  };

  const handleResetSearch = () => {
    dispatch(resetSearchTerm());
    setSearchQuery('');
  };
  return (
    <section className='mb-16 md:max-w-4xl mx-auto  '>
      <form className='flex items-center' onSubmit={handleSubmit}>
        <div className='relative w-full'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
            <svg
              className='w-4 h-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 21 21'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z'
              />
            </svg>
          </div>
          <input
            type='text'
            value={searchQuery}
            onChange={handleInputChange}
            className=' bg-gray-50 border border-gray-300   rounded focus:outline-gray-300   text-gray-900 text-sm focus:ring-tomato focus:border-tomato block w-full ps-10 p-2.5   '
            placeholder='Search Products...'
            required
          />
          <button
            type='reset'
            className=' absolute inset-y-0 end-0 flex items-center  px-3  '
            onClick={handleResetSearch}
          >
            <i className='fa-solid fa-xmark hover:text-tomatoDark text-lg '></i>
          </button>
        </div>
        <button
          type='submit'
          className='inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-tomato   hover:bg-tomatoDark focus:ring-2  focus:ring-tomato rounded '
        >
          {/* <i className='fa-solid fa-magnifying-glass me-2 inline-flex items-center w-4 h-4 m-0 text-base'></i> */}
          <svg
            className='w-4 h-4 me-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 20'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
            />
          </svg>
          Search
        </button>
      </form>
    </section>
  );
};

export default ProductSearchBar;

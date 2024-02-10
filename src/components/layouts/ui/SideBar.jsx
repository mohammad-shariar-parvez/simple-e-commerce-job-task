import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateFixedPrice,
  updateSortOption,
} from '../../../redux/features/filter/filterSlice';

const SideBar = () => {
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.filter);
  const [priceSearchInput, setPriceSearchInput] = useState({
    maxPriceInput: null,
    minPriceInput: null,
  });

  const handleFilterClick = (min, max) => {
    setPriceSearchInput({
      maxPriceInput: null,
      minPriceInput: null,
    });

    dispatch(
      updateFixedPrice({
        maxPrice: max,
        minPrice: min,
      })
    );
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    // Use FormData to collect form data
    // console.log(searchPrice.maxPrice, searchPrice.minPrice);
    dispatch(
      updateFixedPrice({
        maxPrice: priceSearchInput.maxPriceInput,
        minPrice: priceSearchInput.minPriceInput,
      })
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPriceSearchInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetFilters = async () => {
    dispatch(
      updateFixedPrice({
        maxPrice: 9000,
        minPrice: 0,
      })
    );
  };

  const handleSortChange = (sortBy, sortOrder) => {
    dispatch(updateSortOption({ sortBy, sortOrder }));
  };

  return (
    <div className='space-y-4'>
      <div className='space-y-2 flex flex-col'>
        <span
          className='cursor-pointer'
          onClick={() => handleFilterClick(0, 9000)}
        >
          All Products
        </span>
        <span
          className='cursor-pointer'
          onClick={() => handleFilterClick(0, 1000)}
        >
          Below 1000
        </span>

        <span
          className='cursor-pointer'
          onClick={() => handleFilterClick(1001, 2000)}
        >
          1001-2000
        </span>

        <span
          className='cursor-pointer'
          onClick={() => handleFilterClick(2001, 3000)}
        >
          2001-3000
        </span>
        <span
          className='cursor-pointer'
          onClick={() => handleFilterClick(3001, 4000)}
        >
          3001-4000
        </span>
        <span
          className='cursor-pointer'
          onClick={() => handleFilterClick(4001, 5000)}
        >
          4001-5000
        </span>
        <span
          className='cursor-pointer'
          onClick={() => handleFilterClick(5001, 6000)}
        >
          5001-6000
        </span>
        <span
          className='cursor-pointer'
          onClick={() => handleFilterClick(6001, 7000)}
        >
          6001-7000
        </span>
      </div>
      <form
        onSubmit={handleFilterSubmit}
        className='flex justify-between items-center  space-x-1 pb-4'
      >
        <input
          type='number'
          name='minPriceInput'
          placeholder='Min '
          value={priceSearchInput.minPriceInput || ''}
          onChange={handleInputChange}
          aria-describedby='helper-text-explanation'
          className='bg-gray-50 border border-gray-300   rounded focus:outline-gray-300 block w-full p-1  '
        />

        <input
          type='number'
          name='maxPriceInput'
          placeholder='Max '
          value={priceSearchInput.maxPriceInput || ''}
          onChange={handleInputChange}
          className='bg-gray-50 border border-gray-300   rounded focus:outline-gray-300 block w-full p-1'
        />

        <div className='flex space-x-1 ml-4 ps-2 '>
          <button
            className=' py-1 px-2   font-normal text-white bg-tomato rounded  hover:bg-tomatoDark '
            type='submit'
          >
            <i className='fa-solid fa-magnifying-glass '></i>
          </button>

          <button
            type='reset'
            onClick={resetFilters}
            className=' py-1 px-2  font-normal text-tomato    ring-tomato ring-2 ring-inset  rounded   hover:text-tomatoDark  hover:ring-tomatoDark'
          >
            <i className='fa-solid fa-xmark'></i>
          </button>
        </div>
      </form>
      <div className='pb-4'>
        <div>
          {/* <div className='flex items-center'>
            <input
              id='default-radio-2'
              type='radio'
              name='priceSorting'
              value='desc'
              checked={
                filterState.sortBy === 'price' &&
                filterState.sortOrder === 'desc'
              }
              onChange={() => handleSortChange('price', 'desc')}
              className='w-4 h-4 text-tomato  bg-gray-100  '
            />
            <label
              htmlFor='default-radio-1'
              className='ms-2 text-sm font-medium text-gray-900 '
            >
              Default
            </label>
          </div> */}

          <div className='flex justify-between items-center  space-y-2'>
            <span>Price</span>
            <div className='space-x-1'>
              <button
                onClick={() => handleSortChange('price', 'asc')}
                className={`px-2.5 py-1  font-normal text-sm  text-tomato  ring-tomato ring-2 ring-inset  rounded   hover:ring-tomatoDark ${
                  filterState.sortBy === 'price' &&
                  filterState.sortOrder === 'asc'
                    ? 'text-white bg-tomato'
                    : ''
                }`}
              >
                <i className='fa-solid fa-up-long'></i>
              </button>

              <button
                onClick={() => handleSortChange('price', 'desc')}
                className={`px-2.5 py-1  font-normal text-sm  text-tomato  ring-tomato ring-2 ring-inset  rounded   hover:ring-tomatoDark ${
                  filterState.sortBy === 'price' &&
                  filterState.sortOrder === 'desc'
                    ? 'text-white bg-tomato'
                    : ''
                }`}
              >
                <i className='fa-solid fa-down-long'></i>
              </button>
            </div>
          </div>

          <div className='flex justify-between items-center  space-y-2'>
            <span>Review</span>
            <div className='space-x-1'>
              <button
                onClick={() => handleSortChange('review_count', 'asc')}
                className={`px-2.5 py-1  font-normal text-sm  text-tomato  ring-tomato ring-2 ring-inset  rounded   hover:ring-tomatoDark ${
                  filterState.sortBy === 'review_count' &&
                  filterState.sortOrder === 'asc'
                    ? 'text-white bg-tomato'
                    : ''
                }`}
              >
                <i className='fa-solid fa-up-long'></i>
              </button>

              <button
                onClick={() => handleSortChange('review_count', 'desc')}
                className={`px-2.5 py-1  font-normal text-sm  text-tomato  ring-tomato ring-2 ring-inset  rounded   hover:ring-tomatoDark ${
                  filterState.sortBy === 'review_count' &&
                  filterState.sortOrder === 'desc'
                    ? 'text-white bg-tomato '
                    : ''
                }`}
              >
                <i className='fa-solid fa-down-long'></i>
              </button>
            </div>
          </div>

          <div className='flex justify-between items-center  space-y-2'></div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

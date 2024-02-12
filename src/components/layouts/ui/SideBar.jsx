import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateProductPrice,
  updateSortOption,
} from '../../../redux/features/filter/filterSlice';
import PriceRange from './PriceRange';
import PriceInput from './PriceInput';
import SortingSector from './SortingSector';

const SideBar = () => {
  //dispath & useSelector for updating values to state
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
      updateProductPrice({
        maxPrice: max,
        minPrice: min,
      })
    );
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateProductPrice({
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
    setPriceSearchInput({
      maxPriceInput: null,
      minPriceInput: null,
    });

    dispatch(
      updateProductPrice({
        maxPrice: Infinity,
        minPrice: 0,
      })
    );
  };

  const handleSortChange = (sortBy, sortOrder) => {
    dispatch(updateSortOption({ sortBy, sortOrder }));
  };

  return (
    <div
      className={`space-y-4  block pointer-events-auto backdrop-blur-3xl   w-72 p-4 md:w-auto md:p-0 pt-24 md:pt-0  fixed md:static left-0 top-0 h-full  z-20 transition-transform transform md:transition-none  ease-in-out duration-500 md:translate-x-0  ${
        filterState.slider ? 'translate-x-0' : '-translate-x-full '
      }`}
    >
      <div className='space-y-2 flex flex-col'>
        <PriceRange
          productPrice={filterState.productPrice}
          handleFilterClick={handleFilterClick}
          minPrice={0}
          maxPrice={Infinity}
          priceDisplay='All Products'
        />
        <PriceRange
          productPrice={filterState.productPrice}
          handleFilterClick={handleFilterClick}
          minPrice={0}
          maxPrice={5000}
          priceDisplay='Below 5000'
        />
        <PriceRange
          productPrice={filterState.productPrice}
          handleFilterClick={handleFilterClick}
          minPrice={5000}
          maxPrice={10000}
          priceDisplay='5000  - 10000'
        />
        <PriceRange
          productPrice={filterState.productPrice}
          handleFilterClick={handleFilterClick}
          minPrice={10000}
          maxPrice={20000}
          priceDisplay='10000 - 20000'
        />
        <PriceRange
          productPrice={filterState.productPrice}
          handleFilterClick={handleFilterClick}
          minPrice={20000}
          maxPrice={30000}
          priceDisplay='20000 - 30000'
        />
        <PriceRange
          productPrice={filterState.productPrice}
          handleFilterClick={handleFilterClick}
          minPrice={30000}
          maxPrice={40000}
          priceDisplay='30000 - 40000'
        />
        <PriceRange
          productPrice={filterState.productPrice}
          handleFilterClick={handleFilterClick}
          minPrice={40000}
          maxPrice={50000}
          priceDisplay='30000 - 40000'
        />
        <PriceRange
          productPrice={filterState.productPrice}
          handleFilterClick={handleFilterClick}
          minPrice={50000}
          maxPrice={Infinity}
          priceDisplay='50000 and Above'
        />
      </div>

      <form
        onSubmit={handleFilterSubmit}
        className='flex  items-center  space-x-1 pb-4'
      >
        {/* Input component for price search */}
        <PriceInput
          priceSearchInput={priceSearchInput.minPriceInput}
          handleInputChange={handleInputChange}
          placeholder={'Min'}
          name='minPriceInput'
        />
        <PriceInput
          priceSearchInput={priceSearchInput.maxPriceInput}
          handleInputChange={handleInputChange}
          placeholder={'Max'}
          name='maxPriceInput'
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
            className=' px-2 py-[1px] mx-1  font-normal   rounded ring-1 ring-inset ring-gray-500   hover:bg-gray-100 hover:ring-2  '
          >
            <i className='fa-solid fa-xmark text-lg'></i>
          </button>
        </div>
      </form>

      {/* Sorting components to filter products */}
      <div className='pb-4'>
        <div className=' space-y-3'>
          <SortingSector
            name={'Price'}
            handleSortChange={handleSortChange}
            sortBy='price'
            filterState={filterState}
          />
          <SortingSector
            name={'Review Avarage'}
            handleSortChange={handleSortChange}
            sortBy='review_average'
            filterState={filterState}
          />
          <SortingSector
            name={'Review Count'}
            handleSortChange={handleSortChange}
            sortBy='review_count'
            filterState={filterState}
          />
          <div className='flex justify-between items-center  space-y-2'></div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

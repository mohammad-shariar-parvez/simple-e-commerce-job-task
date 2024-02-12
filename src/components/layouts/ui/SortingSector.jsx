import React from 'react';

const SortingSector = ({ handleSortChange, filterState, sortBy, name }) => {
  return (
    <div className='flex justify-between items-center  space-y-2'>
      <span>{name}</span>
      <div className='space-x-1 ml-2'>
        <button
          onClick={() => handleSortChange(sortBy, 'asc')}
          className={`px-2 py-[2px] mx-1  font-normal text-sm  rounded ring-1 ring-gray-500    ${
            filterState.sortBy == sortBy && filterState.sortOrder == 'asc'
              ? 'ring-gray-500 ring-2 border font-bold shadow-xl bg-gray-200'
              : 'hover:bg-gray-100'
          }`}
        >
          <i className='fa-solid fa-up-long'></i>
        </button>

        <button
          onClick={() => handleSortChange(sortBy, 'desc')}
          className={`px-2 py-[2px] mx-1  font-normal text-sm  rounded ring-1 ring-gray-500 ${
            filterState.sortBy === sortBy && filterState.sortOrder === 'desc'
              ? 'ring-gray-500 ring-2 border font-bold shadow-xl bg-gray-200'
              : 'hover:bg-gray-100'
          }`}
        >
          <i className='fa-solid fa-down-long'></i>
        </button>
      </div>
    </div>
  );
};

export default SortingSector;

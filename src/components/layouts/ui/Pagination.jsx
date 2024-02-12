import React, { useState } from 'react';

const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setCurrentPage(page);
    onPageChange(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 8;

    // Calculate start and end based on the current page
    let start = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    const end = Math.min(totalPages, start + maxPageButtons - 1);

    // If the end is less than maxPageButtons, adjust the start
    if (end < maxPageButtons) {
      //   start = Math.max(1, end - maxPageButtons + 1);
      start = 1;
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`mx-1 px-2  md:px-3 md:py-1  rounded ring-1 ring-gray-500 ${
            i === currentPage
              ? ' ring-gray-500 ring-2 font-bold shadow-xl bg-gray-200'
              : 'hover:bg-gray-100'
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className='flex items-center justify-between md:justify-end mt-14  '>
      <button
        className='cursor-pointer mx-1 px-1 md:px-3 md:py-1 rounded   ring-1 ring-gray-500 hover:bg-gray-200 hover:ring-2 '
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {renderPageNumbers()}

      <button
        className='cursor-pointer mx-1 px-1 md:px-3 md:py-1 rounded   ring-1 ring-gray-500 hover:bg-gray-200 hover:ring-2'
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

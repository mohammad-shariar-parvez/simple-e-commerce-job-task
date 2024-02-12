import React from 'react';

const ProductDetailsSkeleton = () => {
  return (
    <section className='bg-[#EDEDED] animate-pulse '>
      <div className='pb-16'></div>
      <div className='max-w-7xl mx-auto p-4 bg-white mt-10 md:p-10 rounded-lg mb-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            {/* Placeholder for image skeleton */}
            <div className='flex items-center justify-center w-full h-96 md:h-[600px]  bg-gray-300  '>
              <svg
                className='w-10 h-10 text-gray-100 '
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 16 20'
              >
                <path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z' />
                <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
              </svg>
            </div>
          </div>

          <div>
            {/* Placeholder for title */}
            <div className='h-8 bg-gray-200   mb-4'></div>

            {/* Placeholder for headline */}
            <div className='h-6 bg-gray-200   mb-4'></div>

            <hr className='h-1 mx-auto my-4 bg-gray-200 border-0 rounded md:my-10' />

            {/* Placeholder for price, brand, and availability */}
            <div className='bg-[#f6f6f6] p-4 rounded mb-4'>
              <div className='flex items-center justify-between mb-4'>
                <div className='h-8 w-16 bg-gray-200  '></div>
                <div className='h-6 w-16 bg-gray-200  '></div>
                <div className='h-8 w-16 bg-gray-200  '></div>
              </div>

              {/* Placeholder for star rating */}
              <div className='flex items-center'>
                <div className='h-5 w-24 bg-gray-200  '></div>
                <div className='h-5 w-10 bg-gray-200   me-3'></div>
                <div className='h-5 w-20 bg-gray-200  '></div>
              </div>
            </div>

            {/* Placeholder for Yahoo Shopping link */}
            <div className='h-4 bg-gray-200  mb-1 w-48'></div>
          </div>
        </div>

        {/* Placeholder for description */}
        <div className='mt-8'>
          <div className='h-3 bg-gray-200  mb-1'></div>
          <div className='h-3 bg-gray-200  mb-1'></div>
          <div className='h-3 bg-gray-200  mb-1'></div>
          <h2 className='text-2xl font-semibold my-4 '>Product Details</h2>

          {/* Placeholder for product details */}
          <ul className='list-inside list-none space-y-1 md-4'>
            <li className='flex items-center'>
              <strong>Brand:</strong>
              <span className='bg-gray-200   h-4 w-20 inline-block ms-2'></span>
            </li>
            <li>
              <strong>Availability:</strong>
              <span className='bg-gray-200   h-4 w-20 inline-block ms-2'></span>
            </li>
            <li>
              <strong>Shop:</strong>
              <span className='bg-gray-200   h-4 w-20 inline-block ms-2'></span>
            </li>
          </ul>
        </div>

        {/* Placeholder for additional information */}
        <hr className='border-2 mx-auto my-4 bg-gray-200 rounded md:my-10' />
        <div className='mt-8'>
          <h2 className='text-2xl font-semibold mb-4'>
            Additional Information
          </h2>

          {/* Placeholder for additional information */}
          <p>
            <strong>Genre:</strong>{' '}
            <span className='bg-gray-200   h-4 w-20 inline-block ms-2'></span>
          </p>
        </div>

        {/* Placeholder for shop reviews */}
        <hr className='border-2 mx-auto my-4 bg-gray-200 rounded md:my-10' />
        <div className='mt-8'>
          <h2 className='text-2xl font-semibold mb-4'>Shop Reviews</h2>

          {/* Placeholder for shop reviews */}
          <div className='space-y-1'>
            <p>
              <strong>Shop Name:</strong>
              <span className='bg-gray-200   h-4 w-20 inline-block ms-2'></span>
            </p>
            <p>
              <strong>Shop Average Rating:</strong>
              <span className='bg-gray-200   h-4 w-20 inline-block ms-2'></span>
            </p>
          </div>
        </div>
      </div>
      <div className='pb-12'></div>
    </section>
  );
};

export default ProductDetailsSkeleton;

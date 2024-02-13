import React from 'react';

const NotFoundPage = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold text-tomato mb-4'>404</h1>
        <p className='text-xl font-semibold text-gray-800 mb-4'>
          Page Not Found
        </p>
        <p className='text-gray-600 mb-8'>
          The page you are looking for might be in another galaxy.
        </p>
        <a href='/' className='text-tomato underline hover:text-tomatoDark'>
          Go back home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;

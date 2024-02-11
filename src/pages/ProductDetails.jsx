import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductsQuery } from '../redux/api/productApi';
import ProductDetailsSkeleton from '../components/layouts/skeleton/ProductDetailsScalation';
const ProductDetails = () => {
  const { platform, item_id } = useParams();

  const { data, isLoading, isSuccess } = useProductsQuery({
    platform,
    item_id,
  });

  useEffect(() => {
    // Scroll to the top when component is mounted
    window.scrollTo(0, 0);
  }, []);
  if (isLoading && !isSuccess) {
    return <ProductDetailsSkeleton />;
  }
  // console.log(data);
  // console.log('params', platform, item_id);

  return (
    <section className='bg-[#EDEDED] '>
      <div className='pb-16'></div>
      <div className='max-w-6xl mx-auto p-4  bg-white    mt-10 md:p-10   rounded-lg mb-12  '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <img
              src={data?.image_urls[0]}
              alt={data?.title}
              className='w-full h-auto '
            />
          </div>

          <div>
            <h1 className='text-3xl font-semibold mb-4'>{data?.title}</h1>
            <p className='text-gray-600 mb-4'>{data?.headline}</p>
            <hr className=' h-1 mx-auto my-4 bg-gray-200 border-0 rounded md:my-10 ' />
            <div className='bg-[#f6f6f6] p-4 rounded mb-4'>
              <div className='flex items-center justify-between mb-4'>
                <p className='text-lg font-bold text-tomato '>
                  <i className='fa-solid fa-yen-sign me-1'></i>
                  {data?.currency} {data?.price}
                </p>
                <p className='bg-red-100 text-tomato text-sm font-medium me-2 px-2.5 py-0.5 rounded  '>
                  {data?.brand}
                </p>

                <p>
                  <i className='fa-solid fa-cubes-stacked text-green-500 me-3'></i>
                  {data?.availability ? 'In Stock' : 'Out of Stock'}
                </p>
              </div>
              <p>
                <i className='fa-solid fa-star text-yellow-400'></i>
                <i className='fa-solid fa-star text-yellow-400'></i>
                <i className='fa-solid fa-star text-yellow-400'></i>
                <i className='fa-solid fa-star text-yellow-400'></i>
                <i className='fa-solid fa-star text-yellow-400'></i>
                <span className='ps-4 font-semibold me-1'>
                  {data?.review_average}
                </span>
                <span>({data?.review_count} reviews)</span>
              </p>
            </div>
            <a
              href={data?.item_url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline '
            >
              View on Yahoo! Shopping
            </a>
          </div>
        </div>

        <div className='mt-8'>
          <p className='text-gray-700 mb-6'>{data?.description}</p>
          <h2 className='text-2xl font-semibold mb-4'>Product Details</h2>
          <ul className=' list-inside list-none space-y-1'>
            <li>
              <strong>Brand:</strong> {data?.brand}
            </li>
            <li>
              <strong>Availability:</strong>{' '}
              {data?.availability ? 'In Stock' : 'Out of Stock'}
            </li>
            <li>
              <strong>Shop:</strong> {data?.shop_name}
            </li>
            {/* Add more details as needed */}
          </ul>
        </div>
        <hr className=' border-2 mx-auto my-4 bg-gray-200  rounded md:my-10 ' />
        <div className='mt-8'>
          <h2 className='text-2xl font-semibold mb-4'>
            Additional Information
          </h2>

          <p>
            <strong>Genre:</strong> {data?.genre_name}
          </p>
          {/* Add more information as needed */}
        </div>
        <hr className=' border-2 mx-auto my-4 bg-gray-200  rounded md:my-10 ' />
        <div className='mt-8'>
          <h2 className='text-2xl font-semibold mb-4 '>Shop Reviews</h2>
          <div className='space-y-1'>
            <p>
              <strong>Shop Name:</strong> {data?.shop_name}
            </p>
            <p>
              <strong>Shop Average Rating:</strong> {data?.shop_review_average}{' '}
              ({data?.shop_review_count} reviews)
            </p>
          </div>
        </div>
      </div>
      <div className='pb-12'></div>
    </section>
  );
};

export default ProductDetails;

// <div className=' '>
//   <div className='md:flex   items-start md:space-x-4 space-y-4 md:space-y-0'>
//     {/* <img
//           src={data?.imageUrl}

//           alt='eagle_image'
//           className='w-full h-auto md:h-[290] md:w-auto '
//         />

//         <p className='text-base font-normal text-[#212529] text-justify'>
//           {parsedContent}
//         </p> */}
//   </div>
// </div>;

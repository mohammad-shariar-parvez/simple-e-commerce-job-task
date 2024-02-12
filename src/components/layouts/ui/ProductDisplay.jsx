import React, { useEffect, useState } from 'react';
import { useAddProductMutation } from '../../../redux/api/productApi';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from './Pagination';
import Empty from './Empty';
import ProductCardSkeleton from '../skeleton/ProductCardSkeleton';
import { updateProducts } from '../../../redux/features/filter/filterSlice';

const ProductDisplay = () => {
  const dispatch = useDispatch();
  const [addProduct, { isLoading, isError, isSuccess }] =
    useAddProductMutation();

  const filterState = useSelector((state) => state.filter);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    // Handle the page change, fetch data for the new page, etc.
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await addProduct({
          yahoo_query_parameters: {
            query: filterState.searchTerm,
            results: 20,
            start: currentPage,
          },
          from_scheduler: false,
        });
        // Update the response data to store
        dispatch(updateProducts(result.data));
        window.scrollTo(0, 0);
      } catch (error) {
        // Handle errors
      }
    };

    fetchData();
  }, [addProduct, currentPage, dispatch, filterState.searchTerm]);

  let searchComponent = null;
  if (!isLoading && isError) {
    searchComponent = (
      <div className=''>{<Empty description='Something went wrong' />}</div>
    );
  }
  if (!isError && !isLoading && filterState.filteredProducts?.length <= 0) {
    searchComponent = (
      <div className=''>{<Empty description='No Product Found' />}</div>
    );
  }
  if (filterState.filteredProducts?.length <= 0) {
    searchComponent = (
      <div className=''>{<Empty description='No Product Found' />}</div>
    );
  }

  if (isLoading && !isError) {
    searchComponent = (
      <div className='grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-3 min-h-28 md:min-h-80'>
        {Array.from({ length: 12 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (
    !isError &&
    !isLoading &&
    isSuccess &&
    filterState.filteredProducts?.length > 0
  ) {
    searchComponent = (
      <div className='grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-3 min-h-28 md:min-h-80'>
        {filterState.filteredProducts?.map((item) => (
          <ProductCard key={item.item_id} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div className='col-span-4 '>
      {searchComponent}
      <Pagination totalPages={20} onPageChange={handlePageChange} />
    </div>
  );
};

export default ProductDisplay;

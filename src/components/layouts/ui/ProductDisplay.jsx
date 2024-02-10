import React, { useEffect, useState } from 'react';
import { useAddProductMutation } from '../../../redux/api/productApi';
import { filterByPrice } from '../../../utils/filterByPrice';
import { sortByFileds } from '../../../utils/sortByFileds';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

const ProductDisplay = () => {
  const [addProduct, { isLoading, isError, isSuccess }] =
    useAddProductMutation();

  const filterState = useSelector((state) => state.filter);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await addProduct({
          yahoo_query_parameters: {
            query: 'shirt',
          },
          from_scheduler: false,
        });
        setProducts(result.data);
        // Access the response data
      } catch (error) {
        // Handle errors
      }
    };

    fetchData();
  }, [addProduct]);
  //   console.error('Error---------------------55555');
  return (
    <div className='col-span-4'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-2'>
        {/* Card */}
        {products
          .filter((product) => filterByPrice(product, filterState?.fixedPrice))
          .sort((a, b) =>
            sortByFileds(a, b, filterState?.sortBy, filterState?.sortOrder)
          )
          .map((item) => (
            <ProductCard key={item.item_id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default ProductDisplay;

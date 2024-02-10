// import { useAddProductMutation } from '../../../redux/api/productApi';
// import ProductCard from './ProductCard';
// import { sortByFileds } from '../../../utils/sortByFileds';
// import { filterByPrice } from '../../../utils/filterByPrice';
import SideBar from './SideBar';
import ProductDisplay from './ProductDisplay';

const ProductCatalog = () => {
  //   const [addProduct, { isLoading, isError, isSuccess }] =
  //     useAddProductMutation();

  //   const [sortField, setSortField] = useState('price');
  //   const [sortOrder, setSortOrder] = useState('desc');

  //   const [sortOptions, setSortOptions] = useState({
  //     sortBy: 'price',
  //     order: 'desc',
  //   });

  //   const [fixedPrice, setFixedPrice] = useState({
  //     maxPrice: 9000,
  //     minPrice: 0,
  //   });
  //   const [searchPrice, setSearchPrice] = useState({
  //     maxPrice: null,
  //     minPrice: null,
  //   });

  //   const [products, setProducts] = useState([]);

  //   const handleFilterClick = (min, max) => {
  //     setSearchPrice({
  //       maxPrice: null,
  //       minPrice: null,
  //     });

  //     // Filter products based on the price range
  //     setFixedPrice({
  //       maxPrice: max,
  //       minPrice: min,
  //     });
  //   };

  //   const handleFilterSubmit = (e) => {
  //     e.preventDefault();
  //     // Use FormData to collect form data
  //     console.log(searchPrice.maxPrice, searchPrice.minPrice);
  //     setFixedPrice({
  //       maxPrice: searchPrice.maxPrice,
  //       minPrice: searchPrice.minPrice,
  //     });
  //   };

  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setSearchPrice((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));
  //   };

  //   const resetFilters = async () => {
  //     setFixedPrice({
  //       maxPrice: 9000,
  //       minPrice: 0,
  //     });
  //   };

  //   const handleSortChange = (sortBy, order) => {
  //     setSortOptions({ sortBy, order });
  //   };

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const result = await addProduct({
  //           yahoo_query_parameters: {
  //             query: 'shirt',
  //           },
  //           from_scheduler: false,
  //         });
  //         setProducts(result.data);
  //         // Access the response data
  //       } catch (error) {
  //         // Handle errors
  //         console.error('Error:', error);
  //       }
  //     };

  //     fetchData();
  //   }, [addProduct]);
  return (
    <>
      <div className='mb-16 md:max-w-5xl mx-auto  '>
        <button className=' border-solid border-2 border-gray-400 rounded-sm px-2 py-1 ml-auto block font-medium'>
          Menu
          <i className='fa-solid fa-chevron-down'></i>
        </button>

        {/* <!-- Dropdown menu --> */}
        <div
          id='dropdown'
          className=' hidden bg-white divide-y divide-gray-100 w-44 '
        >
          <ul className='p-4 ' aria-labelledby='dropdownDefaultButton'>
            <li>Dinner</li>
            <li>Breakfast</li>
          </ul>
        </div>
      </div>
      {/* <!--######################################### 
					    SIdebar
	    #########################################--> */}
      <section id='root' className='mb-8 md:max-w-7xl mx-auto'>
        <div className=' md:grid md:grid-cols-5 gap-6 space-y-4 md:space-y-0 '>
          {/* <div className='space-y-4'>
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
                name='minPrice'
                placeholder='Min '
                value={searchPrice.minPrice || ''}
                onChange={handleInputChange}
                aria-describedby='helper-text-explanation'
                className='bg-gray-50 border border-gray-300   rounded focus:outline-gray-300 block w-full p-1  '
              />

              <input
                type='number'
                name='maxPrice'
                placeholder='Max '
                value={searchPrice.maxPrice || ''}
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
                <div className='flex items-center'>
                  <input
                    id='default-radio-2'
                    type='radio'
                    name='priceSorting'
                    value='desc'
                    checked={
                      sortOptions.sortBy === 'price' &&
                      sortOptions.order === 'desc'
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
                </div>

                <div className='flex justify-between items-center  space-y-2'>
                  <span>Price</span>
                  <div className='space-x-1'>
                    <button
                      onClick={() => handleSortChange('price', 'asc')}
                      className={`px-2.5 py-1  font-normal text-sm  text-tomato  ring-tomato ring-2 ring-inset  rounded   hover:ring-tomatoDark ${
                        sortOptions.sortBy === 'price' &&
                        sortOptions.order === 'asc'
                          ? 'text-white bg-tomato'
                          : ''
                      }`}
                    >
                      <i className='fa-solid fa-up-long'></i>
                    </button>

                    <button
                      onClick={() => handleSortChange('price', 'desc')}
                      className={`px-2.5 py-1  font-normal text-sm  text-tomato  ring-tomato ring-2 ring-inset  rounded   hover:ring-tomatoDark ${
                        sortOptions.sortBy === 'price' &&
                        sortOptions.order === 'desc'
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
                        sortOptions.sortBy === 'review_count' &&
                        sortOptions.order === 'asc'
                          ? 'text-white bg-tomato'
                          : ''
                      }`}
                    >
                      <i className='fa-solid fa-up-long'></i>
                    </button>

                    <button
                      onClick={() => handleSortChange('review_count', 'desc')}
                      className={`px-2.5 py-1  font-normal text-sm  text-tomato  ring-tomato ring-2 ring-inset  rounded   hover:ring-tomatoDark ${
                        sortOptions.sortBy === 'review_count' &&
                        sortOptions.order === 'desc'
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
          </div> */}
          <SideBar />
          <ProductDisplay />
        </div>

        {/* <button
          className={`${
            false
              ? 'bg-tomato text-white font-semibold text-xs tracking-wide rounded-3xl py-1 px-4 absolute -top-[25px] -left-[25px] -rotate-45 '
              : 'hidden'
          }`}
        >
          NEW
        </button> */}
      </section>
    </>
  );
};

export default ProductCatalog;

import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { sliderChange } from '../../../redux/features/filter/filterSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const handleSlider = () => {
    dispatch(sliderChange());
  };
  return (
    <section className='bg-[#FAF5F3]  fixed top-0 left-0 right-0 z-50 px-4  pointer-events-auto'>
      <nav className=' flex items-center justify-between w-full  md:max-w-7xl mx-auto  '>
        <div className='flex items-center space-x-5'>
          <Link to='/'>
            <img
              src='/nav-icon.png'
              alt='Navigation Icon'
              className=' h-14 w-14'
            />
          </Link>
          <ul className='flex items-center justify-around cursor-pointer space-x-4 fixed bottom-0 md:static bg-[#FAF5F3] md:bg-inherit py-3 md:p-0 -left-5  z-10 w-full md:w-auto px-4 md:px-0 pointer-events-auto  '>
            <Link to='/'>
              <li className='font-medium hover:text-gray-800 hover:underline'>
                HOME
              </li>
            </Link>

            <li className='font-medium hover:text-gray-800'>All PRODUCTS</li>
            <li className='font-medium hover:text-gray-800'>LOCATIONS</li>
            <li className='font-medium hover:text-gray-800'>ABOUT</li>
            <button
              onClick={handleSlider}
              disabled={!isHome}
              className={`font-medium hover:text-gray-800 md:hidden cursor-pointer ${
                !isHome ? 'text-gray-200' : ''
              }`}
            >
              <i className='fa-solid fa-sliders'></i>
            </button>
          </ul>
        </div>
        <div className='flex items-center space-x-4 '>
          <div id='openCartBtn' className='cart relative'>
            <i className='text-xl fa-sharp fa-solid fa-bag-shopping cursor-pointer text-black'></i>
            <span
              id='count1'
              className='absolute block bg-tomato  rounded-md text-[9px] m-0 text-white px-[5px] py-[1px]  left-[9px] bottom-[14px]'
            >
              0
            </span>
          </div>
          <button className='bg-tomato text-xs text-white py-2 px-5 rounded font-medium hover:bg-tomatoDark '>
            ORDER NOW
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

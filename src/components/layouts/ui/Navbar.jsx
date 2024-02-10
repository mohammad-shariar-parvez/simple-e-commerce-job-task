const Navbar = () => {
  return (
    <section className='bg-[#FAF5F3]  fixed top-0 left-0 right-0 z-10 px-4'>
      <nav className=' flex items-center justify-between w-full  md:max-w-4xl mx-auto   '>
        <div className='flex items-center space-x-3'>
          <img
            src='/nav-icon.png'
            alt='Navigation Icon'
            className=' h-14 w-14'
          />
          <ul className='flex items-center justify-around cursor-pointer space-x-3 fixed bottom-0 md:static bg-[#FAF5F3] md:bg-inherit py-3 md:p-0 -left-3  z-10 w-full md:w-auto px-4 md:px-0  '>
            <li className='font-medium hover:text-gray-800'>MENU</li>
            <li className='font-medium hover:text-gray-800'>REWARDS</li>
            <li className='font-medium hover:text-gray-800'>LOCATIONS</li>
            <li className='font-medium hover:text-gray-800'>GIFT CARDS</li>
            <li className='font-medium hover:text-gray-800'>LOG IN</li>
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
          <button className='bg-tomato text-xs text-white py-2 px-5 rounded-md font-medium hover:bg-tomatoDark '>
            ORDER NOW
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

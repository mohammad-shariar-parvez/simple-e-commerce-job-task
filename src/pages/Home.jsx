import Navbar from '../components/layouts/ui/Navbar';
import Hero from '../components/layouts/ui/Hero';
import ProductCatalog from '../components/layouts/ui/ProductCatalog';

const Home = () => {
  // console.log('Response Data:', products);
  return (
    <div className='m-0 p-4 box-border font-poppins  relative text-gray-600 '>
      <Navbar />
      <Hero />
      <ProductCatalog />
      {/* <!-- CARD --> */}
      {/* <section className='mb-8 md:max-w-4xl mx-auto '>
        <div className='sidebar'></div>
      </section> */}

      {/* <!--######################################### 
					    SIdebar
	    #########################################--> */}
      {/* <section
        id='cartSection'
        className='fixed right-0 top-0  w-80 h-full bg-tomato  z-20 transition-transform transform translate-x-full ease-in-out duration-500  '
      >
        <div className='text-tomato flex items-center justify-between p-3 bg-white text-sm '>
          <div className='text-tomato space-x-2 font-medium '>
            <i className='text-xl fa-sharp fa-solid fa-bag-shopping'></i>
            <span id='count2'>0</span>
            <span>Item</span>
          </div>
          <button
            id='closeCartBtn'
            className=' ml-auto  ring-1 ring-tomato ring-inse p-[2px] rounded-sm leading-none hover:ring-tomatoDark hover:ring-2'
          >
            Close
          </button>
        </div>
        <div id='cartItem' className='p-3 text-white space-y-4'></div>
        <div className='foot bg-white text-tomato font-medium text-center p-4 absolute bottom-0 w-full'>
          <span>Place Order</span>
          <span id='total'> 0</span>
          <span>$</span>
        </div>
      </section> */}
    </div>
  );
};

export default Home;

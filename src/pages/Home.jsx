import Navbar from '../components/layouts/ui/Navbar';
import Hero from '../components/layouts/ui/Hero';
import ProductCatalog from '../components/layouts/ui/ProductCatalog';
import ProductSearchBar from '../components/layouts/ui/ProductSearchBar';

const Home = () => {
  return (
    <div className='m-0 p-4 box-border font-poppins  relative text-gray-600 '>
      <Navbar />
      <Hero />
      <ProductSearchBar />
      <ProductCatalog />
    </div>
  );
};

export default Home;

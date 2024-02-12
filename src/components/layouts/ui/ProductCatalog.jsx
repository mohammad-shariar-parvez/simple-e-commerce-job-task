import SideBar from './SideBar';
import ProductDisplay from './ProductDisplay';

const ProductCatalog = () => {
  return (
    <>
      <section id='productList' className='mb-8 md:max-w-7xl mx-auto  '>
        <div className=' md:grid md:grid-cols-5 gap-6 space-y-4 md:space-y-0 pb-14'>
          <SideBar />
          <ProductDisplay />
        </div>
      </section>
    </>
  );
};

export default ProductCatalog;

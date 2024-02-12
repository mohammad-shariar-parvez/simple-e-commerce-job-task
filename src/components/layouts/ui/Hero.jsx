import React from 'react';

const Hero = () => {
  return (
    <section className=' text-center mb-8 space-y-2 md:max-w-4xl mx-auto pt-[74px] '>
      <h1 className='text-2xl font-semibold  text-tomato   w-full  '>
        <span className=''>
          DISCOVER GIGALOGY
          <sup className='text-3xl leading-none font-semibold relative top-1'>
            &reg;
          </sup>
        </span>

        <span className='block md:inline'> E-COMMERCE SHOP</span>
      </h1>
      <div>
        <small className='text-tomato text-xs'> Menu </small>
        <i className='fa-solid fa-chevron-right text-black text-xs'></i>
        <small className='text-xs ms-1'>
          All Products
          <sup className='text-base leading-none relative top-[3px]'>&reg;</sup>
          Combos
        </small>
      </div>
      <p className='font-medium'>
        Explore our extensive collection
        <sup className='text-lg leading-none relative top-[3px]'>&reg;</sup>
        High-quality electronics and our best-selling home essentials
        <sup className='text-lg leading-none relative top-[3px]'>
          &reg;
        </sup>{' '}
      </p>
    </section>
  );
};

export default Hero;

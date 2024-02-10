import React from 'react';

const Hero = () => {
  return (
    <section className=' text-center mb-8 space-y-2 md:max-w-4xl mx-auto pt-[74px] '>
      <h1 className='text-2xl font-semibold  text-tomato'>
        CHICKEN CRISPER
        <sup className='text-3xl leading-none font-semibold relative top-1'>
          &reg;
        </sup>
        COMBOS
      </h1>
      <div>
        <small className='text-tomato text-xs'> Menu </small>
        <i className='fa-solid fa-chevron-right text-black text-xs'></i>
        <small className='text-xs'>
          Chicken Crisper
          <sup className='text-base leading-none relative top-[3px]'>&reg;</sup>
          Combos
        </small>
      </div>
      <p className='font-medium'>
        Find everything from our Big Mouth Burgers.
        <sup className='text-lg leading-none relative top-[3px]'>&reg;</sup>
        Full on Fatijas and our famous chicken Crispers
        <sup className='text-lg leading-none relative top-[3px]'>
          &reg;
        </sup>{' '}
      </p>
    </section>
  );
};

export default Hero;

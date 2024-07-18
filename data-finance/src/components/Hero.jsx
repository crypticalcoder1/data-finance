import React from 'react';

const Hero = () => {
  const handleGetStarted = () => {
    alert('You clicked Get Started!');
  };

  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH FINANCIAL ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
        <div className='md:text-5xl sm:text-xl font-bold'>
          <p className='md:text-5xl sm-text-4xl font-bold py-4'>Fast flexible financing for BTB, BTC, HFT.</p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, and HFT platforms</p>
        <button
          className='bg-[#00df9a] width-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 text-black'
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;


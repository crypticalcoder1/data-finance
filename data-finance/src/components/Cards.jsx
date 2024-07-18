import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  const handleStartTrial = (price) => {
    alert(`Starting trial for $${price}`);
    // Add additional logic here, such as navigating to a signup page or making an API call
  };

  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        
        {/* Single User Card */}
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt='Single User' />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl'>15000</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <button
            className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'
            onClick={() => handleStartTrial(15000)}
          >
            Start Trial
          </button>
        </div>
        
        {/* Two Users Card */}
        <div className='bg-gray-100 w-full shadow-xl flex flex-col p-4 md:0 my-8 rounded-lg duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt='Two Users' />
          <h2 className='text-2xl font-bold text-center py-8'>Two Users</h2>
          <p className='text-center text-4xl'>20000</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>800 GB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 10 GB</p>
          </div>
          <button
            className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'
            onClick={() => handleStartTrial(20000)}
          >
            Start Trial
          </button>
        </div>
        
        {/* Three Users Card */}
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt='Three Users' />
          <h2 className='text-2xl font-bold text-center py-8'>Three Users</h2>
          <p className='text-center text-4xl'>25000</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>1000 GB Storage</p>
            <p className='py-2 border-b mx-8'>3 Granted Users</p>
            <p className='py-2 border-b mx-8'>Send up to 20 GB</p>
          </div>
          <button
            className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'
            onClick={() => handleStartTrial(25000)}
          >
            Start Trial
          </button>
        </div>
      
      </div>
    </div>
  );
};

export default Cards;


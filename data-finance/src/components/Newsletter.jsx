import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Subscribing email: ${email}`);
    
  };

  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
              <input
                className='p-3 flex w-full rounded-md text-black'
                type="email"
                placeholder='Enter Email'
                value={email}
                onChange={handleInputChange}
              />
              <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 py-3' type="submit">
                Notify Me
              </button>
            </div>
          </form>
        </div>
        <p>
          We ensure that our clients' data is protected. Feel free to check our{' '}
          <span className='text-[#00df9a]'>Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;


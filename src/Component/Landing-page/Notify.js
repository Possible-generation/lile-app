import React from 'react';

function Notify() {
  return (
    <div className='md:ml-24 text-center md:text-left md:flex   md:place-content-between md:mt-44 mb-40'>
      <div className='md:pt-20'>
        <div className='text-[#FBDDBB] md:text-4xl md:font-bold '>
          Get notified when we update!
        </div>
        <div className='text-white text-lg font-normal pt-4'>
          Get notified when we add new items to our specials menu,
          <br /> update our price list of have promos!
        </div>
      </div>
      <div className='font-[Rubik]  md:mr-20 md:pt-36'>
        <form action=''>
          <input
            className='rounded md:w-[299px] text-lg  font-normal pl-4 py-1 mr-4'
            type='text'
            placeholder='gregphillips@gmail.com'
          />
          <button className='bg-[#FBDDBB] p-[5px] rounded'>Get notified</button>
        </form>
      </div>
    </div>
  );
}

export default Notify;

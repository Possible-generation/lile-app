import React from 'react';
import Googleplay from '../../Image/Landing/Googleplay.svg';
import Apple from '../../Image/Landing/apple.svg';
import Dish1 from '../../Image/Landing/Dish1.svg';

function Google() {
  return (
    <div className='md:flex md:place-content-between '>
      <div className='text-center  md:text-left md:ml-24 '>
        <div className='font-medium text-7xl  text-white mt-9 md:mt-64 '>
          Order <span className='text-[#FBDDBB]'>food</span> anytime,
          <br /> anywhere
        </div>
        <div className='font-normal text-xl text-white md:mt-8'>
          Browse from our list of specials to place your order and have food
          <br />
          delivered to you in no time. Affordable, tasty and fast!
        </div>
        <div className='mt-8'>
          <button className='pr-8'>
            <img src={Googleplay} alt='Googleplaylogo' />
          </button>
          <button>
            <img src={Apple} alt='' />
          </button>
        </div>
      </div>
      <div className='md:mr-44 md:mt-40 w-[400px] h-[400px] mx-auto'>
        <img src={Dish1} alt='' />
      </div>
    </div>
  );
}

export default Google;

import React from 'react';
import Stirfry from '../../Image/Landing/Stirfry.svg';
import Meatball from '../../Image/Landing/Meatball.svg';
import Burger from '../../Image/Landing/Burger.svg';

function SpecialMeal() {
  return (
    <div className='font-[Poppins]  '>
      <div className=' text-white font-bold text-4xl text-center mt-44 md:mt-72 '>
        Special Meals of the day!
      </div>
      <div className='text-white text-center font-normal font-lg mt-4'>
        Check our sepecials of the day and get discounts on all our meals
        <br />
        <span className='text-center'>
          {' '}
          and swift delivery to what ever location within Ilorin.
        </span>
      </div>
      <div className='md:flex mt-16  md:place-content-between '>
        <div className='grid place-content-center md:ml-24  m-10 '>
          <div>
            {' '}
            <img src={Stirfry} alt='' />
          </div>
          <div className='text-[#FBDDBB] text-center font-bold text-2xl '>
            Stir fry Pasta
          </div>
          <div className='text-white text-center font-normal font-lg'>
            Stir fry pasta yada yada yada
            <br /> <span className='text-center'> because of Sesan</span>
          </div>
        </div>
        <div className='grid place-content-center m-10 '>
          <div>
            {' '}
            <img src={Meatball} alt='' />
          </div>
          <div className='text-[#FBDDBB] text-center font-bold text-2xl '>
            Meat Balls
          </div>
          <div className='text-white text-center font-normal font-lg'>
            Stir fry pasta yada yada yada
            <br /> <span className='text-center'> because of Sesan</span>
          </div>
        </div>
        <div className='grid place-content-center md:mr-24  m-10'>
          <div>
            {' '}
            <img src={Burger} alt='' />
          </div>
          <div className='text-[#FBDDBB] text-center font-bold text-2xl '>
            Stir fry Pasta
          </div>
          <div className='text-white text-center font-normal font-lg'>
            Stir fry pasta yada yada yada
            <br /> <span className='text-center'> because of Sesan</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialMeal;

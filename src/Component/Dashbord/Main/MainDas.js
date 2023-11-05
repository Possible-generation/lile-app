import React, { useContext } from 'react';
// import Order1 from '../../../Image/Dashboard/order1.svg';
import { shopContext } from '../../../Context/shop-context';
// https://www.youtube.com/watch?v=tEMrD9t85v4
 
function MainDas({id, title, description, amount, img,}) {
  const {addToCart} = useContext(shopContext);
  return (
    <>
      <div className='grid  '>
        {/* <div>
        <div className=' text-[#00302E] pt-10 font-semibold text-2xl font-[Poppins]'>
          {greet} {user?.firstname}!
        </div>
        <div className='text-sm font-normal'>
          What delicious meal are you craving today?
        </div>
      </div> */}

        <div>
          <div className='box-border grid justify-items-center  w-[240px] h-[307px] rounded-md border-slate-100 border-2 hover:shadow-md  mt-1  p-4 pt-2 ml-8 mb-5 '>
            <div className=' '>
              <img src={img} alt='' />
            </div>
            <div className='text-[#00302E] font-semibold text-lg '>{title}</div>
            <div className='text-sm font font-normal text-black  text-center '>
              {' '}
              {description}
            </div>
            <div className='flex pt-10 space-x-10'>
              <div>{amount}</div>
              <div className='font-meduim text-meduim text-[#06E775]' onClick={()=>addToCart(id)}>
               <button> Add to Cart</button> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainDas;

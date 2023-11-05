import React from 'react';
import Order1 from '../../../Image/Dashboard/order1.svg';
 
function Cart_Order() {

  return (
    <>
      <div className='grid  '>
      

        <div>
          <table className='h-2/4 mt-4'>
          <div className='mt-6'>
              <div className='flex w-[700px]'>
            <div>
            <div className='flex'> <img className='w-[70px] h-[70px]' src={Order1} alt="" />
            <div className='my-auto pl-4'>
                <div className='text-[#00302E]'>stir per fry</div>
            </div>
            </div> 
            
            </div>
            
             <div className='p-6  justify-items-end ml-16 text-[#00302E]'>#1000</div>
              <div className='p-6  justify-items-end ml-16 text-[#00302E]'>Cooked</div>
             

       </div>
      
      </div>
        <div className='mt-6'>
              <div className='flex w-[700px]'>
            <div>
            <div className='flex'> <img className='w-[70px] h-[70px]' src={Order1} alt="" />
            <div className='my-auto pl-4'>
                <div className='text-[#00302E]'>stir per fry</div>
            </div>
            </div> 
            
            </div>
            
             <div className='p-6  justify-items-end ml-16 text-[#00302E]'>#1000</div>
              <div className='p-6  justify-items-end ml-16 text-[red]'>Cooking</div>
             

       </div>
      
      </div>
  
    </table>
        </div>
      </div>
    </>
  );
}

export default Cart_Order;

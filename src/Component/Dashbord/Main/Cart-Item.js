import React, { useContext } from 'react';
// import Order1 from '../../../Image/Dashboard/order1.svg';
import { shopContext } from '../../../Context/shop-context';
// https://www.youtube.com/watch?v=tEMrD9t85v4
 
function Cart_Item({id, title, description, amount, img,}) {
    const {cartItems, addToCart, removeFromCart, updateCartItemCount  } = useContext(shopContext);

  return (
    <>
      <div className='grid  '>
      

        <div>
          <table className='h-2/4 mt-4'>
      {/* <thead className='pb-8'>
        <tr>
        
          <th className='w-[400px]'>
            <div className='flex flex-start'>Item</div></th>
         
           <th>Qty</th>
          <th>Price</th>
          <th>Sub-Total</th>
    
        </tr>
      </thead> */}
          <div className='mt-6'>
              <div className='flex w-[700px]'>
            <div>
            <div className='flex'> <img className='w-[70px] h-[70px]' src={img} alt="" />
            <div className='my-auto pl-4'>
                <div className='text-[#00302E]'>{title}</div>
                 <div className='text-[red]'>Remove</div>
            </div>
            </div> 
            
            </div>
             <div className='ml-[150px]'>
                <button className='bg-[#F3C294] p-2 rounded mr-3  text-2xl ml-4 ' onClick={() => {addToCart(id)}}>+</button>
                <input className='w-8 bg-[#F3C294] pl-1 text-xl'  value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                <button className='bg-[#F3C294] text-[#00302E] p-2 rounded ml-3 font-semibold  text-2xl '  onClick={() => {removeFromCart(id)}}>-</button>
            </div> 
             <div className='p-6  justify-items-end ml-16'>{amount}</div>
            <div>
            </div>
       
       </div>
      
      </div>
  
    </table>
        </div>
      </div>
    </>
  );
}

export default Cart_Item;

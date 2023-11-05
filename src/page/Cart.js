import React, { useContext } from 'react';
import SideBar from '../Component/Dashbord/Main/SideBar';
import Nav from '../Component/Dashbord/Main/header';
// import Dash from '../Component/Dashbord/SideSlide/HomeDas';
import { shopContext } from '../Context/shop-context';
import { items } from '../Component/Dashbord/Main/Data';

// import MainDas from '../Component/Dashbord/Main/MainDas';
import CartItem from '../Component/Dashbord/Main/Cart-Item'
import{useNavigate} from  'react-router-dom';


function Cart() {
    const {cartItems, getTotalCartAmount} = useContext(shopContext);

    const  totalAmount = getTotalCartAmount();
    const navigate = useNavigate()

  return (
    <div className='h-screen w-screen font-[Poppins]'>
      <div className='flex space-x-8'>
        <SideBar />
        <div className='w-8/12'>
          <Nav />
          <div>
            <div>YOUR CART</div>
            <div className='h-[calc(100vh-200px)]  overflow-y-scroll no-scrollbar no-scrollbars'>
         {items.map((product) => {
            if (cartItems[product.id] !== 0) {
                return <CartItem key={product} {...product}/>;
            }
         })}
         </div>
        <div>
            <div className='text-[#00302E] text-center text-lg' >
                <p>Total : # {totalAmount}</p>
            </div>
            <div className='flex gap-4 justify-center '>
            <div><button className=' border-5 h-10  text-lg font-medium text-[#FBDDBB]  bg-[#00302E] text-center  px-5 rounded cursor-pointer' onClick={() => navigate('/Dashboard')}>Continue Shopping</button></div>
            <div><button className=' border-5 h-10  text-lg font-medium text-[#FBDDBB]  bg-[#00302E] text-center  px-5 rounded cursor-pointer'onClick={() => navigate('/Checkout')} >Checkout</button></div>
            </div>
        </div>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;


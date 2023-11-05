import React from 'react';
import Logo from '../../../Image/Landing/logo.svg';
import Homeimg from '../../../Image/Dashboard/homeimg.svg';
import Profileicon from '../../../Image/Dashboard/Profile.svg';
import Ordericon from '../../../Image/Dashboard/Ordericon.svg';
import Carticon from '../../../Image/Dashboard/Carticon.svg';
import { Link } from 'react-router-dom';

function SideBar() {

  return (
    <div className=' md:w-3/12 w-full  bg-[#FBFBFB] h-screen font-[Poppins]'>
      <div className='flex justify-center py-20'>
        <div className='w-[58px] h-[67px]'>
          <img src={Logo} alt='' />
        </div>
        <div className='mt-6 pl-4 trxt-[#00302E] text-3xl font-bold'>
          Lilies
        </div>
      </div>
      <div className='flex md:w-[267px] h-[50px]  bg-[#EFEFEF] rounded  ml-3 p-4 md:mr-1 mr-2'>
        <span>
          <img src={Homeimg} alt='' />
        </span>
        <Link to='/Dashboard'>
          <div className='font-normal text-base pl-6'>Dashboard</div>
        </Link>
      </div>

      <div className='flex md:w-[267px] h-[50px]  hover:bg-[#EFEFEF] rounded  ml-3 p-4 mt-3  md:mr-0 mr-3 '>
        <span>
          <img src={Profileicon} alt='' />
        </span>
        <div className='font-normal text-base pl-6'>Your profile</div>
      </div>
      <div className='flex md:w-[267px] h-[50px]  hover:bg-[#EFEFEF] rounded  ml-3 p-4 mt-3  md:mr-0 mr-3 '>
        <span>
          <img src={Ordericon} alt='' />
        </span>
        <Link to='/CartOrder'>
        <div className='font-normal text-base pl-6' >Orders</div>
        </Link>
          <div className='ml-24'>
          {/* <span className='bg-[green] p-2 rounded'>0 </span> */}
         </div>
      </div>
      <div className='flex md:w-[267px] h-[50px]  hover:bg-[#EFEFEF] rounded  ml-3 p-4 mt-3  md:mr-0 mr-3 '>
      
        <span>
          <img src={Carticon} alt='' />
        </span>
        <Link to='/Cart'>
        <div className='font-normal text-base pl-6'
        >Your Cart</div>
        </Link>
         <div className='ml-20'>
          {/* <span className='bg-[orange] p-2 rounded'>0</span> */}
         </div>
      </div>      
    </div>
  );
}

export default SideBar;

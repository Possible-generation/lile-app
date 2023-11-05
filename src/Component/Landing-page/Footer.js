import React from 'react';
import Apple from '../../Image/Landing/apple.svg';
import Googleplay from '../../Image/Landing/Googleplay.svg';
import Insta from '../../Image/Landing/Insta.svg';
import Twitter from '../../Image/Landing/Twitter.svg';
import Youtube from '../../Image/Landing/Youtube.svg';

function Footer() {
  return (
    <div className=' md:h-[393px]  bg-[#0B0D17] text-[font-[Inter]  '>
      <div className=' md:flex pt-14 md:mb-24 mb-10'>
        <div className='flex place-content-between mx-16 pt-4 md:mr-72 '>
          <div className=''>
            <div className='font-[Inter] font-medium text-lg text-[#F4F5F7]'>
              Company
            </div>
            <div className='font-[Inter] font-normal text-sm text-[#EEEFF4] pt-4'>
              About Us
            </div>
            <div className='font-[Inter] font-normal text-sm text-[#EEEFF4] pt-2'>
              Careers
            </div>
            <div className='font-[Inter] font-normal text-sm text-[#EEEFF4] pt-2'>
              Contact Us
            </div>
          </div>
          <div>
            <div className='font-[Inter] font-medium text-lg text-[#F4F5F7]'>
              Suport
            </div>
            <div className='font-[Inter] font-normal text-sm text-[#EEEFF4] pt-4'>
              Help Center
            </div>
            <div className='font-[Inter] font-normal text-sm text-[#EEEFF4] pt-2'>
              Safety Center
            </div>
          </div>
        </div>
        <div className='flex place-content-between mx-16 pt-4'>
          <div className='md:mr-72 '>
            <div className='font-[Inter] font-medium text-lg text-[#F4F5F7]'>
              Legal
            </div>
            <div className='font-[Inter] font-normal text-sm text-[#EEEFF4] pt-4'>
              Cookies Policy
            </div>
            <div className='font-[Inter] font-normal text-sm text-[#EEEFF4] pt-2'>
              Privacy Policy
            </div>
            <div className='font-[Inter] font-normal text-sm text-[#EEEFF4] pt-2'>
              Terms of Servies
            </div>
            <div className='font-[Inter] font-normal text-sm text-[#EEEFF4] pt-2'>
              Dispute Resolution
            </div>
          </div>
          <div>
            <div className='font-[Inter] font-medium text-lg text-[#F4F5F7]'>
              Install App
            </div>
            <div className=' w-[162px] h-[48px] pt-4'>
              <button>
                {' '}
                <img src={Googleplay} alt='' />
              </button>
            </div>
            <div className='  w-[162px] h-[48px] pt-4'>
              <button>
                {' '}
                <img src={Apple} alt='' />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='md:flex md:place-content-between md:mt-6'>
        <div className='text-sm font-normal text-[#D9DBE1] md:ml-40 ml-32'>
          © 2021 LILIES, All rights reserved
        </div>
        <div className='flex justify-center md:mr-16'>
          <img className='p-2' src={Insta} alt='' />
          <img className='p-2' src={Twitter} alt='' />
          <img className='p-2' src={Youtube} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Footer;

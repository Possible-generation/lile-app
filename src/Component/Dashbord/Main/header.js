import React from 'react';

function Header() {
  var myDate = new Date();
  var hours = myDate.getHours();
  var greet;
  if (hours < 12) greet = 'Good Morning';
  else if (hours >= 12 && hours <= 17) greet = 'Good Afternoon';
  else if (hours >= 17 && hours <= 24) greet = 'Good Evening';
  let user = JSON.parse(sessionStorage.getItem('user'));
  return (
    <div className='h-24'>
      <div className=''>
        <div className=' text-[#00302E] pt-10 font-semibold text-2xl font-[Poppins]'>
          {greet} {user?.firstname}!
        </div>
        <div className='text-sm font-normal'>
          What delicious meal are you craving today?
        </div>
      </div>
    </div>
  );
}

export default Header;

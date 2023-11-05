import React from 'react';

import Google from '../Component/Landing-page/Google';
import SpecialMeal from '../Component/Landing-page/Special_meal';
import Footer from '../Component/Landing-page/Footer';
import Newnav from '../Component/Landing-page/Newnav';
import Notify from '../Component/Landing-page/Notify';

function Landing() {
  return (
    <div className='bg-[#00302E] font-[Poppins] l:w-[1440px] '>
      <Newnav />
      <Google />
      <SpecialMeal />
      <Notify />
      <Footer />
    </div>
  );
}

export default Landing;

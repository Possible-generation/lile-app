import React from 'react';
import SideBar from '../Component/Dashbord/Main/SideBar';
import Nav from '../Component/Dashbord/Main/header';
import Dash from '../Component/Dashbord/SideSlide/HomeDas';

function Dashboard() {
  return (
    <div className='h-screen w-screen font-[Poppins]'>
      <div className='flex space-x-8'>
        <SideBar />
        <div className='w-9/12'>
          <Nav />
          <Dash />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

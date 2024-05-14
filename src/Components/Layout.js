import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header />
      <div className='flex'>
        <div className='w-1/4'>
          <Sidebar />
        </div>
        <div className='w-3/4'>
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default Layout;
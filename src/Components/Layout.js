import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
          <Header/>
          <div>
            <Sidebar/>
            <Outlet/>
          </div>

        </div>
    );
};

export default Layout;
import React from 'react';
import logo from "../assets/logo.jpg"

const Header = () => {
    return (
        <div className='flex justify-between bg-black text-white border bottom-1 p-2 font-bold'>
            <div>
                <img className='w-10' src={logo} alt="logo"/>
            </div>
            <div><input className='border w-96 p-2' placeholder='search'/><button className='bg-purple-500 rounded-sm p-2 ml-2'>Search</button></div>
            <div>
                <button>Login</button>
                <button className='bg-purple-500 rounded-sm p-2 ml-4'>Sign Up</button>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import logo from "../assets/logo.jpg"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../Redux/userSlice';

const Header = () => {
    const isLoggedIn=useSelector(store=>store?.user?.isLoggedIn);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleLogout=()=>{
        dispatch(setLogout());
        localStorage.clear();
        navigate("/login");
    }
    return (
        <div className='flex justify-between bg-black text-white border bottom-1 p-2 font-bold'>
            <div>
                <img className='w-10' src={logo} alt="logo"/>
            </div>
            <div><input className='border w-96 p-2' placeholder='search'/><button className='bg-purple-500 rounded-sm p-2 ml-2'>Search</button></div>
            {isLoggedIn?<button onClick={handleLogout} className='bg-purple-500 rounded-sm p-2 ml-4'>Logout</button>:<div>
                <button><Link to="/login">Login</Link></button>
                <button className='bg-purple-500 rounded-sm p-2 ml-4'><Link to="/register"> Sign Up</Link></button>
            </div>}
        </div>
    );
};

export default Header;
import React from 'react';
import './Navbar.css'
import Logo from '../../images/Logo.svg';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <div className='navbar-area flex justify-between items-center py-3 px-6'>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div className='ancore text-white'>
                    <NavLink className={({isActive})=> isActive? 'text-yellow-600' : 'default'} to="/Orders">Orders</NavLink>
                    <NavLink className={({isActive})=> isActive? 'text-yellow-600' : 'default'} to="/inventory">Manage Inventor</NavLink>
                    <NavLink className={({isActive})=> isActive? 'text-yellow-600' : 'default'} to="">Order View</NavLink>
                    <NavLink className={({isActive})=> isActive? 'text-yellow-600' : 'default'} to="/login">Login</NavLink>
                </div>

            </div>

        </>
    );
};

export default Navbar;
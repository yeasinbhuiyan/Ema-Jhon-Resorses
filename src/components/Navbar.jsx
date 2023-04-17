import React, { useContext, useState } from 'react';
import './Navbar.css'
import Logo from '../../images/Logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';


const Navbar = () => {
    const {user,LogOut} = useContext(AuthContext)
    const logOut =()=>{
        LogOut()
        .then(()=>{})
        .catch(()=>{})

    }

    return (
        <>
            <div className='navbar-area flex justify-between items-center py-3 px-6'>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div className='ancore text-white'>
                    <NavLink className={({isActive})=> isActive? 'text-yellow-600' : 'default'} to="/">Shop</NavLink>
                    <NavLink className={({isActive})=> isActive? 'text-yellow-600' : 'default'} to="/Orders">Orders</NavLink>
                    <NavLink className={({isActive})=> isActive? 'text-yellow-600' : 'default'} to="/inventory">Manage Inventor</NavLink>
                    <NavLink className={({isActive})=> isActive? 'text-yellow-600' : 'default'} to="/login">Login</NavLink>
                    <NavLink className={({isActive})=> isActive? 'text-yellow-600' : 'default'} to="/register">Register</NavLink>

                    {
                        user ?<> <span>{user.email}</span> <button onClick={logOut} className='btn btn-xs'>Log Out</button></>:
                        <Link  className='btn btn-xs' to='/login'>Login</Link>
                    }
                </div>

            </div>

        </>
    );
};

export default Navbar;
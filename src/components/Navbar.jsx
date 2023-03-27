import React from 'react';
import './Navbar.css'
import Logo from '../../images/Logo.svg';


const Navbar = () => {
    return (
        <>
            <div className='navbar-area flex justify-between items-center py-3 px-6'>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div className='ancore text-white'>
                    <a href="">Order</a>
                    <a href="">Order View</a>
                    <a href="">Manage Inventor</a>
                    <a href="">Login</a>
                </div>

            </div>

        </>
    );
};

export default Navbar;
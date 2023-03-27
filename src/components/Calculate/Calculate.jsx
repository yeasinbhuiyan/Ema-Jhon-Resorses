import React from 'react';
import './Calculate.css'

const Calculate = (props) => {
    const {cart} = props
    return (

        <div className='calculate-container'>
        <h1 className='text-xl text-center'>Order Summary: {cart.length} </h1>
        <p>order</p>
        <p>order</p>
        <p>order</p>
        <p>order</p>
        <p>order</p>

        </div>
    );
};

export default Calculate;
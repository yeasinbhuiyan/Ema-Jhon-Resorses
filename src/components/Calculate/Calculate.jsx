import React from 'react';
import './Calculate.css'

const Calculate = (props) => {
    // console.log(props)
    const {cart} = props
    let total = 0;
    let shipping =0;
    for(const result of cart){
      total = total + result.price
      shipping = shipping + result.shipping
      console.log(result)

    }

    const tax = total / 100 * 7
    const alltotal = total + shipping -tax
    return (

        <div className='calculate-container gap-4'>
        <h1 className='text-xl text-center mb-2'>Order Summary</h1>
        <p className='my-2'>Selected Item: {cart.length}</p>
        <p>Total Price: $ {total} </p>
        <p className='my-2'>Total Shipping Charge: {shipping}</p>
        <p>Tax: {tax.toFixed(2)}</p>
        <h5 className='font-semibold my-2'>Grand Total: {alltotal.toFixed(2)}</h5>

        </div>
    );
};

export default Calculate;
import React from 'react';
import './Calculate.css'

const Calculate = (props) => {
  console.log(props.cart)
   
    const {cart} = props
    let total = 0;
    let shipping =0;
    // step 3rd set quantity 
    let quantity = 0;

    for(const result of cart){
      // step 3 auto quantity 0 to covert 1
      if(result.quantity === 0){
        result.quantity = 1
      }
      // step 1 set quantity for auto show 
      total = total + result.price * result.quantity
      shipping = shipping + result.shipping
      quantity = quantity + result.quantity

    }

    const tax = total / 100 * 7
    const alltotal = total + shipping -tax
    return (

        <div className='calculate-container gap-4'>
        <h1 className='text-xl text-center font-semibold mb-2'>Order Summary</h1>
        <p className='my-2'>Selected Item: {quantity}</p>
        <p>Total Price: $ {total}</p>
        <p className='my-2'>Total Shipping Charge: {shipping}</p>
        <p>Tax:</p>
        <h5 className='font-semibold my-2'>Grand Total: {alltotal}</h5>

        </div>
    );
};

export default Calculate;
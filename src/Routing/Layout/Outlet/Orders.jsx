import React, { useState } from 'react';
import Calculate from '../../../components/Calculate/Calculate';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../../ReviewItem/ReviewItem';
import './Orders.css'
import { removeFromDb } from '../../../../utilities/fakedb';

const Orders = () => {
    const SavedCart = useLoaderData()

    const [cart,setCart] = useState(SavedCart)

    const handleRemoveFormCart =(id)=>{
        
       const remaning=  cart.filter(singleCart => singleCart.id != id)

       setCart(remaning)

       removeFromDb(id)

    }
    

    return (
        <div className='grid md:grid-cols-2'>
            <div className='review-container'> 

         {
            cart.map(product => <ReviewItem handleRemoveFormCart={handleRemoveFormCart} key={product.id} product={product}></ReviewItem>)
         }

            </div>

            <div>
                <Calculate cart={cart }></Calculate>
            </div>
        </div>
    );
};

export default Orders;
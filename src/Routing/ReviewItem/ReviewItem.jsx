import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,handleRemoveFormCart}) => {
    const {_id,name,price,img,quantity} = product
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details ml-2'>
                <p className='text-xl font-semibold'>{name}</p>
                <p>Price : <span className='text-orange-300'>${price}</span></p>
                <p>Quantity : <span className='text-orange-300'>${quantity}</span></p>

            </div>
            <button onClick={()=>handleRemoveFormCart(_id)}  className='btn-delete m-auto'><FontAwesomeIcon className='text-red-400' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;
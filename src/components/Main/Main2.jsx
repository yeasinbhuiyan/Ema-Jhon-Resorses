import React from 'react';
import './Main2.css'
const Main2 = (props) => {
    const { img, name, id, price, ratings } = props.singleData
    const handleAddCart = props.handleAddCart
    
    return (
        <>

            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-full h-72' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <div className='mt-2'>
                        <p>Ratings: {ratings} Start</p>

                    </div>
                </div>
                <button onClick={()=>handleAddCart(props.singleData)} style={{
                    marginBottom: '0px',
                    width: '100%', padding: '10px',
                    borderRadius: '0 0 18px 18px'
                }} className='add-cart'>Add To Cart</button>
            </div>
        </>
    );
};

export default Main2;
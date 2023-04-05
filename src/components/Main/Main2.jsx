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
                  <div>
                  <p>Price: ${price}</p>
                 
                 <p>Ratings: {ratings} Start</p>

                  </div>
                </div>
                <button onClick={()=>handleAddCart(props.singleData)} style={{
                    marginBottom: '0px',
                    width: '100%', padding: '10px',
                    borderRadius: '0 0 15px 15px'
                }} className='add-cart'>Add To Cart</button>
            </div>
        </>
    );
};

export default Main2;
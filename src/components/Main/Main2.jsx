import React from 'react';

const Main2 = (props) => {
    const {img,name,id,price,ratings} = props.singleData
    return (
        <>

            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-full h-72' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                   <div className='mt-2'>
                    <p>Ratings: {} Start</p>

                   </div>
                </div>
                   <button style={{marginBottom : '0px', width: '100%' ,padding : '10px' ,borderRadius:'0 0 18px 18px',backgroundColor : 'orange'}} className='add-cart'>Add To Cart</button>
            </div>
        </>
    );
};

export default Main2;
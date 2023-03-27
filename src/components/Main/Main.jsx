import React, { useEffect, useState } from 'react';
import Main2 from './Main2';
import './Main.css'
import Calculate from '../Calculate/Calculate';

const Main = () => {
    const [data, setData] = useState([])

    const [cart,setCart] = useState([])

    const handleAddCart =(product)=>{
        const result = [...cart,product]
        setCart(result)

    }

    useEffect(() => {
        fetch('../../../fakeData/products.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
      <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-2 my-5 lg:grid-cols-3 px-5 gap-4'>
            {
                data.map(singleData => <Main2 handleAddCart={handleAddCart}  singleData={singleData}></Main2>)
            }
        </div>
  
            <div>
<Calculate cart={cart}></Calculate>

            </div>

      </div>

    );
};

export default Main;
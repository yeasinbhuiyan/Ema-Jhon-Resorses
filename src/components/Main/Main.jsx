import React, { useEffect, useState } from 'react';
import Main2 from './Main2';
import './Main.css'

const Main = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('../../../fakeData/products.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
      <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-2 my-5 lg:grid-cols-3 px-5 gap-4'>
            {
                data.map(singleData => <Main2 singleData={singleData}></Main2>)
            }
        </div>
        {/* <div>
            <h1>this is header</h1>
        </div> */}

            <div>
                <h1 className='text-xl text-center'>Order Summary </h1>
            </div>

      </div>

    );
};

export default Main;
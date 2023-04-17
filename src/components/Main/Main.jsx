import React, { useEffect, useState } from 'react';
import Main2 from './Main2';
import './Main.css'
import Calculate from '../Calculate/Calculate';
import { addToDb, deleteShoppingCart, getShoppingCart, removeFromDb } from '../../../utilities/fakedb';

const Main = () => {
    const [data, setData] = useState([])

    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])




    // 2nd step show automatic storage data 

    useEffect(() => {
        const shoppingCart = getShoppingCart()
        const savedCart = []
        //    step 1 get id 

        for (const id in shoppingCart) {


            // step 2 get the product using by id
            const addedProduct = data.find(product => product.id === id)

            // jodi addedProduct thake tahole quantity boshbe addedProduct er bitor
            if (addedProduct) {
                // step 3 get quantity of the product 
                const quantity = shoppingCart[id]
                addedProduct.quantity = quantity

                // step 4 add to addedProduct to the saved cart 
                savedCart.push(addedProduct)

            }


        }
        setCart(savedCart)

        // dependensi karone amra 2 bar abr call kore  ty dependensi dewa lage
    }, [data])

    const handleAddCart = (product) => {

        // 1st step add to calculte in cart 

        const result = [...cart, product]
        setCart(result)
        addToDb(product.id)


    }
    const handleClearToCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2 my-5 lg:grid-cols-3 px-5 gap-4'>
                {
                    data.map(singleData => <Main2 key={singleData.id} handleAddCart={handleAddCart} singleData={singleData}></Main2>)
                }
            </div>

            <div className='lg:ml-10'>

                <Calculate  handleClearToCart={handleClearToCart} cart={cart}></Calculate>

            </div>

        </div>

    );
};

export default Main;




































/*
stored auto matic details



    2 nd step to show shopping cart 


    useEffect(() => {
        // 1st step get stored details 
        const shoppingCart = getShoppingCart()
        const savedCart = []
        for (const id in shoppingCart) {
            // 2nd step get the id in show full element
            const addedCart = data.find(product => product.id === id)
            if (addedCart) {
                // 3 rd step set id on this element 
                const quantity = shoppingCart[id]
                addedCart.quantity = quantity

                // step 4 set this element in savedCart 
                savedCart.push(addedCart)
            }
        }
        setCart(savedCart)

    }, [data])
    */



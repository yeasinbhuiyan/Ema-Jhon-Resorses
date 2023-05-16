import React, { useEffect, useState } from 'react';
import Main2 from './Main2';
import './Main.css'
import Calculate from '../Calculate/Calculate';
import { addToDb, deleteShoppingCart, getShoppingCart, removeFromDb } from '../../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';

const Main = () => {
    const [data, setData] = useState([])




    const { totalProducts } = useLoaderData()
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)


    const calculatePage = Math.ceil(totalProducts / itemsPerPage)


    const paginationBtn = [...Array(calculatePage).keys()]
    console.log(paginationBtn)


    const [cart, setCart] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`);
            const jsonData = await response.json();
            setData(jsonData);
        };

        fetchData();
    }, [currentPage, itemsPerPage]);



    // 2nd step show automatic storage data 

    useEffect(() => {
        const shoppingCart = getShoppingCart()


        const ids = Object.keys(shoppingCart)



        fetch('http://localhost:5000/productsIds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(ProductCart => {
                const savedCart = []


                for (const id in shoppingCart) {


                    // step 2 get the product using by id
                    const addedProduct = ProductCart.find(product => product._id === id)

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

            })


        //    step 1 get id 


        // dependensi karone amra 2 bar abr call kore  ty dependensi dewa lage
    }, [data])

    const handleAddCart = (product) => {

        // 1st step add to calculte in cart 


        const result = [...cart, product]
        setCart(result)
        addToDb(product._id)

        // const singleProduct = data.find(df => df._id === product._id)
        // if (singleProduct) {

        //     const rest = data.filter(df => df._id !== product._id)
        //     singleProduct.quantity++
        //     setCart([...rest, singleProduct])
        //     addToDb(product._id)

        // }
        // else {
        //     const result = [...cart, product]
        //     setCart(result)
        //     addToDb(product._id)

        // }




    }
    const handleClearToCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    const options = [5, 10, 15, 20]

    const handleSelectOption = (event) => {
        const selectItemsPerPage = event.target.value
        setItemsPerPage(selectItemsPerPage)
        currentPage(0)

    }




    return (
        <>
            <div className='container'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-5 lg:grid-cols-3 px-5 gap-4'>
                    {
                        data.map(singleData => <Main2 key={singleData._id} handleAddCart={handleAddCart} singleData={singleData}></Main2>)
                    }
                </div>

                <div className='lg:ml-10'>

                    <Calculate handleClearToCart={handleClearToCart} cart={cart}></Calculate>

                </div>

            </div>
            <div className='mx-auto text-center mb-10'>
                <p> currentPage: {currentPage}</p>
                {
                    paginationBtn.map(number => <button key={number}
                        onClick={() => setCurrentPage(number)}

                        className={currentPage === number ? 'btn-xs bg-orange-400' : 'btn btn-xs'}>{number}</button>)
                }
                <select value={itemsPerPage} onChange={handleSelectOption}>

                    {
                        options.map((option => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        )))
                    }
                </select>

            </div>

        </>

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



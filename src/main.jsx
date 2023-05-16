import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './Routing/Layout/Home';
import Orders from './Routing/Layout/Outlet/Orders';
import Inventory from './Routing/Layout/Outlet/Inventory';
import cartProductsLoader from './Routing/Loaders/CartProductsLoaders';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Register from './components/Login&Register/Register';
import Login from './components/Login&Register/Login';
import Checkout from './components/Calculate/Checkout';
import PrivetProvider from './components/AuthProvider/PrivetProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Main></Main>,
        loader: ()=> fetch('http://localhost:5000/totalProducts')
      },
      {
        path: '/orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: '/inventory',
        element: <PrivetProvider><Inventory></Inventory></PrivetProvider>
      },
      {
        path: '/login',
        element: <Login></Login>

      },
      {
        path: '/register',
        element: <Register></Register>

      },
      {
        path: '/checkout',
        element: <PrivetProvider><Checkout></Checkout></PrivetProvider>

      },
    ]


  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

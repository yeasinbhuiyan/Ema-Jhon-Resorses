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
import Login from './Routing/Layout/Outlet/Login';
import cartProductsLoader from './Routing/Loaders/CartProductsLoaders';

const router = createBrowserRouter([
  {
    path : '/',
    element:<Home></Home>,
    children : [
      {
        path : '/',
        element:<Main></Main>
      },
      {
        path : '/orders',
        element:<Orders></Orders>,
        loader : cartProductsLoader
      },
      {
        path : '/inventory',
        element:<Inventory></Inventory>
      },
      {
        path : '/login',
        element : <Login></Login>

      }
    ]


}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import LandingPage from './pages/LandingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

const App = () => {

    const routes = createBrowserRouter([
        {
            path:"/",
            element:<LandingPage/>
        },
        {
            path:"/applayout",
            element:<AppLayout/>,
            children:[
                {
                    path:"/applayout",
                    element:<ProductsPage/>
                },
                {
                    path:"/applayout/cart",
                    element:<CartPage/>
                },
                {
                    path:"/applayout/login",
                    element:<LoginPage/>
                },
                {
                    path:"/applayout/register",
                    element:<RegisterPage/>
                }
            ]
        }
    ])
  return <RouterProvider router={routes}></RouterProvider>
}

export default App
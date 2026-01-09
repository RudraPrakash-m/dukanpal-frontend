import React from 'react'
import LandingPage from './pages/LandingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ErrorPage from './pages/ErrorPage'

const App = () => {

    const routes = createBrowserRouter([
        {
            path:"/",
            element:<LandingPage/>,
            errorElement: <ErrorPage/>
        },
        {
            path:"/applayout",
            element:<AppLayout/>,
            errorElement:<ErrorPage/>,
            children:[
                {
                    index:true,
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
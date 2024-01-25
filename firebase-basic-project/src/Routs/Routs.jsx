import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';

const Myrouter = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        }
        ,
        {
            path:'/login',
            element:<Login></Login>,
        }
      ]
    },
  ]);
  




export default Myrouter;
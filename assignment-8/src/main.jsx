import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation';
import Statistics from './Components/Statistics/statistics';
import Header from './Components/Header/Header';
import Details from './Components/Details/Details';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Components/Provider/AuthProvider';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {path: "/",
      element: <Home></Home>,
      loader: ()=>fetch('/data.json')
    },
    {path: "/donation",
      element: <Donation></Donation>,
      loader: () => fetch('/data.json')
    },

      {path: "/cardDetails/:id",
      element: <Details></Details>,
      loader: () => fetch(`data.json`)
    },
    {
      path: "/statistics",
      element: <Statistics></Statistics>
    },
    {
      path: "/login",
      element: <Login></Login>
    }
    ,
    {
      path: "/register",
      element: <Register></Register>
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} ></RouterProvider>
    </AuthProvider>
    
  </React.StrictMode>,
)

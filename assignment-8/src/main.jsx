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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,

    children: [
      {path: "/",
      element: <Home></Home>,
      loader: ()=>fetch(`data.json`)
    },
      {path: "/donation",
      element: <Donation></Donation>
    },
    {
      path: "/statistics",
      element: <Statistics></Statistics>
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './RouterProvider'
import './main.css'
import Store from "./Redux/Store.jsx";
import { Provider } from "react-redux";


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <RouterProvider router={router} />
   </Provider>
)

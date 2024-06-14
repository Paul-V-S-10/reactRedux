import {createBrowserRouter} from 'react-router-dom'
import MainUser from './User/MainUser/MainUser'
import HomePage from './User/Pages/HomePage/HomePage'
import Cart from './User/Pages/Cart/Cart'
import Appliances from './User/Pages/Appliances/Appliances'
import Electronics from './User/Pages/Electronics/Electronics'
import Fasion from './User/Pages/Fasion/Fasion'
import Furniture from './User/Pages/Furniture/Furniture'
import Grocery from './User/Pages/Grocery/Grocery'
import Mobiles from './User/Pages/Mobiles/Mobiles'
import Travel from './User/Pages/Travel/Travel'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainUser/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'/appliances',
                element:<Appliances/>
            },
            {
                path:'/electronics',
                element:<Electronics/>
            },
            {
                path:'/fasion',
                element:<Fasion/>
            },
            {
                path:'/furniture',
                element:<Furniture/>
            },
            {
                path:'/grocery',
                element:<Grocery/>
            },
            {
                path:'/mobiles',
                element:<Mobiles/>
            },
            {
                path:'/travel',
                element:<Travel/>
            }
        ]
    }
])
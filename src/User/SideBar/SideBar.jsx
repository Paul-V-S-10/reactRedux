import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const SideBar = () => {
    const theme = useSelector(state => state.counter.value)
    return (
        <div className={theme ? 'sideBar' : 'sideBarD'}>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'black', width: '100' }}>
            <div className="part1">🏠 Home</div>
            </Link>
            
            <div className="part2">
                <Link to={'/grocery'} style={{ textDecoration: 'none', color: 'black', width: '100' }}>
                <div className="items">
                    <img src="groceries.png" alt="" />
                    <div className="itemName">Grocery</div>
                </div>
            </Link>
                <Link to={'/mobiles'} style={{ textDecoration: 'none', color: 'black', width: '100' }}>
                <div className="items">
                    <img src="https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="" />
                    <div className="itemName">Mobiles</div>
                </div>
            </Link>
                <Link to={'/appliances'} style={{ textDecoration: 'none', color: 'black', width: '100' }}>
                <div className="items">
                    <img src="/appliance.png" alt="" />
                    <div className="itemName">Appliances</div>
                </div>
            </Link>
                <Link to={'/travel'} style={{ textDecoration: 'none', color: 'black', width: '100' }}>
                <div className="items">
                    <img src="https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="" />
                    <div className="itemName">Travel</div>
                </div>
            </Link>
                <Link to={'/fasion'} style={{ textDecoration: 'none', color: 'black', width: '100' }}>
                <div className="items">
                    <img src="/fasion.png" alt="" />
                    <div className="itemName">Fasion</div>
                </div>
            </Link>
                <Link to={'/electronics'} style={{ textDecoration: 'none', color: 'black', width: '100' }}>
                <div className="items">
                    <img src="/responsive.png" alt="" />
                    <div className="itemName">Electronics</div>
                </div>
            </Link>
                <Link to={'/furniture'} style={{ textDecoration: 'none', color: 'black', width: '100' }}>
                <div className="items">
                    <img src="furniture.png" alt="" />
                    <div className="itemName">Furniture</div>
                </div>
            </Link>
            </div>
            <Link to={'/Cart'} style={{ textDecoration: 'none', color: 'black', width: '100' }}>
                <div className="part3">
                    🛒 Cart
                </div>
            </Link>
        </div>
    )
}

export default SideBar
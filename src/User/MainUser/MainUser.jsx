import React from 'react'
import NavBar from '../NavBar/NavBar'
import SideBar from '../SideBar/SideBar'
import './MainUser.css'
import { Outlet } from 'react-router-dom'

const MainUser = () => {
  return (
    <div className='mainUser'>
      <NavBar/>
      <div className="content">
        <SideBar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainUser
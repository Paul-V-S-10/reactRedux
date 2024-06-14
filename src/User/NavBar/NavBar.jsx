import React from 'react'
import './NavBar.css'
import {useDispatch,useSelector} from 'react-redux'
import { change } from '../../Redux/CounterSlice'

const NavBar = () => {
  const theme = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className={theme ? 'navBar' : 'navBarD'}>
      <div className="part1">
        <img className='logo' src="/logo.png" alt="" />
        <div className="title">My Store</div>
      </div>
      <div className="part2">
        <input type="search" placeholder='Search'/>
      </div>
      <div className="part3">
        <img onClick={()=>{
          dispatch(change())
        }} className='darkMode' src={theme ? 'idea (1).png' : 'idea.png'} alt="" />
    <img className='profile' src="profile.png" alt="" />
      </div>
    </div>
  )
}

export default NavBar
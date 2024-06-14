import React from 'react'
import './Electronics.css'
import {useDispatch, useSelector} from 'react-redux'

const Electronics = () => {
  const theme = useSelector(state => state.counter.value)
  return (
    <div className={theme ? 'electronics' : 'electronicsD'}>
            <div className="card">
                <img className='cardimg' src="horlics.jpg" alt="" />
                <div className="commodityName">Horlics</div>
                <div className="price">Rs. 100</div>
                <button className='button'>Add to Cart</button>
            </div>
            <div className="card">
                <img className='cardimg' src="horlics.jpg" alt="" />
                <div className="commodityName">Horlics</div>
                <div className="price">Rs. 100</div>
                <button className='button'>Add to Cart</button>
            </div>
            <div className="card">
                <img className='cardimg' src="horlics.jpg" alt="" />
                <div className="commodityName">Horlics</div>
                <div className="price">Rs. 100</div>
                <button className='button'>Add to Cart</button>
            </div>
            <div className="card">
                <img className='cardimg' src="horlics.jpg" alt="" />
                <div className="commodityName">Horlics</div>
                <div className="price">Rs. 100</div>
                <button className='button'>Add to Cart</button>
            </div>
            <div className="card">
                <img className='cardimg' src="horlics.jpg" alt="" />
                <div className="commodityName">Horlics</div>
                <div className="price">Rs. 100</div>
                <button className='button'>Add to Cart</button>
            </div>
            <div className="card">
                <img className='cardimg' src="horlics.jpg" alt="" />
                <div className="commodityName">Horlics</div>
                <div className="price">Rs. 100</div>
                <button className='button'>Add to Cart</button>
            </div>
        </div>
  )
}

export default Electronics
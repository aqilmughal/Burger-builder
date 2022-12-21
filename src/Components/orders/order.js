import React from 'react'
import Header from '../Header/Header'
import './order.css'

function order() {
  return (
    <>
    <Header/>
    <div className='order_l'>
        <div className='i_l'>
            <h5>ingredient</h5>
            Lettuce
            Bacon
            Cheese
            Meat
        </div> 
        <div className='price'>
            price usd
        </div>
        <a className='builder1'href='/order'></a>
    </div>
    </>
  )
}

export default order
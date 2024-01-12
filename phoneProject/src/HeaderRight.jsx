import React, { useContext } from 'react'
import productContext from './context/ProductContext'

export default function HeaderRight() {
  
  const {productCount}=useContext(productContext);
  return (
    <div className='righHeader'>
      {productCount>0 &&  <span>{productCount}</span>}
     
      <img src='images/cart-icon.png'/>
    </div>
  )
}

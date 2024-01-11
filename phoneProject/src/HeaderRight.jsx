import React from 'react'

export default function HeaderRight({productsCount}) {
  
  return (
    <div className='righHeader'>
      {productsCount>0 &&  <span>{productsCount}</span>}
     
      <img src='images/cart-icon.png'/>
    </div>
  )
}

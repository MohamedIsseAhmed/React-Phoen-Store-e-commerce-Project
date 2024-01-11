import React from 'react';
import { Link } from 'react-router-dom';
import convertToUSD from './convertToUSD'
export default function Cart({cartData, productCount,productsCost,deleteCart}) {
  

  return (
  
    <>
    <div className='cartSummery'>
      <span className='summerText'>Cart Summery</span>
      <button onClick={()=>deleteCart()} className='deleteButton'>Delete Cart</button>
        {cartData.map((cart,i)=>{
          return(
            <>
              
              <di key={cart.id} className='productItemCart'>
               
                <span>{cart.name}</span>
               
                
                <span className='price'>Price: {convertToUSD(cart.productInfo.productValue)} $</span>
              </di>
            

            </>
          ) 
        })
        
        }
      <div className="payContainerCart">
        <span>Products : {productCount}</span>
        <span className='costText'>Total Cost:{ ' $'+productsCost}</span>
       
      </div>
      <Link to={'payForm'}><button className="goToPay">Go To Pay</button></Link>

    </div>
    </>
  )
}

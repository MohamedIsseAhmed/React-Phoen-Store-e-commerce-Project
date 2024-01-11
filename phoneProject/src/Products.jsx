import React from 'react'
import Cart from './cart';
import centsToUSD from './convertToUSD';
export default function Products({ data,cart,productAdded,productCount,productsCost,handleAddCart,deleteCart }) {

  
  return (
    <>

    <main className='productsContainer'>
      <ul className='productList'>
        {data.map((d) => (
          <li onClick={()=>handleAddCart(d.id)} key={d.id} className='productItem'>
            <p>{d.name}</p>
            <img src={d.image} alt={d.name} />
            <p className='price'>Price: {(centsToUSD(d.productInfo.productValue))} $</p>
            <button  onClick={()=>handleAddCart(d.id)} className='addButton'>Add</button>
            
          </li>
        ))}
      </ul>
      
      {productAdded &&
      <Cart cartData={cart} productAdded={productAdded} productCount={productCount} productsCost={productsCost} deleteCart= {deleteCart} /> 
      }
    </main>
   
    </>
  );
}

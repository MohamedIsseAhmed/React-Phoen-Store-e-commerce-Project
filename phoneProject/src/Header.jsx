import React from 'react'
import HeaderRight from './HeaderRight'
import HeaderMiddle from './HeaderMiddle'
import HeaderLeft from './HeaderLeft'
import { useContext } from 'react'
import productContext from './context/ProductContext'
function Header() {
  const {productCounts,serach,setSearch}=useContext(productContext);
  return (

    <main className='header'>

      <HeaderLeft/>
      <HeaderMiddle search={serach} setSearch={setSearch}/>
      <HeaderRight productsCount={productCounts}/>

    </main>
  )
}

export default Header
import React from 'react'
import HeaderRight from './HeaderRight'
import HeaderMiddle from './HeaderMiddle'
import HeaderLeft from './HeaderLeft'
function Header({productsCounts,serach,setSearch}) {
  return (

    <main className='header'>

      <HeaderLeft/>
      <HeaderMiddle search={serach} setSearch={setSearch}/>
      <HeaderRight productsCount={productsCounts}/>

    </main>
  )
}

export default Header
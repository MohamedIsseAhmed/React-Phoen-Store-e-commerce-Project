import React from 'react'

export default function HeaderMiddle({search,setSearch}) {


  return (
    <form className='inputForm'>
      <label id='search' />
      <input
       name='search'
       placeholder='Search Product'
       value={search}
       onChange={(e)=>setSearch(e.target.value)}

      />
    </form>
  )
}

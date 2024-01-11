import React from 'react'
import productContext from './ProductContext'
export default function ProductDataProvider({children}) {
  return (

   < productContext.Provider>
      {children}
   </productContext.Provider>
  )
}

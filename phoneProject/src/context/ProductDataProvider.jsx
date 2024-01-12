// import React from 'react'
// import productContext from './ProductContext'
// import { useState,useEffect } from 'react'
// import Header from './Header'
// // import {phonesData} from '../data/phonesData'
// import { phonesData } from '../../data/phonesData'
// import Products from './Products';
// import centsToUSD from './convertToUSD';
// export default function ProductDataProvider({children}) {
 

//   const [data, setData] = useState(phonesData);
//   const [search,setSearch]=useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [productAdded,setProductAdded]=useState(false);
//   const [cart,setCart]=useState([]);
//   const [productCount,setProductCount]=useState(0);
//   const [productsCost,setProductsCost]=useState(0);

//   useEffect(() => {

//     const timeToFilter=500;
//     console.log(typeof data)
//     setTimeout(()=>{
//       const filteredResults = data.filter((data) =>
//       ((data.name).toLowerCase()).includes(search.toLowerCase())
//       || ((data.productInfo.version).toLowerCase()).includes(search.toLowerCase()));

      
//       setSearchResults(filteredResults);
//     },timeToFilter)
   
//   }, [data, search])
  
//   function handleAddCart(id) {
//     const product = data.find((p) => p.id === id);
//     let productCount = 0;
//     let productCost = 0;
//     const containsObject = cart.find((p) => p.id === id);
  
//     if (containsObject) {
   
//       const updatedCart = cart.map((cartItem) => {
//         if (cartItem.id === id) {
//           return {
//             ...cartItem,
//             piece: cartItem.piece + 1,
//             price: product.productInfo.productValue * (cartItem.piece + 1)
//           };
//         }
//         return cartItem;
//       });
  
//       updatedCart.forEach((cart) => {
//         productCost += cart.price;
//         productCount += cart.piece;
//       });
//       productCost=centsToUSD(productCost);
//       setProductAdded(true);
//       setProductCount(productCount);
//       setProductsCost(productCost);
//       setCart(updatedCart);
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//     } else {
//       const cartObject = {
//         id: product.id,
//         name: product.name,
//         image: product.image,
//         productInfo: product.productInfo,
//         piece: 1,
//         price: product.productInfo.productValue
//       };
  
//       const newCart = [...cart, cartObject];
  
//       newCart.forEach((cart) => {
//         productCount += cart.piece;
//         productCost += cart.price;
//       });
//       productCost= centsToUSD(productCost)
//       setProductAdded(true);
//       setProductCount(productCount);
//       setProductsCost(productCost);
//       setCart(newCart);
//       localStorage.setItem('cart', JSON.stringify(newCart));
//     }
//   }
  
//   const deleteCart=()=>{
//     setCart([]);
//     setProductAdded(false);
//     setProductCount(0);
//     setProductsCost(0);
//   }
//   return (
//    <productContext.Provider value={{data,searchResults,
//     cart, productAdded,productAdded,productCount,productCount, productsCost,productsCost,
//     handleAddCart, handleAddCart, deleteCart, deleteCart,setSearch}}>
//       {children}
//    </productContext.Provider>
//   )
// }

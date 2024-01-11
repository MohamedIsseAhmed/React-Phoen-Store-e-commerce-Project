import { useState,useEffect } from 'react'
import Header from './Header'
import {phonesData} from '../data/phonesData'
import Products from './Products';
import centsToUSD from './convertToUSD';
import PaForm from './PayForm';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
function App() {
  const [data, setData] = useState(phonesData);
  const [search,setSearch]=useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [productAdded,setProductAdded]=useState(false);
  const [cart,setCart]=useState([]);
  const [productCount,setProductCount]=useState(0);
  const [productsCost,setProductsCost]=useState(0);

  useEffect(() => {

    const timeToFilter=500;
    setTimeout(()=>{
      const filteredResults = data.filter((data) =>
      ((data.name).toLowerCase()).includes(search.toLowerCase())
      || ((data.productInfo.version).toLowerCase()).includes(search.toLowerCase()));

      
      setSearchResults(filteredResults);
    },timeToFilter)
   
  }, [data, search])
  
  function handleAddCart(id) {
    const product = data.find((p) => p.id === id);
    let productCount = 0;
    let productCost = 0;
    const containsObject = cart.find((p) => p.id === id);
  
    if (containsObject) {
   
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === id) {
          return {
            ...cartItem,
            piece: cartItem.piece + 1,
            price: product.productInfo.productValue * (cartItem.piece + 1)
          };
        }
        return cartItem;
      });
  
      updatedCart.forEach((cart) => {
        productCost += cart.price;
        productCount += cart.piece;
      });
      productCost=centsToUSD(productCost);
      setProductAdded(true);
      setProductCount(productCount);
      setProductsCost(productCost);
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      const cartObject = {
        id: product.id,
        name: product.name,
        image: product.image,
        productInfo: product.productInfo,
        piece: 1,
        price: product.productInfo.productValue
      };
  
      const newCart = [...cart, cartObject];
  
      newCart.forEach((cart) => {
        productCount += cart.piece;
        productCost += cart.price;
      });
      productCost= centsToUSD(productCost)
      setProductAdded(true);
      setProductCount(productCount);
      setProductsCost(productCost);
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  }
  
  const deleteCart=()=>{
    setCart([]);
    setProductAdded(false);
    setProductCount(0);
    setProductsCost(0);
  }
  return (
    <>
  
    
      <Router>
           <Header productsCounts={productCount} serach={search} setSearch={setSearch}/>
          {/* <PaForm/> */}
          <Routes >
            <Route path='/' element={ <Products data={searchResults} 
            cart={cart} productAdded={productAdded} productCount={productCount} productsCost={productsCost} 
            handleAddCart={handleAddCart} deleteCart={deleteCart}/>}>

            </Route>
            <Route path='/payForm' element={<PaForm productsCost={productsCost} productsCount={productCount}/>}>

            </Route>
          </Routes>
         
      </Router>
     
    </>
  )
}

export default App

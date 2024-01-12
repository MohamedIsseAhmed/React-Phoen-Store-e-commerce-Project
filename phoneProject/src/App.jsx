
import Header from './Header'
import Products from './Products';

import PaForm from './PayForm';
import { ProductDataProvider } from './context/ProductContext';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
function App() {

  return (
    <>
  
      <ProductDataProvider>
       
        <Router>
           
            <Header/>
            <Routes >
              <Route path='/payForm' element={ <PaForm/>}></Route>
              <Route path='/' element={ <Products />}></Route>
            </Routes>
          
        </Router>
      </ProductDataProvider>
     </>
     
  )
}

export default App

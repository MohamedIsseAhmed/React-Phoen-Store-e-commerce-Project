import React, { useContext, useState } from 'react';
import productContext from './context/ProductContext';

const PaForm = () => {

  const {productsCost,productCount}=useContext(productContext);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleCardNumberChange = (e) => {
    // Implement validation if needed
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    // Implement validation if needed
    setExpiryDate(e.target.value);
  };

  const handleCVVChange = (e) => {
    // Implement validation if needed
    setCVV(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., sending data to the server
    console.log('Form submitted:', { cardNumber, expiryDate, cvv });
  };

  return (

    <>
    
    <div className="payContainer">
      <div className="paymentInfo">
        <p>Total Money: ${productsCost}</p>
        <p>Total Products: {productCount}</p>
        
      </div>
      <form className='payForm' onSubmit={handleSubmit}>
        <label className='cardNumber'>
          Card Number:
          <input className='iputPay'
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength="16"
          />
        </label>
        <br />
        <label className='exp_date'>
          Expiry Date:
          <input className='iputPay'
            type="text"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            placeholder="MM/YY"
            maxLength="5"
          />
        </label>
        <br />
        <label className='cvv'>
          CVV:
          <input className='iputPay'
            type="text"
            value={cvv}
            onChange={handleCVVChange}
            maxLength="3"
          />
        </label>
        <br />
          <button className='submit' type="submit">Submit</button>
    </form>
    </div>
    
  </>
  );
};

export default PaForm;

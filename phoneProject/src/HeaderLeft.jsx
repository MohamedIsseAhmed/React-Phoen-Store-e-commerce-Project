import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderLeft() {
  return (
    <div className='headerLeft'>
      <Link to={`/`}><button className="goHomePageButton">Welcome To The Store</button></Link>
    </div>
  )
}

import React from 'react';

import './Product.css';
import DropFileInput from '../../Components/DropFileInput/DropFileInput';
const Product = () => {
  return (
    <div className='product-background'>
      <div className="product-heading">
        <h1>Subscription</h1>
        </div>
        <div>  
    <div className="product-flex-container">
  <div className="product-flex product-flex-left">
    <h2>This has content in the left box.</h2><br/>
    <p> Learn from experts and network through events, join clubs and
                learn real life skills, Hang out on our discord server to make
                new friends and have fun!
                Learn from experts and network through events, join clubs and
                learn real life skills, Hang out on our discord server to make
                new friends and have fun!
                Learn from experts and network through events, join clubs and
                Learn from experts and network through events, join clubs and
                learn real life skills, Hang out on our discord server to make
                new friends and have fun!
                 </p>
  </div>
  <div className="product-flex product-flex-right">
    <form>
    <div>
        <h3>Enter your word count:</h3>
        <input className='product-input-control' type= "number" placeholder='word count'></input>
    </div>
    <br/>
    <div>
    <h3>Upload image:</h3>
    <br/>
    </div>
    <div>
    <DropFileInput/>
    <br/>
    <button className='product-button'>Submit</button>
    </div>
    </form>
  </div>
 
</div>
    
    
    </div>
    </div>
  )
}

export default Product
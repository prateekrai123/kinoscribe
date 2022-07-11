import React from 'react';

import './Product.css';
import product_img from '../../Images/965.AI processor.jpg'

const Product = () => {
  return (
    <div>
         <div className="product-container">
        <div className="product-imgBx">
            <img src={product_img} alt="Nike Jordan Proto-Lyte "/>
        </div>
        <div className="product-details">
            <div className="product-content">
                <h2>Jordan Proto-Lyte <br/>
                    <span>Running Collection</span>
                </h2>
                <p>
                    Featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan Proto-Lyte is
                    made for all-day, bouncy comfort.
                    Lightweight Breathability: Lightweight woven fabric with real or synthetic leather provides
                    breathable support.
                    Cushioned Comfort: A full-length foam midsole delivers lightweight, plush cushioning.
                    Secure Traction: Exaggerated herringbone-pattern outsole offers traction on a variety of surfaces.
                </p>
                <p className="product-product-colors">
                    Enter word count:  
                    <input type="number"/> 
                    <br/>
                    <br/>
                    <label for="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*"/>
                    {/* <input type="submit"></input> */}
                   
                    
                </p>
                
                
                
                <h3>Rs. 12,800</h3>
                <button>Buy Now</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Product
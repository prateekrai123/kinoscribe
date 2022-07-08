import React from 'react'
import MainHeader from '../../Components/MainHeader/MainHeader';
import './HomePage.css';
import HeroImage from '../../Images/Project_69-08.jpg';
const HomePage = () => {
  return (
    <div>
<MainHeader/>
    {/* <section classNameName="container">
  <div classNameName="left-half">
    <article>
      <h1>India’s most active student community with 80,000+ members.</h1>
      <p>Weekends don't count unless you spend them doing something completely pointless.
      Weekends don't count unless you spend them doing something completely pointless.
      </p>
    </article>
  </div>
  <div classNameName="right-half">
    <img src ={HeroImage}/>
  </div>
</section> */}

<div className="row">
  <div className="column left" >
    <h1>India’s most active student community with 80,000+ members.</h1>
    <p>Weekends don't count unless you spend them doing something completely pointless.
      Weekends don't count unless you spend them doing something completely pointless</p>
  </div>
  <div className="column right" >
  
     <img alt ="" src = {HeroImage} />
  </div>
</div>
 </div>  
  )
}

export default HomePage;
import React from 'react'
// import MainHeader from '../../Components/MainHeader/MainHeader';
import './HomePage.css';
import HeroImage from '../../Images/Project_69-08.jpg'
const HomePage = () => {
  return (
    <div>
    <div class="row">
      <div class="column left">
        <h1>India’s most active student community with 80,000+ members.</h1>
        <p>Learn from experts and network through events, join clubs and learn real life skills, Hang out on our discord server to make new friends and have fun!</p>
      </div>
      <div class="column right">
        <img alt="" src={HeroImage}/>
      </div>
    </div>
    </div>
   
  )
}

export default HomePage;
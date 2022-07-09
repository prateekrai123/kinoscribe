import React from "react";
import "./HomePage.css";
import MainImage from "../../Images/855-removebg.png";
const HomePage = () => {
  return (
    <div class="float-container">

    <div class="float-child left">
      <img className ="home-img" src ={MainImage} alt =""/>
    </div>
    
    <div class="float-child right">
      <h1>India’s most active student community with 80,000+ members.</h1>
      <p>Learn from experts and network through events, join clubs and learn 
        real life skills, Hang out on our discord server to make new friends 
        and have fun!</p>
        <div className="home-form-group buttons">
         <button className="home-form-button">Contact us</button>
         <button className="home-form-button">Subscription</button>
         </div>
    </div>
    
  </div>
  );
};

export default HomePage;

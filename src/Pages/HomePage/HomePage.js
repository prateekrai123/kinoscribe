import React from "react";
import "./HomePage.css";
import MainImage from "../../Images/mainImage.png";
import Services from "../Services/Services";

// import Testimonial from "../../Components/Testimonial/Testimonial";

const HomePage = () => {
  return (
    <div>
      <div className="home-background">
        <div className="home-container">
          <div className="float-container">
            <div className="float-child left">
              <h1>
                Most active student community with{" "}
                <font color="#FFDD59">80,000+</font> members.
              </h1>
              <p>
                Learn from experts and network through events, join clubs and
                learn real life skills, Hang out on our discord server to make
                new friends and have fun!
              </p>
              <div className="home-form-group buttons">
                <button
                  className="home-form-button"
                  onClick={() => {
                    window.location.href = "/contact";
                  }}
                >
                  Contact us
                </button>
                {/* <button className="home-form-button">Services</button> */}
              </div>
            </div>

            <div className="float-child right">
              <img className="home-img" src={MainImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Services />
      {/* <Testimonial/> */}
    </div>
  );
};

export default HomePage;

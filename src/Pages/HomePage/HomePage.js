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
                Same day <font color="#FFDD59">captioning</font>,{" "}
                <font color="#FFDD59">translation</font>, and{" "}
                <font color="#FFDD59">proofreading </font>services
              </h1>
              <p>
                Kinoscribe offers competitive{" "}
                <font color="#FFDD59">pay by the word</font> pricing which
                allows you to save on money and still get your results in under
                a day. Simple choose your package below, enter your estimated
                word count, submit your files and we will handle it from there.
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

import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <section class="services">
      <div class="s-heading">
        <h1>
          Ser<font color="#FFDD59">vic</font>es
        </h1>
        <p>We Provide The Best In Class Servies For Our Customers</p>
      </div>

      <div class="s-box-container">
        <div class="s-box">
          <div class="bar"></div>

          <img alt="1" src="images/1.png" />

          <h1>Captions</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          {/* <a class="s-btn" href="#">
            More
          </a> */}
          <button
            class="s-btn"
            onClick={() => {
              window.location.href = "/product?product=caption";
            }}
          >
            More
          </button>
        </div>

        <div class="s-box">
          <div class="bar"></div>

          <img alt="2" src="images/2.png" />

          <h1>Translation</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>

          <button
            class="s-btn"
            onClick={() => {
              window.location.href = "/product?product=translation";
            }}
          >
            More
          </button>
        </div>

        <div class="s-box">
          <div class="bar"></div>

          <img alt="2" src="images/2.png" />
          <h1>Proofreading</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <button
            class="s-btn"
            onClick={() => {
              window.location.href = "/product?product=proofreading";
            }}
          >
            More
          </button>
        </div>

        <div class="s-box">
          <div class="bar"></div>

          <img alt="2" src="images/2.png" />
          <h1>Captions+Translation</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <button
            class="s-btn"
            onClick={() => {
              window.location.href = "/product?product=caption+translation";
            }}
          >
            More
          </button>
        </div>

        <div class="s-box">
          <div class="bar"></div>

          <img alt="2" src="images/2.png" />
          <h1>Caption+Proofreading</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <button
            class="s-btn"
            onClick={() => {
              window.location.href = "/product?product=caption+proofreading";
            }}
          >
            More
          </button>
        </div>

        <div class="s-box">
          <div class="bar"></div>

          <img alt="2" src="images/2.png" />
          <h1>Translation+Proofreading</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <button
            class="s-btn"
            onClick={() => {
              window.location.href =
                "/product?product=translation+proofreading";
            }}
          >
            More
          </button>
        </div>

        <div class="s-box">
          <div class="bar"></div>

          <img alt="2" src="images/2.png" />
          <div className="content">
            <h1>
              Captions+Translation<br></br>+Proofreading
            </h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <button
            class="s-btn"
            onClick={() => {
              window.location.href =
                "/product?product=caption+translation+proofreading";
            }}
          >
            More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

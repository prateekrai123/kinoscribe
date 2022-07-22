import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <section class="services">
      <div class="s-heading">
        <h1>
          Ser<font color="#FFDD59">vic</font>es
        </h1>
        <p>
          Choose your package and enter your estimated word count. We will
          handle the rest!
        </p>
      </div>

      <div class="s-box-container">
        <div class="s-box">
          <div class="bar"></div>

          <img alt="1" src="images/1.png" />

          <h1>Captions</h1>

          <p>Captions for audio and video done professionally and accurately</p>

          {/* <a class="s-btn" href="#">
            Get Started
          </a> */}
          <button
            class="s-btn"
            onClick={() => {
              window.location.href = "/product?product=caption";
            }}
          >
            Get Started
          </button>
        </div>

        <div class="s-box">
          <div class="bar"></div>

          <img alt="2" src="images/2.png" />

          <h1>Translation</h1>

          <p>Translate your subtitles, or text documents</p>

          <button
            class="s-btn"
            onClick={() => {
              window.location.href = "/product?product=translation";
            }}
          >
            Get Started
          </button>
        </div>

        <div class="s-box">
          <div class="bar"></div>

          <img alt="2" src="images/2.png" />
          <h1>Proofreading</h1>

          <p>Make your document error free and effective</p>
          <button
            class="s-btn"
            onClick={() => {
              window.location.href = "/product?product=proofreading";
            }}
          >
            Get Started
          </button>
        </div>

        <div class="s-box">
          <div class="bar"></div>

          <img alt="2" src="images/2.png" />
          <h1>Captions+Translation</h1>

          <p></p>
          <button
            class="s-btn"
            onClick={() => {
              window.location.href = "/product?product=caption+translation";
            }}
          >
            Get Started
          </button>
        </div>

        <div class="s-box">
          <div class="bar"></div>

          <img alt="2" src="images/2.png" />
          <h1>Caption+Proofreading</h1>

          <p></p>
          <button
            class="s-btn"
            onClick={() => {
              window.location.href = "/product?product=caption+proofreading";
            }}
          >
            Get Started
          </button>
        </div>

        <div class="s-box">
          <div class="bar"></div>

          <img alt="2" src="images/2.png" />
          <h1>Translation+Proofreading</h1>

          <p></p>
          <button
            class="s-btn"
            onClick={() => {
              window.location.href =
                "/product?product=translation+proofreading";
            }}
          >
            Get Started
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
          <p></p>
          <button
            class="s-btn"
            onClick={() => {
              window.location.href =
                "/product?product=caption+translation+proofreading";
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

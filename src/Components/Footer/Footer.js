import React from "react";
import "./Footer.css";
import logo from "../../Images/logo.png";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      {/* <div className="footer">
      <div className="heading">
        <h2>COMPANY NAME<sup>™</sup></h2>
      </div>
      <div className="content">
        <div className="services">
          <h4>Services</h4>
          <p><a href="#">App development</a></p>
          <p><a href="#">Web development</a></p>
          <p><a href="/#">Graphic designing</a></p>
          <p><a href="#">Web designing</a></p>
        </div>
        <div className="social-media">
          <h4>Social</h4>
          <p>
            <a href="#"
              ><i className="fab fa-linkedin"></i> Linkedin</a
            >
          </p>
          <p>
            <a href="#"
              ><i className="fab fa-twitter"></i> Twitter</a
            >
          </p>
          <p>
            <a href="#"
              ><i className="fab fa-github"></i> Github</a
            >
          </p>
          <p>
            <a href="#"
              ><i className="fab fa-codepen"></i> Codepen</a
            >
          </p>
          <p>
            <a href="#"
              ><i className="fab fa-instagram"></i> Instagram</a
            >
          </p>
        </div>
        <div className="links">
          <h4>Quick links</h4>
          <p><a href="#">Home</a></p>
          <p><a href="#">About us</a></p>
          <p><a href="#">Contact us</a></p>
          <p><a href="#">Gallery</a></p>
        </div>
        <div className="details">
          <h4 className="address">Address</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Cupiditate, qui!
          </p>
          <h4 className="mobile">Mobile</h4>
          <p><a href="#">+9111xxxxxxxx</a></p>
          <h4 className="mail">Email</h4>
          <p><a href="#">example@gmail.com</a></p>
        </div>
      </div>
      <footer>
        © 2021 COMPANY NAME Pvt. Ltd.
        All rights are reserved<br/><br/>
        <div className="credit">Made with 
        <span style="color:tomato">❤</span> by <a href="https://www.learningrobo.com/">Learning Robo</a>
        </div>
      </footer>
    </div> */}

      <section class="footer">
        <div class="foot-1">
          <section class="about">
            <p class="title">
              <Image alt="" src={logo} />
            </p>
            <p>
              Kinoscribe aims to create a easy and fair way to accurately and
              quickly get your films, videos, or text documents proofread,
              translated and captioned. A Kinoverse Corp service.<br></br>
              <br></br>
              <a href="http://kinoverse.net/">Kinoverse Corp</a>
            </p>
          </section>
          {/* <section>
            <div class="title">Categories</div>
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
              <li>Frameworks</li>
              <li>Templates</li>
            </ul>
          </section>
          <section>
            <div class="title">Quick Links</div>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Contribute</li>
              <li>Private Policy</li>
              <li>Sitemap</li>
            </ul>
          </section> */}
        </div>

        <div class="foot-2">
          <p>Copyright@KinoverseCorp</p>
          <div class="socials">
            <a href="https://instagram.com/kinoscribe?igshid=YmMyMTA2M2Y=">
              {" "}
              <i class="fa-brands fa-instagram"></i>{" "}
            </a>
            <a href="https://www.facebook.com/Kinoscribe-100393012769362/">
              {" "}
              <i class="fa-brands fa-facebook"></i>{" "}
            </a>
            <a href="https://twitter.com/kinoscribe?t=J9crzrWD3vnWIcVAG8IL_w&s=09">
              {" "}
              <i class="fa-brands fa-twitter"></i>{" "}
            </a>
            <a href="https://tiktok.com/@kinoscribe">
              {" "}
              <i class="fa-brands fa-tiktok"></i>{" "}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

const Image = styled.img`
  @media (max-width: 900px) {
    width: 50%;
  }
  width: 20%;
  // float: left;
  // margin-right: 10px;
`;

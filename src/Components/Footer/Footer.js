import React from 'react';
import './Footer.css';
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
                <p class="title">About</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam mollitia, rerum unde excepturi ex
                    quibusdam laudantium, non aut libero deserunt vero distinctio sit ratione sunt nihil debitis fugiat,
                    molestiae ullam. Eveniet, fuga? Necessitatibus officia alias totam eaque iste soluta placeat eum,
                    autem doloribus animi, assumenda et dignissimos sed corporis porro, inventore sequi? Expedita porro
                    delectus animi!
                </p>
            </section>
            <section>
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
            </section>
        </div>

        <div class="foot-2">
            <p>Copyright 2020 Free to use for everyone</p>
            <div class="socials">
                <a href="#"> <i class="fab fa-facebook-f"></i> </a>
                <a href="#"> <i class="fab fa-linkedin-in"></i> </a>
                <a href="#"> <i class="fab fa-twitter"></i> </a>
                <a href="#"> <i class="fab fa-youtube"></i> </a>
            </div>
        </div>
    </section>
    </div>

  )
}

export default Footer;
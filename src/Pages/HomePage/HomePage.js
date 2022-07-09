import React from "react";
// import MainHeader from '../../Components/MainHeader/MainHeader';
import "./HomePage.css";
import MainImage from "../../Images/logo.png";
const HomePage = () => {
  return (
    <div>
      <div class="row">
        <div class="column left">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero autem
            dolore atque eos, culpa commodi unde inventore deleniti sit
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero autem
            dolore atque eos, culpa commodi unde inventore deleniti sit
            veritatis, voluptatibus numquam rerum suscipit enim, perspiciatis
            pariatur doloribus? At consequatur sunt voluptatem molestiae fugit
            id illo consequuntur rem tempora mollitia impedit libero, magnam
            inventore accusantium! Natus sunt ab voluptatibus consequuntur
            distinctio veniam quos praesentium labore? Ipsum, vitae totam.
            Dignissimos, modi. Iure, minus quis. Soluta eveniet recusandae
            cupiditate sunt asperiores voluptas molestias ipsam fugit nulla
            accusamus repellat, ratione odio nesciunt repellendus quas
            accusantium quis maiores unde, corporis sequi blanditiis fuga quos?
          </p>
        </div>
        <div class="column right">
          <img alt="" src={MainImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

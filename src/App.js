import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/MainHeader/Navigation";
import ContactUS from "./Pages/ContactUs/ContactUS";
import HomePage from "./Pages/HomePage/HomePage";
import Product from "./Pages/Product/Product";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

const App = () => {
  return (
    <main>
      <Router>
        <Navigation/>
        {/* <MainHeader /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUS />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/product" element={<Product />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer/>
      </Router>
    </main>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainHeader from "./Components/MainHeader/MainHeader";
import ContactUS from "./Pages/ContactUs/ContactUs";
import HomePage from "./Pages/HomePage/HomePage";
import Product from "./Pages/Product/Product";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

const App = () => {
  return (
    <main>
      <Router>
        <MainHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUS />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/product" element={<Product />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;

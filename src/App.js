import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainHeader from "./Components/MainHeader/MainHeader";
import ContactUs from "./Pages/ContactUs/ContactUs";
import HomePage from "./Pages/HomePage/HomePage";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
const App = () => {
  return (
    <main>
      <Router>
        <MainHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Contact" element={<ContactUs />} />
          <Route path="/signin" element={<SignIn />} />

          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;

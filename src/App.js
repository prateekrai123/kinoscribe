import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/MainHeader/Navigation";
import AllPendingOrders from "./Pages/Admin/AllPendingOrders";
import SingleOrder from "./Pages/Admin/SingleOrder";
// import Admin from "./Pages/Admin/Admin";
import ContactUS from "./Pages/ContactUs/ContactUS";
import Dashboard from "./Pages/DashBoard/Dashboard";
import HomePage from "./Pages/HomePage/HomePage";
import OrderDetail from "./Pages/OrderDetails/OrderDetail";
import Product from "./Pages/Product/Product";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import VerifyUser from "./Pages/VerifyUser/VerifyUser";

const App = () => {
  return (
    <main>
      <Router>
        <Navigation />
        {/* <MainHeader /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUS />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/product" element={<Product />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/pendingOrders" element={<AllPendingOrders />} />
          <Route path="/singleOrder" element={<SingleOrder />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/details" element={<OrderDetail />} />
          <Route path="/verify" element={<VerifyUser />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;

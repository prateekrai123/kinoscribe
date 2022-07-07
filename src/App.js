import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
const App = () => {
  return (
    <main>
    <Router>
    <Routes>
    <Route path ="/" element = {<HomePage/>}/>
      <Route path ="/signin" element = {<SignIn/>}/>
       
      <Route path ="/signup" element = {<SignUp/>}/>

    </Routes>
    </Router>
    </main>
  );
}

export default App;

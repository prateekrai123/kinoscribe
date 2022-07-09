import React, { useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../API/api";
import "./SignIn.css";
import axios from "axios";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${baseUrl}/auth/signIn`, { email, password })
      .then((res) => {
        console.log(res);
        if (res.isError) {
          alert(res.data.message);
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  // const switchAuthModeHandler = () => {
  //   <Navigate to="/signin" />;
  // };

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    // <section className={classes.signin}>
    //   <h1>Login</h1>
    //   <form onSubmit={submitHandler}>
    //     <div className={classes.control}>
    //       <label htmlFor="email">Your Email</label>
    //       <input
    //         type="email"
    //         id="email"
    //         required
    //         value={email}
    //         onChange={(e) => {
    //           setEmail(e.target.value);
    //         }}
    //       />
    //     </div>
    //     <div className={classes.control}>
    //       <label htmlFor="password">Your Password</label>
    //       <input
    //         type="password"
    //         id="password"
    //         required
    //         value={password}
    //         onChange={(e) => {
    //           setPassword(e.target.value);
    //         }}
    //       />
    //     </div>
    //     <div className={classes.actions}>
    //       <button onClick={handleSubmit}>Login</button>

    //       <Link
    //         to="/signin"
    //         type="button"
    //         className={classes.toggle}
    //         // onClick={navigateHandler}
    //       >
    //         Create new account
    //       </Link>
    //     </div>
    //   </form>
    // </section>
    <form onSubmit={submitHandler}>
    <div className="signin-background">
    <div className="signin-container">
      <div className="signin-screen">
  
        <div className="signin-screen-body">
          <div className="signin-screen-body-item left">
            <div className="signin-title">
              <span>Signin</span>
              
            </div>
          </div>
          <div className="screen-body-item">
            <div className="signin-form">
      
              <div className="signin-form-group">
                <input 
                className="signin-form-control" 
                placeholder="EMAIL"
                type="email"
                id="email"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }} 
                      />
              </div>
             
              <div className="signin-form-group">
                <input 
                className="signin-form-control"
                 placeholder="PASSWORD"
                 id="password"
                 type="password"
                 required  
                 value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                         }}  
                       />
              </div>
             
              <div className="signin-form-group buttons">
                <button className="signin-form-button sigin-button" onClick={handleSubmit}>signin</button>
                
              </div>
              <Link
            to="/signin"
            type="button"
            className="signin-form-button"
          >
            Create new account
          </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
  </form>
  );
};

export default SignIn;

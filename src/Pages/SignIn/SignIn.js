import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import classes from "./SignIn.module.css";
import { baseUrl } from "../../API/api";

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

  const switchAuthModeHandler = () => {
    <Navigate to="/signup" />;
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <section className={classes.signin}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className={classes.actions}>
          <button onClick={handleSubmit}>Login</button>

          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            Create new account
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignIn;

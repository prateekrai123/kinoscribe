import React from 'react';
import { Navigate } from "react-router-dom";
import classes from './SignIn.module.css';
const SignIn = (props) => {



  const switchAuthModeHandler = () => {
    <Navigate to="/signup"/>

  };

  const submitHandler = (event) => {
    event.preventDefault();
    
  }
  return (
    <section className={classes.signin}>
    <h1>Login</h1>
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' required />
      </div>
      <div className={classes.control}>
        <label htmlFor='password'>Your Password</label>
        <input
          type='password'
          id='password'
          required
        />
      </div>
      <div className={classes.actions}>

          <button>Login</button>
     
        <button
          type='button'
          className={classes.toggle}
          onClick={switchAuthModeHandler}
        >
          Create new account
        </button>
      </div>
    </form>
  </section>
  )
}

export default SignIn;
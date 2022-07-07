import React from 'react';
import { Link } from "react-router-dom";
import classes from './SignIn.module.css';
const SignIn = (props) => {

  // const navigate = useNavigate();

  // const navigateHandler = () => {
  //   navigate.push("/signup");

  // };

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

          <button>
            Login
          </button>
     
        <Link  to="/signup"
          type='button'
          className={classes.toggle}
          // onClick={navigateHandler}
        >
          Create new account
        </Link>
      </div>
    </form>
  </section>
  )
}

export default SignIn;
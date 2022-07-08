import React, { useState } from "react";
import axios from "axios";
import classes from "./SignUp.module.css";
import { baseUrl } from "../../API/api";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    if (password !== confPassword) {
      console.log("password Not Match");
    }
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
      phone: phoneNumber,
    };
    axios
      .post(`${baseUrl}/auth/signUp`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.siginup}>
      <header className={classes.signup_header}>
        <form
          className={classes.signup_form}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h2> KINOSCRIBE</h2>
          <h3> Sign-up Form </h3>

          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            required
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          <br />
          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            required
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
          <br />
          <label>Confirm Password:</label>
          <br />
          <input
            type="password"
            value={confPassword}
            required
            onChange={(e) => {
              handleConfPasswordChange(e);
            }}
          />
          <br />
          <label>Phone Number</label>
          <br />
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => {
              handlePhoneNumber(e);
            }}
          />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
};

export default SignUp;

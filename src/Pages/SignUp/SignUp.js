import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";
import { baseUrl } from "../../API/api";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      alert("password Not Match");
      return;
    }
    setIsLoading(true);
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
      phone: 12,
    };
    axios
      .post(`${baseUrl}/auth/signUp`, data)
      .then((res) => {
        setIsLoading(false);
        if (res.data.isError) {
          alert("Something went wrong");
        } else {
          alert("SignUp Successfully");
          window.location.href = "/verify";
        }
      })
      .catch((err) => {
        setIsLoading(false);
        alert("SignUp Failed");
      });
  };

  return (
    // <div className={classes.siginup}>
    //   <header className={classes.signup_header}>
    //     <form
    //       className={classes.signup_form}
    //       onSubmit={(e) => {
    //         handleSubmit(e);
    //       }}
    //     >

    //       <h3> Sign-up Form </h3>

    //       <div>
    //       <input
    //         className="signup-form-control"
    //         type="text"
    //         value={name}
    //         placeholder = "Name"
    //         required
    //         onChange={(e) => {
    //           handleChange(e);
    //         }}
    //       />
    //       </div>
    //       <div>

    //       <input
    //       className="signup-form-control"
    //         type="email"
    //         value={email}
    //         required
    //         onChange={(e) => {
    //           handleEmailChange(e);
    //         }}
    //       />
    //       </div>

    //       <div>
    //       <input
    //       className="signup-form-control"
    //         type="password"
    //         value={password}
    //         required
    //         onChange={(e) => {
    //           handlePasswordChange(e);
    //         }}
    //       />
    //      </div>
    //      <div>
    //       <input
    //       className="signup-form-control"
    //         type="password"
    //         value={confPassword}
    //         required
    //         onChange={(e) => {
    //           handleConfPasswordChange(e);
    //         }}
    //       />

    //       </div>
    //       <div>
    //       <input
    //       className="signup-form-control"
    //         type="number"
    //         value={phoneNumber}
    //         onChange={(e) => {
    //           handlePhoneNumber(e);
    //         }}
    //       />

    //       </div>
    //       <div>
    //       <input type="submit" value="Submit" />
    //       </div>
    //     </form>
    //   </header>
    // </div>
    <div className="signup-background">
      <div className="signup-container">
        <div className="signup-screen">
          <div className="signup-screen-body">
            <div className="signup-screen-body-item left">
              <div className="signup-title">
                <span>Sign up</span>
              </div>
            </div>
            <div className="signup-screen-body-item">
              <div className="signup-form">
                <div className="signup-form-group">
                  <input
                    className="signup-form-control"
                    placeholder="NAME"
                    type="text"
                    value={name}
                    required
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
                <div className="signup-form-group">
                  <input
                    className="signup-form-control"
                    placeholder="EMAIL"
                    type="email"
                    value={email}
                    required
                    onChange={(e) => {
                      handleEmailChange(e);
                    }}
                  />
                </div>

                <div className="signup-form-group">
                  <input
                    className="signup-form-control"
                    placeholder="PASSWORD"
                    type="password"
                    value={password}
                    required
                    onChange={(e) => {
                      handlePasswordChange(e);
                    }}
                  />
                </div>
                <div className="signup-form-group">
                  <input
                    className="signup-form-control"
                    placeholder="CONFIRM PASSWORD"
                    type="password"
                    value={confPassword}
                    required
                    onChange={(e) => {
                      handleConfPasswordChange(e);
                    }}
                  />
                </div>
                {/* <div className="signup-form-group">
                  <input
                    className="signup-form-control"
                    placeholder="CONTACT NO"
                    type="number"
                    value={phoneNumber}
                    onChange={(e) => {
                      handlePhoneNumber(e);
                    }}
                  />
                </div> */}
                <div className="signup-form-group buttons">
                  <button className="signup-form-button" onClick={handleSubmit}>
                    Sign Up
                  </button>
                  {isLoading && <div className="loader">loading...</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

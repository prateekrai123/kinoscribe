import React, { useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../API/api";
import "./SignIn.css";
import axios from "axios";
import userContext from "../../context/UserContext";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    axios
      .post(`${baseUrl}/auth/signIn`, { email, password })
      .then((res) => {
        setIsLoading(false);
        if (res.data.isError) {
          alert(res.data.message);
          // userContext.loginHandler({
          //   token: res.data.token,
          //   isAdmin: res.data.isAdmin,
          // });
        } else {
          alert(res.data.message);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.userId);
          localStorage.setItem("isAdmin", res.data.isAdmin);
          window.location.href = "/";
        }
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err);
      });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
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
                    <button
                      className="signin-form-button sigin-button"
                      onClick={handleSubmit}
                    >
                      Sign In
                    </button>
                  </div>
                  {isLoading && <div>Loading...</div>}
                  <br />
                  <Link
                    to="/signup"
                    type="button"
                    className="signin-form-button"
                  >
                    Create new account
                  </Link>
                  <br></br>
                  <br></br>
                  <Link
                    to="/verify"
                    type="button"
                    className="signin-form-button"
                  >
                    Verify User
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

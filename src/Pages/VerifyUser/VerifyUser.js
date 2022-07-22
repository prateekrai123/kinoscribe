import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../API/api";

const VerifyUser = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    const data = {
      email: email,
      verificationCode: code,
    };
    axios
      .post(`${baseUrl}/auth/verify`, data)
      .then((res) => {
        if (res.data.isError === true) {
          alert("Error");
          console.log(res.data.message);
          setIsLoading(false);
        } else {
          alert("User verified");
          window.location.href = "/";
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error");
        setIsLoading(false);
      });
  };

  return (
    <div className="signin-background">
      <div className="signin-container">
        <div className="signin-screen">
          <div className="signin-screen-body">
            <div className="signin-screen-body-item left">
              <div className="signin-title">
                <span>Verify User</span>
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
                    placeholder="Verifcation Code"
                    id="password"
                    type="text"
                    required
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value);
                    }}
                  />
                </div>

                <div className="signin-form-group buttons">
                  <button
                    className="signin-form-button sigin-button"
                    onClick={handleSubmit}
                  >
                    Verify
                  </button>
                </div>
                {isLoading && <div>Loading...</div>}
                <br />
                <Link to="/signup" type="button" className="signin-form-button">
                  Create new account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyUser;

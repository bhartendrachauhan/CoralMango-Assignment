import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="login-outer-container">
        <div className="login-container">
          <div className="login-message-container">

          </div>
          <i className="fa-solid fa-lock fa-3x"></i>
          <h2 style={{ marginBottom: "40px" }}>Login</h2>
          <div className="login-each-container">
            <i className="fa-solid fa-envelope fa-lg"></i>
            <input
              type="text"
              className="login-each-input"
              placeholder="Email"
            />
          </div>
          <div className="helper-text"></div>
          <div className="login-each-container">
            <i className="fa-solid fa-key fa-lg"></i>
            <input
              type="password"
              className="login-each-input"
              placeholder="Password"
            />
          </div>
          <div className="helper-text"></div>
          <div className="login-button-container">
            Login
            <button className="login-button"></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

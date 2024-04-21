import React, { useState } from "react";
import "../LoginSignup.css";
import user_icon from "../assets/icon/email.png";
import email_icon from "../assets/icon/password.png";
import password_icon from "../assets/icon/person.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  return (
    <div className={"container"}>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <>
            <div className="input">
              <img src={email_icon} alt=""></img>
              <input type="email" placeholder="Nickname"></input>
            </div>
            <div className="input">
              <img src={password_icon} alt=""></img>
              <input type="password" placeholder="Password"></input>
            </div>

            <div />
          </>
        ) : (
          <>
            <div className="input">
              <img src={user_icon} alt=""></img>
              <input type="text" placeholder="Name"></input>
            </div>
            <div className="input">
              <img src={email_icon} alt=""></img>
              <input type="email" placeholder="Email"></input>
            </div>
            <div className="input">
              <img src={password_icon} alt=""></img>
              <input type="password" placeholder="Password"></input>
            </div>
          </>
        )}

        {/* <div className="input">
          <img src={email_icon} alt=""></img>
          <input type="email" placeholder="Email"></input>
        </div>
        <div className="input">
          <img src={password_icon} alt=""></img>
          <input type="password" placeholder="Password"></input>
        </div> */}
      </div>

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

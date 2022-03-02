import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import loginImgSVG from "../images/login-img.svg";
import indiaSVG from "../images/india.svg";

import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const [dynamicPara, setDynamicPara] = React.useState("");

  function onChangePhoneNumber(event) {
    setPhoneNumber(event.target.value);
  }

  function optSignIn() {
    if (phoneNumber.length < 10 || phoneNumber.length > 10) {
      setDynamicPara(
        <p className="please-enter-10-digits-only">
          Please enter 10 digit number!
        </p>
      );
    } else {
      setPhoneNumber("");
      setDynamicPara("");
      return toast("OTP sent successfully", { type: "success" });
    }
  }

  return (
    <>
      <Nav />
      <div className="login-parent">
        <div className="login-form">
          <div className="login-para-company">
            <p className="login-company-name">ABC</p>
            <p className="insurance">Insurance</p>
          </div>
          <div className="login-img-mobile-text">
            <img src={loginImgSVG} alt="" className="login-img" />
            <p className="login-img-text">
              To sign in, please enter your mobile number
            </p>
          </div>
          <div className="login-input">
            <img src={indiaSVG} alt="" className="login-india-svg" />
            <input
              type="number"
              className="login-mobile-number"
              placeholder="+91"
              value={phoneNumber}
              onChange={onChangePhoneNumber}
            />
          </div>

          {/* {phoneNumber.length !== 10 && (
            <p className="please-enter-10-digits-only">
              Please enter 10 digit number!
            </p>
          )} */}
          {dynamicPara}

          <div className="login-sign-in sign-in-otp" onClick={optSignIn}>
            <p className="sign-in-text">Sign in with OTP</p>
          </div>
          <div className="login-sign-in sign-in-password" onClick={optSignIn}>
            <p className="sign-in-text">Sign in with Password</p>
          </div>
          <div className="first-time-user">
            <p className="first-time-user-para">
              First time user?
              <Link to="/register" className="register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
}

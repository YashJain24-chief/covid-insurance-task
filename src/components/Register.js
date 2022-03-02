import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import loginImgSVG from "../images/login-img.svg";
import indiaSVG from "../images/india.svg";
import { ToastContainer, toast } from "react-toastify";

export default function Register() {
  const [phoneNumber, setPhoneNumber] = React.useState("");

  function onChangePhoneNumber(event) {
    setPhoneNumber(event.target.value);
  }

  const [dynamicPara, setDynamicPara] = React.useState("");

  const [otpInput, setOtpInput] = React.useState(false);

  function getOtp() {
    if (phoneNumber.length < 10 || phoneNumber.length > 10) {
      setDynamicPara(
        <p className="please-enter-10-digits-only">
          Please enter 10 digit number!
        </p>
      );
    } else {
      setOtpInput(!otpInput);
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
              To sign up, please enter your mobile number
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
          {/* <p className="please-enter-10-digits-number">
            Please enter 10 digit number!
          </p> */}
          {dynamicPara}
          {otpInput && (
            <div className="login-input otp-input-box">
              <input
                type="number"
                className="login-mobile-number login--otp"
                placeholder="OTP"
              />
            </div>
          )}
          {otpInput === false && (
            <div className="login-sign-in otp-button" onClick={getOtp}>
              <p className="sign-in-text">Get OTP</p>
            </div>
          )}
          {otpInput && (
            <div className="login-sign-in proceed-button">
              <p className="sign-in-text ahref">Proceed</p>
            </div>
          )}
          <div className="first-time-user">
            <p className="first-time-user-para">
              Already signed up?
              <Link to="/login" className="register">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
}

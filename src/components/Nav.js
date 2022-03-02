import React from "react";
import alpha from "../images/alpha.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navClass">
      <div className="nav-div-logo-name">
        <img src={alpha} className="navImg" alt="Company logo" />
        <p className=" nav-name">ABC Insurance</p>
      </div>
      <div className="navUl">
        <ul className="ul-class">
          <Link to="/" className="ul-li-a">
            Home
          </Link>
          <li className="ul-li">Life Insurance</li>
          <li className="ul-li">Health Insurance</li>
          <li className="ul-li">Investment Plans</li>
          <li className="ul-li">Other Insurance</li>
          <li className="ul-li">Renewal</li>
          <Link to="/emiCalci" className="ul-li-a">
            EMI Calculator
          </Link>
        </ul>
      </div>
      <div className="div-login-register">
        <Link to="/login" className="login-register">
          Login
        </Link>
        <Link to="/register" className="login-register">
          Register
        </Link>
      </div>
    </nav>
  );
}

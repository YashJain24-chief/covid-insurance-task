import React from "react";

export default function Coverage(props) {
  return (
    <div className="covergae-plans-div-1">
      <div
        className={`covergae-plan-card ${
          props.colorIndex === 1 ? "covergae-plan-card-blue" : ""
        }`}
      >
        {props.val1} Lakh
        <p>Health Insurance</p>
      </div>
      <div
        className={`covergae-plan-card ${
          props.colorIndex === 2 ? "covergae-plan-card-blue" : ""
        }`}
      >
        {props.val2} Lakh
        <p>Health Insurance</p>
      </div>
      <div
        className={`covergae-plan-card ${
          props.colorIndex === 3 ? "covergae-plan-card-blue" : ""
        }`}
      >
        {props.val3} Lakh
        <p>Health Insurance</p>
      </div>
    </div>
  );
}
// covergae-plan-card-blue

import React from "react";
import Nav from "./Nav";

export default function EMI() {
  const [emiData, setEmiData] = React.useState({
    principle: "",
    interestRate: "",
    year: "",
  });

  const [emiValue, setEmiValue] = React.useState("");

  function setAllData(event) {
    setEmiData((prevState) => ({
      ...emiData,
      [event.target.name]: event.target.value,
    }));
  }

  function calculateEmi() {
    if (
      emiData.principle !== "" &&
      emiData.interestRate !== "" &&
      emiData.year !== ""
    ) {
      let emi_amount = parseFloat(emiData.principle);
      let roi = parseFloat(emiData.interestRate) / 12 / 100;
      let tenure = parseFloat(emiData.year) * 12;
      let emi_value =
        (emi_amount * roi * Math.pow(1 + roi, tenure)) /
        (Math.pow(1 + roi, tenure) - 1);
      setEmiValue(emi_value.toFixed(2) + "");
    } else {
      alert("Please enter all the fields");
    }
  }

  // calculate_button.addEventListener("click", function () {

  // });

  return (
    <>
      <Nav />
      <div className="emi-parent">
        <div className="emi-form">
          <div className="emi-para-company">
            <p className="emi-company-name">EMI</p>
            <p className="insurance">Calculator</p>
          </div>
          <div className="emi-input">
            <p className="emi-india-svg">₹</p>
            <input
              type="number"
              name="principle"
              value={emiData.principle}
              className="emi-mobile-number amount"
              placeholder="Amount"
              onChange={setAllData}
            />
          </div>
          <div className="emi-input">
            <p className="emi-india-svg">%</p>
            <input
              type="number"
              name="interestRate"
              value={emiData.interestRate}
              className="emi-mobile-number interest-rate"
              placeholder="Interest Rate"
              onChange={setAllData}
            />
          </div>
          <div className="emi-input">
            <p className="emi-india-svg">Years</p>
            <input
              type="number"
              name="year"
              value={emiData.year}
              className="emi-mobile-number tenure"
              placeholder="Tenure"
              onChange={setAllData}
            />
          </div>
          {emiValue !== "" && (
            <p className="emi-company-name emi-value">{emiValue}</p>
          )}

          <div className="emi-sign-in calculate">
            <p className="calculate-text" onClick={calculateEmi}>
              Calculate
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import heroSectionImage from "../images/landing-page-card.svg";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-section-div">
        <img src={heroSectionImage} alt="" className="hero-section-img" />
        <p className="hero-section-p">
          Get Health Insurance That Covers Coronavirus and More
          <strong>@ ₹200/month*</strong>
        </p>
      </div>
      <div className="hero-section-card-div">
        <div className="hero-card">
          <strong>Consumables are covered</strong> like PPE kits, gloves, masks,
          etc.
        </div>
        <div className="hero-card">
          <strong> Single private room permitted</strong> for hospitalization
        </div>
        <div className="hero-card">
          <strong> Treatment at home is covered</strong> on a positive diagnosis
          of COVID-19
        </div>
      </div>
    </section>
  );
}

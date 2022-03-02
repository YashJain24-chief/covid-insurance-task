import React from "react";
import star from "../../images/star.png";

export default function TopPlans(props) {
  return (
    <>
      {/* <!-- first part --> */}
      <div className="top-plans-card-title">
        <div className="inside-top-plans-card-div">
          <p>{props.planName}</p>
          <p>{props.companyName}</p>
        </div>
        <div className="top-plans-card-type">{props.type}</div>
      </div>

      {/* <!-- second part --> */}
      <div className="top-plans-card-features">
        <div className="inside-top-plan-card-features">
          <img src={star} alt="" className="top-plan-card-feature-star" />
          <div className="top-plans-card-features-div">
            <p>Room rent limit</p>
            <p>{props.roomFeatures}</p>
          </div>
        </div>
        <div className="inside-top-plan-card-features">
          <img src={star} alt="" className="top-plan-card-feature-star" />
          <div className="top-plans-card-features-div">
            <p>No claim bonus</p>
            <p>{props.claimFeatures}</p>
          </div>
        </div>
      </div>

      {/* <!-- third part --> */}
      <div className="check-premium">
        <div className="starting-at-price">
          <p className="starting-at">Starting at</p>
          <p className="price">
            <strong>₹ {props.price}/month</strong>
          </p>
        </div>
        <div className="button-check-premium">Check Premium</div>
      </div>
    </>
  );
}

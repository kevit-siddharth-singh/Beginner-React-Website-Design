import React from "react";
import "./Customer.css";
import arrow from "../Assets/right-arrow.png";

function Customer() {
  return (
    <div className="customer-reviews">
      <div className="cust-title">
        <p className="title-text">
          Accelerate your business. The world's most effective teams build with
          Dev - S I D.
        </p>
      </div>
      <div className="cust-btn">
        <button>
          <p>Reviews</p>
          <img src={arrow} alt="right arrow" />
        </button>
      </div>
      <div className="cust-card">
        <div className="cards card1"></div>
        <div className="cards card2"></div>
        <div className="cards card3"></div>
      </div>
    </div>
  );
}

export default Customer;

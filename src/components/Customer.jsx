import React from "react";
import "./Customer.css";
import arrow from "../Assets/right-arrow.png";
import aehertz from "../Assets/aehertz-bw.jpeg";
import siddharth from "../Assets/siddharth-bw.jpeg";



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
        <div className="cards card1">
          <div className="title">
            <svg
              width="19"
              height="18"
              viewBox="0 0 36 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36 7.26486C29.2776 7.26486 26.9779 9.85946 26.9779 13.7514V16.9514H35.7346V32H19.9017V14.1838C19.9017 5.27567 25.2088 0 36 0V7.26486ZM0 32V14.1838C0 5.27567 5.30713 0 16.0983 0V7.26486C9.37592 7.26486 7.07617 9.85946 7.07617 13.7514V16.9514H15.8329V32H0Z"
                fill="#FF0EB4"
              ></path>
            </svg>
            <img
              src="https://cdn.prod.website-files.com/65b671b80c07b825f14b65c6/6614d2b8bf7ea0b8033d40bb_conde-nast-logo-black%201.svg"
              alt=""
            />
          </div>
          <div className="cards-data">
            <p>
              SID-Dev has been a tremendous help for us. For a company as big as
              ours, we need SID-Dev to help us standardize all of our data across a
              lot of platforms, brands, and markets, no matter where it is
              coming from.
            </p>
            <p>Read more reviews on G2</p>
          </div>
          <div className="cust-data">
            <div className="cust-img-wrapper">
              <img
                src="https://cdn.prod.website-files.com/65b671b80c07b825f14b65c6/6614d263ee7cfefd56f2a4e7_Ioana%20Vasicuta%20Conde%20Nast.png"
                alt="cust1"
              />
            </div>
            <div className="cust-name">
              <p className="firstname">Ioana</p>
              <p>Vasicuta</p>
            </div>
          </div>
        </div>
        <div className="cards card2">
          <div className="title">
            <svg
              width="19"
              height="18"
              viewBox="0 0 36 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36 7.26486C29.2776 7.26486 26.9779 9.85946 26.9779 13.7514V16.9514H35.7346V32H19.9017V14.1838C19.9017 5.27567 25.2088 0 36 0V7.26486ZM0 32V14.1838C0 5.27567 5.30713 0 16.0983 0V7.26486C9.37592 7.26486 7.07617 9.85946 7.07617 13.7514V16.9514H15.8329V32H0Z"
                fill="#FF0EB4"
              ></path>
            </svg>
            <img
              src="https://cdn.prod.website-files.com/65b671b80c07b825f14b65c6/65bce3e7a69ba4fc631f3912_culture-amp-light.svg" 
              alt=""
            />
          </div>
          <div className="cards-data">
            <p>
              SID-Dev has been a tremendous help for us. For a company as big as
              ours, we need SID-Dev to help us standardize all of our data across a
              lot of platforms, brands, and markets, no matter where it is
              coming from.
            </p>
            <p>Read more reviews on G2</p>
          </div>
          <div className="cust-data">
            <div className="cust-img-wrapper">
              <img
                src={siddharth}
                alt="cust1"
              />
            </div>
            <div className="cust-name">
              <p className="firstname">Siddharth</p>
              <p>Transient <span className="transientX">X</span></p>
            </div>
          </div>
        </div>
        <div className="cards card3">
          <div className="title">
            <svg
              width="19"
              height="18"
              viewBox="0 0 36 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36 7.26486C29.2776 7.26486 26.9779 9.85946 26.9779 13.7514V16.9514H35.7346V32H19.9017V14.1838C19.9017 5.27567 25.2088 0 36 0V7.26486ZM0 32V14.1838C0 5.27567 5.30713 0 16.0983 0V7.26486C9.37592 7.26486 7.07617 9.85946 7.07617 13.7514V16.9514H15.8329V32H0Z"
                fill="#FF0EB4"
              ></path>
            </svg>
            <img
              src="https://cdn.prod.website-files.com/65b671b80c07b825f14b65c6/65bce3e7a69ba4fc631f3912_culture-amp-light.svg"
              alt=""
            />
          </div>
          <div className="cards-data">
            <p>
              SID-Dev has been a tremendous help for us. For a company as big as
              ours, we need SID-Dev to help us standardize all of our data across a
              lot of platforms, brands, and markets, no matter where it is
              coming from.
            </p>
            <p>Read more reviews on G2</p>
          </div>
          <div className="cust-data">
            <div className="cust-img-wrapper">
              <img
                src={aehertz}
                alt="cust1"
              />
            </div>
            <div className="cust-name">
              <p className="firstname">Abhinandan</p>
              <p>AE-HERTZ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;

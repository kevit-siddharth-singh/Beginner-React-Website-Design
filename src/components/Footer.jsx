import React from "react";
import "./Footer.css";
import footerLogo from "../Assets/footer-logo.png";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-section-1">
          <p className="footer-msg">Ready to elevate your data quality?</p>
          <div className="btn-grp">
            <button className="btn sign-up">Sign up for free</button>
            <button className="btn try-sandbox">Try sandbox</button>
          </div>
        </div>
        <div className="footer-section-2">
          <div className="logo-data">
            <img src={footerLogo} alt="" />
            <p>Guarantee data quality upstream</p>
          </div>

          <div className="links">
            <div className="link-grp">
              <li>About</li>
              <li>Jobs</li>
              <li>Docs</li>
              <li>Security</li>
            </div>
            <div className="link-grp">
              <li>Terms and conditions</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li></li>
            </div>
            <div className="link-grp">
              <li>Let's chat</li>
              <li>sid@dev.com</li>
              <li className="social-icons"></li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

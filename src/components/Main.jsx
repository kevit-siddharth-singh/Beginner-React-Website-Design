import "./Main.css";
import React from "react";
import post1 from "../Assets/post-1.jpg";
import post2 from "../Assets/post-2.jpg";

function Main() {
  return (
    <div className="main">
      <div className="section-para">
        <p className="para-title">CHEVROLET</p>
        <p className="para-subtitle">
          A mobile product to curb distracted driving
        </p>
      </div>
      <hr className="divider first-div" />
      <div className="posts">
        <div className="post-1">
          <img className="post-img" src={post1} alt="post-1" />

          <p className="para-title">Website Design</p>
          <p className="para-subtitle">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="post-2">
          <img className="post-img" src={post2} alt="post-2" />
          <p className="para-title">App Development</p>
          <p className="para-subtitle">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <hr className="divider" />
    </div>
  );
}

export default Main;

import React from "react";
import "./Article.css";
import dashboard from '../Assets/dashboard.jpg';
function Article() {
  return (
    <div className="article-wrapper">
      <div className="article-btn">
        <button>See All My work 👉</button>
      </div>
      <div className="extra-content">
        <div className="left-content">
          <p className="heading">
            We help companies make the most of their digital experiences.
          </p>
          <p className="data">
            You’re not looking for a vendor. You’re looking for a partner. One
            who wants to understand your challenges—all of them—in order to make
            your project successful. (And we know that not all of those are
            solved with code). Because you don’t just need a solution. You need
            the best solution.
          </p>
        </div>
        <div className="right">
            <img className="right-img" src={dashboard} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Article;

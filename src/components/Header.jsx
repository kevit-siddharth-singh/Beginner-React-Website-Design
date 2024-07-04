import "./Header.css";

import logo from "../Assets/sid.png";
import bg from "../Assets/bg.mp4";
import bgPost from "../Assets/bg-post.png";

export default function Header() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-items">
          <div className="overlay"></div>
          <div className="data">  
            We Build Tomorrow's Mobile Experiences Today
            <p>
              We are a mobile-first digital product studio turning ideas into
              extraordinary experiences.
            </p>
          </div>
          <video className="bg-video" src={bg} autoPlay muted loop></video>
          <img className="bg-post" src={bgPost} alt="bg-post" />
          <div className="content">
            <img className="logo" src={logo} alt="logo" />
            <div className="links">
              <li>Work</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

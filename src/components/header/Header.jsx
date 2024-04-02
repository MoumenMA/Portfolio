import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <h1 className="logo">MoumenMA</h1>
        <ul className="nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Skils</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Education</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="container">
        <div className="paragraph">
          <h2>Nice to meet you! 👋🏼 </h2>
          <h2 className="name">I'm Mohammed Amine Moumen.</h2>
          <p>
            A web developer, <br /> passionate about building a modern <br />
            web application that users love.
            <br />
            <div className="social">
              <a href="https://github.com/MoumenMA">
                <i class="bx bxl-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/mohammed-amine-moumen/">
                <i class="bx bxl-linkedin-square"></i>
              </a>
              <a href="https://www.instagram.com/_____m0umen/">
                <i class="bx bxl-instagram"></i>
              </a>
            </div>
          </p>
        </div>
        <div className="img-side">
          <img src="../src/assets/portfolio-img.jpg" alt="moumen" />
          <div className="shapes">
            <div className="bottom-side">
              <div className="square-1"></div>
              <div className="round-1"></div>
            </div>
            <div className="top-side">
              <div className="square-2"></div>
              <div className="round-2"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

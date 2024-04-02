import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="social-footer">
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
      <p className="copyright">© Mohammed Amine Moumen 2024</p>
    </div>
  );
}

export default Footer;

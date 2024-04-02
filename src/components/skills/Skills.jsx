import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-disp">
        <div className="tools">
          <h5>Front end Developement</h5>
          <div className="ftools">
            <i class="bx bxl-react"></i>
            <i class="bx bxl-html5"></i>
            <i class="bx bxl-css3"></i>
            <i class="bx bxl-tailwind-css"></i>
          </div>
        </div>
        <div className="tools">
          <h5>Programming Developement</h5>
          <div className="ftools">
            <i class="bx bxl-javascript">
              <i class="bx bxl-typescript"></i>
              
              <i class="bx bxl-java"></i>
            </i>
          </div>
        </div>
        <div className="tools">
          <h5>Back end Developement</h5>
          <div className="ftools">
            <i class="bx bxl-nodejs"></i>
            <i class="bx bxl-mongodb"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

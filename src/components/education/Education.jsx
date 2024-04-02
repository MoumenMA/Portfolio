import React from "react";
import "./Education.css";
function Education() {
  return (
    <>
      <h1 className="title-education">Education</h1>
      <div className="edu">
        <div>
          <div className="timeline">
            <div className="timeline-info">
              <i class="bx bxs-calendar" /> <span>2024 - Present</span>
            </div>
            <div className="round-container">
              <div className="round"></div>
            </div>
            <div className="timeline-content">
              <h3>Usine de talents Ark-x jobintech ,Rabat</h3>
              <p>Développeur Mern Stack</p>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-info">
              <i class="bx bxs-calendar" /> <span>2020-2023</span>
            </div>
            <div className="round-container">
              <div className="round"></div>
            </div>
            <div className="timeline-content">
              <h3>Université Abdelmalek Essaadi, TETOUAN</h3>
              <p> licence en sciences mathématiques et informatique</p>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-info">
              <i class="bx bxs-calendar" /> <span>2017-2020</span>
            </div>
            <div className="rounder">
              <div className="round-container">
                <div className="round"></div>
              </div>
            </div>
            <div className="timeline-content">
              <h3> Lycée MOHAMED VI , Martil</h3>
              <p> baccalauréat en sciences mathematique</p>
            </div>
          </div>
        </div>
        <div className="img-edu">
          <img src="../src/assets/developer.png" alt="hello" />
        </div>
      </div>

      {/* <ul className="timline">
        <li className="timeline-item">
          <div className="timeline-info">
            <i class="bx bxs-calendar">2024 - Present</i>
          </div>

          <div>
            <span className="rounder"></span>
            <span className="timeline-marker"></span>
          </div>
          <div className="timeline-content">
            <h3>Usine de talents Ark-x jobintech</h3>
            <p>Développeur Mern Stack</p>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-info">
            <i class="bx bxs-calendar"></i>
          </div>
          <div>
            <span className="rounder"></span>
            <span className="timeline-marker"></span>
          </div>
          <div className="timeline-content">
            
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-info">
            <i class="bx bxs-calendar"></i>
          </div>
          <div>
            <span className="rounder"></span>
            <span className="timeline-marker"></span>
          </div>
          <div className="timeline-content">
            
          </div>
        </li>
      </ul> */}
    </>
  );
}

export default Education;

import React from "react";
import "./Project.css";

function Project() {
  return (
    <>
      <h1 className="project-title">Project 🎨</h1>

      <article className="card">
        <div className="img">
          <img width={600} src="../src/assets/test.png" alt="test" />
        </div>

        <div className="box">
          <h1 className="title-prjct">Landing Page</h1>
          <p className="sub-title">
            Lorem ipsum dolor sit amet consectetur , <br /> adipisicing elit.
            Ullam laborum accusantium tenetur?
          </p>
          <div className="icons">
            <a href="https://moumenma.github.io/PR_Meta/">
              <i class="bx bx-link"></i>
            </a>
            <a href="https://github.com/MoumenMA">
              <i class="bx bxl-github"></i>
            </a>
          </div>
        </div>
      </article>
      <article className="card">

        <div className="box">
          <h1 className="title-prjct">Landing Page</h1>
          <p className="sub-title">
            Lorem ipsum dolor sit amet consectetur , <br /> adipisicing elit.
            Ullam laborum accusantium tenetur?
          </p>
          <div className="icons">
            <a href="https://moumenma.github.io/PR_Meta/">
              <i class="bx bx-link"></i>
            </a>
            <a href="https://github.com/MoumenMA">
              <i class="bx bxl-github"></i>
            </a>
          </div>
        </div>
        <div className="img">
          <img width={600} src="../src/assets/prjct1.png" alt="test" />
        </div>
      </article>
      <article className="card">
        <div className="img">
          <img width={600} src="../src/assets/test.png" alt="test" />
        </div>

        <div className="box">
          <h1 className="title-prjct">FOOT-CHAT APP</h1>
          <p className="sub-title">
            Lorem ipsum dolor sit amet consectetur , <br /> adipisicing elit.
            Ullam laborum accusantium tenetur?
          </p>
          <div className="icons">
            <a href="https://moumenma.github.io/PR_Meta/">
              <i class="bx bx-link"></i>
            </a>
            <a href="https://github.com/MoumenMA">
              <i class="bx bxl-github"></i>
            </a>
          </div>
        </div>
      </article>
    </>
  );
}

export default Project;

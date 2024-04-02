import React from "react";
import Header from "./components/header/Header";

import Skills from "./components/skills/Skills";
import Project from "./components/projectss/Project";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      
      <Skills />
      <Project/>
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

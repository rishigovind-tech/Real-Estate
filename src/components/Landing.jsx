import React from "react";
import Header from './Header'
import About from './About'
import Marquee from './Marquee'
import Projects from './Projects'
import Testimonails from './Testimonails'
import Contact from './Contact'
import Footer from './Footer'

const Landing = () => {
  return (
    <div>
      <Header />
      <About />
      <Marquee />
      <Projects />
      <Testimonails />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;

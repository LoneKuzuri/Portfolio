import React from 'react'
import Navbar from './HomePage/Navbar'
import Home from './HomePage/home';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import Skills from './skills/Skills';
import About from './About/About';
import Footer from './Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Experience />
      <Skills/>
      <About />
      <Footer/>
    </div>
  )
}

export default App;

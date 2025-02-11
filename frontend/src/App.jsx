import React from 'react';
import Navbar from './components/Navbar';
import MainP from './components/MainP';
import About from './components/About';
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skill from './components/Skill';
import {Projects} from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainP />} />
        </Routes>
        <About />
        <Skill />
        <Projects />
        <Contact />
      </div>
    </Router>
  );
}

export default App;

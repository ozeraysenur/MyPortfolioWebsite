import React from 'react';
import "./index.css"
import HireMe from './components/HireMe';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';

const App = () => {
  return (
    <>
    <header>
      <HireMe/>
    </header>
    <main>
      <AboutMe/>
      <Skills/>
    </main>
    </>
  );
};

export default App;

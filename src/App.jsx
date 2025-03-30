import React from 'react';
import "./index.css"
import HireMe from './components/HireMe';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Profile from './components/Profile';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import LanguageSwitcher from './components/LanguageSwitcher';


const App = () => {
  return (
    <>
    <div className="min-h-screen bg-background text-text dark:bg-background dark:text-text">
    <LanguageSwitcher/>
    <header>
      <DarkModeToggle/>
      <HireMe/>
    </header>
    <main>
      <AboutMe/>
      <Skills/>
      <Profile/>
      <Projects/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </div>
    </>
  );
};

export default App;

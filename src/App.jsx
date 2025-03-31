import React, { useEffect } from 'react';
import "./index.css"
import HireMe from './components/HireMe';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Profile from './components/Profile';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import LanguageSwitcher from './components/LanguageSwitcher';
import { ToastContainer, toast } from 'react-toastify';


const App = () => {

  const theme = localStorage.getItem("theme");
  const language = localStorage.getItem("language");

  useEffect(() => {
    toast(language == "en" ? "Welcome to my page! ⭐" : "Sayfama Hoş Geldin! ⭐", {
      position: "bottom-right",
      autoClose: 3000,
      className:
      "bg-white dark:bg-background border-solid border-indigo-600 text-gray-700 dark:text-white shadow-lg",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: theme === "dark" ? "dark" : "light", 
    });
  }, []);

  return (
    <>
    <div className="bg-background text-text dark:bg-background dark:text-text">
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
    <ToastContainer />
    </div>
    </>
  );
};

export default App;

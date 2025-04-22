import About from "./components/About";
import Career from "./components/Career";
import Coding from "./components/Coding";
import Contact from "./components/Contact";
import Hobbies from "./components/Hobbies";
import Intro from "./components/Intro";
import Dropdown from "./components/atoms/Dropdown";
import ToTop from "./components/atoms/ToTop";
import { useState, useEffect } from 'react';

export default function App() {
  const [currentSection, setCurrentSection] = useState('intro');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'about', 'career', 'coding', 'hobbies', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
  
      let sectionFound = false;
  
      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setCurrentSection(section);
          sectionFound = true;
          break;
        }
      }
  
      // If no section matches and scroll is at the top, reset to 'intro'
      if (!sectionFound && window.scrollY === 0) {
        setCurrentSection('intro');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getBackground = () => {
    switch(currentSection) {
      case 'intro':
        return 'bg-gradient-to-r from-blue-950 to-blue-900';
      case 'about':
        return 'bg-gradient-to-r from-cyan-900 to-blue-950';
      case 'career':
        return 'bg-gradient-to-r from-blue-950 to-sky-800';
      case 'coding':
        return 'bg-gradient-to-r from-blue-900 to-blue-950';
      case 'hobbies':
        return 'bg-gradient-to-r from-blue-950 to-cyan-900';
      case 'contact':
        return 'bg-gradient-to-r from-sky-800 to-blue-950';
      default:
        return 'bg-gradient-to-r from-blue-950 to-blue-900';
    }
  };

  return (
    <div className={`${getBackground()} transition-colors duration-1000 scroll-smooth min-h-screen`}>
        <Dropdown />
        <Intro />
        <About />
        <Career />
        <Coding />
        <Hobbies />
        <Contact />
        <footer className="pb-5 bg-transparent">
          <ToTop />
        </footer>
      </div>
  )
}
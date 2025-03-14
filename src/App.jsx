import About from "./components/About";
import Career from "./components/Career";
import Coding from "./components/Coding";
import Contact from "./components/Contact";
import Hobbies from "./components/Hobbies";
import Intro from "./components/Intro";
import Dropdown from "./components/atoms/Dropdown";
import MobileNav from "./components/atoms/MobileNav";
import ToTop from "./components/atoms/ToTop";

export default function App(){
  return(
      <div className="bg-white scroll-smooth">
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
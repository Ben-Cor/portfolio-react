import About from "./components/About";
import Career from "./components/Career";
import Coding from "./components/Coding";
import Contact from "./components/Contact";
import Hobbies from "./components/Hobbies";
import Intro from "./components/Intro";
import ToTop from "./components/atoms/ToTop";

export default function App(){
  return(
    <html class="scroll-smooth">
      <div className="bg-white">
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
    </html>
  )
}
import About from "./components/About";
import Career from "./components/Career";
import Coding from "./components/Coding";
import Contact from "./components/Contact";
import Hobbies from "./components/Hobbies";
import Intro from "./components/Intro";

export default function App(){
  return(
    <div className="bg-white">
      <Intro />
      <About />
      <Career />
      <Coding />
      <Hobbies />
      <Contact />
    </div>
  )
}
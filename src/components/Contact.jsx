import Images from "./atoms/Images";
import SectionTitle from "./atoms/SectionTitle";
import useIntersectionObserver from "../hooks/intersectionObserver";
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faSquareGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useRef } from "react";
import simpsonsGIF from "../images/simpsonsGIF.gif";

export default function Contact() {

    const contactRef = useRef(null);
    const isVisible = useIntersectionObserver(contactRef, {threshold: 0.6 });

    var showClass = isVisible ? "translate-y-0 transition duration-500 ease-in-out delay-300 md:delay-0" : "translate-y-[100px] transition duration-400 ease-in-out";

    return (
        <div ref={contactRef} id="contact" className="flex flex-col justify-center items-center text-center gap-4 px-10 h-screen">
            <SectionTitle title={'Contact'} />
            <p className="mb-10 text:xl font-secondary text-neutral-300 px-[5%] md:text-2xl">If you would like to get in touch, please either send me an email or use one of the socials links below</p>
            <Images className={`${showClass} w-[300px]  border-neutral-200 border-2 md:mt-10 md:mb-[5vh] md:w-[20vw] md:max-w-[500px]`} src={simpsonsGIF} alt={'simpsons gif showing homer sending an email'} />
            <div id="contact" className="grid grid-cols-1 md:flex md:flex-row">
                <a className="p-2 mx-4" target="_blank"  href="https://www.linkedin.com/in/ben-cornell-a7228455/" >
                  <FontAwesomeIcon className="p-2 mx-4 text-4xl text-neutral-300 hover:text-blue-700 duration-200" icon={faLinkedin} />  
                </a>
                <a className="p-2 mx-4" target="_blank" href="https://github.com/Ben-Cor">
                    <FontAwesomeIcon className="p-2 mx-4 text-4xl text-neutral-300 hover:text-blue-700 duration-200" icon={faSquareGithub} />
                </a>
                <a className="p-2 mx-4" href="mailto:ben.james.cornell@gmail.com">
                    <FontAwesomeIcon className="p-2 mx-4 text-4xl text-neutral-300 hover:text-blue-700 duration-200" icon={faEnvelope} />
                </a>
            </div>
            
        </div>
    )
}
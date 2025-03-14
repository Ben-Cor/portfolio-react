import Images from "./atoms/Images";
import SectionTitle from "./atoms/SectionTitle";
import useIntersectionObserver from "../hooks/intersectionObserver";
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faSquareGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useRef } from "react";

export default function Contact() {

    const contactRef = useRef(null);
    const isVisible = useIntersectionObserver(contactRef, {threshold: 0.4 });

    var showClass = isVisible ? "translate-y-0 transition duration-500 ease-in-out" : "translate-y-[100px] transition duration-400 ease-in-out";

    return (
        <div ref={contactRef} className="flex flex-col items-center text-center pt-[22vh] pb-[5vh] w-[100%] md:pt-[27vh] ">
            <SectionTitle title={'Contact'} />
            <p className="mb-10 text:xl font-secondary px-[5%] md:text-[1.25rem]">If you would like to get in touch, please either send me an email or use one of the socials links below</p>
            <Images className={`${showClass} w-[200px]  border-slate-900 border-2 shadow-2xl md:mt-10 md:mb-[5vh] md:w-[20vw]`} src={"src/images/simpsonsGIF.gif"} alt={'simpsons gif showing homer sending an email'} />
            <div id="contact" className="mb-[10%] mt-10 md:mb-[8vh]">
                <a className="p-2 mx-4" target="_blank"  href="https://www.linkedin.com/in/ben-cornell-a7228455/" >
                  <FontAwesomeIcon className="p-2 mx-4 text-4xl hover:text-blue-700 duration-200" icon={faLinkedin} />  
                </a>
                <a className="p-2 mx-4" target="_blank" href="https://github.com/Ben-Cor">
                    <FontAwesomeIcon className="p-2 mx-4 text-4xl hover:text-blue-700 duration-200" icon={faSquareGithub} />
                </a>
                <a className="p-2 mx-4" href="mailto:ben.james.cornell@gmail.com">
                    <FontAwesomeIcon className="p-2 mx-4 text-4xl hover:text-blue-700 duration-200" icon={faEnvelope} />
                </a>
            </div>
            
        </div>
    )
}
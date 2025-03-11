import Images from "./atoms/Images";
import SectionTitle from "./atoms/SectionTitle";
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faSquareGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
        <div id="contact" className="flex flex-col items-center text-center pt-[22vh] pb-[5vh] w-[100%] md:pt-[27vh] ">
            <SectionTitle title={'Contact'} />
            <p className="mb-10 text:xl font-secondary px-[5%] md:text-[1.25rem]">If you would like to get in touch, please either send me an email or use one of the socials links below</p>
            <Images className={"w-[200px] mt-20 md:w-[20vw] border-slate-900 border-2 shadow-2xl md:mt-0 md:mb-[5vh]"} src={"src/images/simpsonsGIF.gif"} alt={'simpsons gif showing homer sending an email'} />
            <div className="mb-[5%] md:mb-[20vh]">
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
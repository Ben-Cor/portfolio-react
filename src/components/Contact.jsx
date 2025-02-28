import Images from "./atoms/Images";
import SectionTitle from "./atoms/SectionTitle";
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faSquareGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
        <div id="contact" className="flex flex-col items-center text-center pt-[22vh] pb-[15vh] w-[100%] md:pt-[27vh] ">
            <SectionTitle title={'Contact'} />
            <p className="mb-20 text:xl md:text-2xl">If you would like to get in touch, please either send me an email or use one of the socials links below</p>
            <div className="mb-[5%]">
                <a className="p-2 mx-4" target="_blank"  href="https://www.linkedin.com/in/ben-cornell-a7228455/" >
                  <FontAwesomeIcon className="p-2 mx-4 text-4xl" icon={faLinkedin} />  
                </a>
                <a className="p-2 mx-4" target="_blank" href="https://github.com/Ben-Cor">
                    <FontAwesomeIcon className="p-2 mx-4 text-4xl" icon={faSquareGithub} />
                </a>
                <a className="p-2 mx-4" href="mailto:ben.james.cornell@gmail.com">
                    <FontAwesomeIcon className="p-2 mx-4 text-4xl" icon={faEnvelope} />
                </a>
            </div>
            <Images className={"w-[300px] mt-20 md:w-[30vw] md:mt-0"} src={"src/images/Geo1.png"} alt={'Geometric shapes with a graduation cap shown'} />
        </div>
    )
}
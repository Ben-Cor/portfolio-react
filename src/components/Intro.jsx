import DecryptedText from "./atoms/DecryptedText";
import Images from "./atoms/Images";
import MainTitle from "./atoms/MainTitle";
import avatar from "../images/avatar2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Intro() {
    return (
        <div className="flex flex-col justify-center items-center text-center px-10 h-screen gap-8">
            <Images className="w-[20vw] min-w-[200px] max-w-[450px] mb-4" src={avatar} alt={"Animated style image of Ben Cornell"} />
            <div>
                <MainTitle title='Hi! I am Ben Cornell.' />
                <DecryptedText 
                    text="I code things." 
                    speed={100} 
                    maxIterations={20} 
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+" 
                    sequential="true"
                    className="revealed text-[2rem] font-primary text-slate-900 lg:text-[4.5rem]" 
                    parentClassName="all-letters"
                    encryptedClassName="encrypted text-[2rem] font-primary text-slate-900 lg:text-[4.5rem]"
                    animateOn="view"
                    revealDirection="start"
                    delay={300}
                />
            </div>
            <DecryptedText 
            text="React | PHP | MySQL" 
            speed={75} 
            maxIterations={20} 
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+" 
            sequential="true"
            className="revealed text-[1.5rem] font-primary text-blue-700 md:text-[2rem]" 
            parentClassName="all-letters"
            encryptedClassName="encrypted text-[1.5rem] text-blue-700 font-primary md:text-[2rem]"
            animateOn="view"
            revealDirection="start"
            delay={300}
            />
            <p className="text-[1rem] font-primary text-slate-900 lg:text-[1.5rem] pt-[5vh]">A little more about me</p>
            <FontAwesomeIcon className="p-2 mx-4 text-4xl hover:text-blue-700 duration-200" icon={faArrowDown} />
        </div>
    )
}
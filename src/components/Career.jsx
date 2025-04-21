import Images from "./atoms/Images";
import SectionTitle from "./atoms/SectionTitle";
import TextBodyRight from "./atoms/TextBodyRight";
import useIntersectionObserver from "../hooks/intersectionObserver";
import Button from "./atoms/Button";
import { useRef } from "react";
import southParkGIF from "../images/southParkGIF.gif";
import BenCV from "../images/BenCV.pdf";

export default function Career() {

    const careerRef = useRef(null);
    const isVisible = useIntersectionObserver(careerRef, {threshold: 0.5 });

    var showClass = isVisible ? "opacity-100 transition duration-900 ease-in-out delay-400 md:delay-0" : "opacity-0 transition duration-400 ease-in-out";

    return (
        <div id="career" ref={careerRef} className="flex flex-col items-end text-right text-slate-800 max-w-[95%] pr-[3%] py-[15vh] md:py-[20vh]">
            <SectionTitle title={"Career"} />
            <div className="flex flex-col-reverse items-end justify-start gap-[10%] md:flex-row md:w-[90%] md:items-center">
                <Images className={`${showClass} w-[300px] mt-10 border-neutral-200 border-2 md:w-[30vw] md:mt-0`} src={southParkGIF} alt={'A gif of stan from south park claiming to have solved problems'} />
                <a  className="text-2xl p-2 px-4 mt-5 border-slate-800 border-2 rounded-3xl bg-slate-800 text-amber-50 md:hidden" href={BenCV} download="BenCV.pdf"> 
                    <Button text={'View my C.V.'} />
                </a>
                <TextBodyRight text={`I have been working as an Architect and Senior Architect 
                    since 2015. I have always loved problem solving and being able to find creative solutions 
                    to issues, and coding lets me achieve this without 
                    the constraints of architecture. My architectural experience has taught me range of 
                    valuable lessons including collaboration, communication, project management, problem solving, time management, 
                    and organisation. A copy of my C.V. is available to download using the link below.`} />
            </div>
                <a  className="text-2xl p-2 px-4 mt-5 hidden border-neutral-300 border-2 rounded-3xl bg-slate-800 text-neutral-300 hover:text-slate-800 hover:bg-neutral-300 md:block" href={BenCV} download="BenCV.pdf"> 
                    <Button text={'View my C.V.'} />
                </a>
        </div>
    )
}
import Images from "./atoms/Images";
import SectionTitle from "./atoms/SectionTitle";
import TextBodyRight from "./atoms/TextBodyRight";
import useIntersectionObserver from "../hooks/intersectionObserver";
import { useRef } from "react";
import conesGIF from "../images/conesGIF.gif";

export default function Hobbies() {

    const hobbiesRef = useRef(null);
    const isVisible = useIntersectionObserver(hobbiesRef, {threshold: 0.4 });

    var showClass = isVisible ? "opacity-100 transition duration-900 ease-in-out delay-300 md:delay-0" : "opacity-0 transition duration-400 ease-in-out";

    return (
        <section id="hobbies" ref={hobbiesRef} className="flex flex-col items-end text-right text-slate-800 max-w-[95%] pr-[3%] py-[15vh] lg:py-[20vh]">
                    <SectionTitle title={"Hobbies"} />
                    <div className="flex flex-col-reverse items-end justify-start gap-[10%] lg:items-center lg:justify-end lg:flex-row lg:w-[90%]">
                        <Images className={`${showClass} w-[300px] mt-18 border-neutral-200 border-2 lg:max-w-[600px] md:w-[25vw] lg:mt-0`} src={conesGIF} alt={'gif of Ben from parks and rec playing cones of dunshire'} />
                        <TextBodyRight text={`When I am not coding, my hobbies and interests include computer games, 
                            board games, and cooking as well as reading (mainly sci-fi or fantasy), long dog walks in the 
                            countryside, or meeting up with friends in a cosy pub.`} />
                    </div>
        </section>
    )
}
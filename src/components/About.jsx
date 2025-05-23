import Images from "./atoms/Images";
import TextBodyLeft from "./atoms/TextBodyLeft";
import SectionTitle from "./atoms/SectionTitle";
import useIntersectionObserver from "../hooks/intersectionObserver";
import { useRef } from "react";
import thumbsUpGIF from "../images/thumbsUpGIF.gif";

export default function About() {

    const aboutRef = useRef(null);
    const isVisible = useIntersectionObserver(aboutRef, {threshold: 0.5 });

    var showClass = isVisible ? "opacity-100 transition duration-900 ease-in-out" : "opacity-0 transition duration-400 ease-in-out";

    return (
        <section id="about" ref={aboutRef} className="flex flex-col items-start text-left pb-[22vh] pt-[17vh] pl-[5%] md:pb-[27vh] md:pt-[17vh]">
            <SectionTitle className="" title={"About"} />
            <div className="flex flex-col items-start justify-start gap-[10vw] w-[95%] md:items-center md:flex-row md:justify-center">
                <TextBodyLeft text={`I'm an aspiring Software Engineer working with a range of languages and frameworks 
                        including React, MySQL, Laravel, and PHP.
                        I have always had an interest in coding since editing a MySpace page when I was young. I have continued to dabble in coding since then and recently I have had the 
                        opportunity to greatly expand on these skills through a software development bootcamp with iO Academy.`} />
                <Images className={`${showClass} w-[300px] mt-5 border-neutral-200 border-2 md:max-w-[500px] md:w-[60vw] md:mr-20`} src={thumbsUpGIF} alt={"A gif showing a child typing and giving a thumbs up"} />
            </div>
        </section>
    )
}
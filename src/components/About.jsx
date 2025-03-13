import Images from "./atoms/Images";
import TextBodyLeft from "./atoms/TextBodyLeft";
import SectionTitle from "./atoms/SectionTitle";

export default function About() {
    return (
        <div id="about" className="flex flex-col items-start text-left pb-[22vh] pt-[17vh] pl-[5%] md:pb-[27vh] md:pt-[17vh]">
            <SectionTitle className="" title={"About"} />
            <div className="flex flex-col items-start justify-start gap-[10%] w-[95%] md:items-start md:flex-row md:justify-start">
                <TextBodyLeft text={`I'm an aspiring Software Engineer working with a range of languages and frameworks 
                        including React, MySQL, Laravel, and PHP.
                        I have always had an interest in coding since editing a MySpace page when I was young. I have continued to dabble in coding since then and recently I have had the 
                        opportunity to greatly expand on these skills through a software development bootcamp with iO Academy.`} />
                <Images className={"w-[300px] mt-5 border-slate-900 border-2 shadow-2xl md:w-[60vw] md:pr-0 md:mr-20"} src={"src/images/thumbsUpGIF.gif"} alt={"A gif showing a child typing and giving a thumbs up"} />
            </div>
        </div>
    )
}
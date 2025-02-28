import Images from "./atoms/Images";
import TextBodyLeft from "./atoms/TextBodyLeft";
import SectionTitle from "./atoms/SectionTitle";

export default function About() {
    return (
        <div id="about" className="flex flex-col items-start text-left pb-[22vh] pt-[17vh] pl-[5%] md:pb-[27vh] md:pt-[17vh]">
            <SectionTitle title={"About"} />
            <div className="flex flex-col items-start justify-start gap-[10%] w-[95%] md:items-center md:flex-row md:justify-start">
                <TextBodyLeft text={`I'm an architect & an aspiring Software Engineer.
                        I have always had an interest in coding since editing a MySpace page when I was young, and recently I have had the 
                        opportunity to greatly expand on these skills through a software development bootcamp.
                        My architectural background has given me good communication skills, problem solving abilities, and the ability to 
                        collaborate well on projects`} />
                <Images className={"w-[300px] mt-20 md:w-[30vw] md:mt-0"} src={"src/images/aboutGeo2.png"} alt={"Geometric shapes with a lightbulb"} />
            </div>
        </div>
    )
}
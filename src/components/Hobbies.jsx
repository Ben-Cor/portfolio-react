import Images from "./atoms/Images";
import SectionTitle from "./atoms/SectionTitle";
import TextBodyRight from "./atoms/TextBodyRight";

export default function Hobbies() {
    return (
        <div id="hobbies" className="flex flex-col items-end text-right text-slate-800 max-w-[95%] pr-[3%] py-[15vh] lg:py-[20vh]">
                    <SectionTitle title={"Hobbies"} />
                    <div className="flex flex-col-reverse items-end justify-start gap-[10%] lg:items-center lg:flex-row lg:w-[90%]">
                        <Images className={"w-[300px] mt-18 border-slate-900 border-2 shadow-2xl lg:w-[30vw] lg:mt-0"} src={"src/images/conesGIF.gif"} alt={'gif of Ben from parks and rec playing cones of dunshire'} />
                        <TextBodyRight text={`When I am not coding, my hobbies and interests include computer games, 
                            board games, and cooking as well as reading (mainly sci-fi or fantasy), long dog walks in the 
                            countryside, or meeting up with friends in a cosy pub.`} />
                    </div>
        </div>
    )
}
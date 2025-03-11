import Images from "./atoms/Images";
import SectionTitle from "./atoms/SectionTitle";
import TextBodyRight from "./atoms/TextBodyRight";

export default function Hobbies() {
    return (
        <div id="hobbies" className="flex flex-col items-end text-right text-slate-800 max-w-[95%] pr-[3%] py-[15vh] md:py-[20vh]">
                    <SectionTitle title={"Hobbies"} />
                    <div className="flex flex-col-reverse items-center justify-start gap-[10%] md:flex-row md:w-[90%]">
                        <Images className={"w-[300px] mt-20 md:w-[30vw] border-slate-900 border-2 shadow-2xl md:mt-0"} src={"src/images/conesGIF.gif"} alt={'Geometric shapes with a playstation controller shown'} />
                        <TextBodyRight text={`When I am not coding, my hobbies and interests include computer games, 
                            board games, and cooking as well as reading (mainly sci-fi or fantasy), long dog walks in the 
                            countryside, or meeting up with friends in a cosy pub.`} />
                    </div>
        </div>
    )
}
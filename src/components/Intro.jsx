import Images from "./atoms/Images";
import MainTitle from "./atoms/MainTitle";

export default function Intro() {
    return (
        <div className="flex flex-col items-center text-center gap-4 px-10 pt-[25vh] h-[100vh] md:pt-[15vh]">
            <Images className="w-[450px]" src={"src/images/avatar.png"} alt={"Animated style image of Ben Cornell"} />
            <MainTitle title='<h1>I am Ben Cornell</h1>' secondTitle='<h2>I code things</h2>'/>
        </div>
    )
}
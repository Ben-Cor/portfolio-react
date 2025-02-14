import MainTitle from "./atoms/MainTitle";

export default function Intro() {
    return (
        <div className="flex flex-col items-center text-center gap-4 px-10 pt-[25vh] h-[100vh] md:pt-[15vh]">
            <MainTitle title='Test' secondTitle='Test 2'/>
        </div>
    )
}
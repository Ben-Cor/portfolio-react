import DecryptedText from "./atoms/DecryptedText";
import Images from "./atoms/Images";
import MainTitle from "./atoms/MainTitle";

export default function Intro() {
    return (
        <div className="flex flex-col items-center text-center gap-4 px-10 pt-[25vh] h-[100vh] md:pt-[15vh]">
            <Images className="w-[450px]" src={"src/images/avatar.png"} alt={"Animated style image of Ben Cornell"} />
            <MainTitle title='I am Ben Cornell' />
            <DecryptedText 
            text="I code things" 
            speed={100} 
            maxIterations={20} 
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+" 
            sequential = "true"
            className="revealed text-[1rem] font-primary md:text-[2rem]" 
            parentClassName="all-letters"
            encryptedClassName="encrypted text-[1rem] font-primary md:text-[2rem]"
            animateOn="view"
            revealDirection="start"
            />
        </div>
    )
}
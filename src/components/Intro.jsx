import DecryptedText from "./atoms/DecryptedText";
import Images from "./atoms/Images";
import MainTitle from "./atoms/MainTitle";
import avatar from "../images/avatar.png";

export default function Intro() {
    return (
        <div className="flex flex-col justify-center items-center text-center gap-4 px-10 h-screen">
            <Images className="w-[450px]" src={avatar} alt={"Animated style image of Ben Cornell"} />
            <MainTitle title='I am Ben Cornell' />
            <DecryptedText 
                text="I code things" 
                speed={100} 
                maxIterations={20} 
                characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+" 
                sequential="true"
                className="revealed text-[1.5rem] font-primary md:text-[2rem]" 
                parentClassName="all-letters"
                encryptedClassName="encrypted text-[1.5rem] font-primary md:text-[2rem]"
                animateOn="view"
                revealDirection="start"
                delay={300}
            />
              <DecryptedText 
                text="React | PHP | MySQL" 
                speed={75} 
                maxIterations={20} 
                characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+" 
                sequential="true"
                className="revealed text-[1.2rem] font-primary md:text-[1.75rem]" 
                parentClassName="all-letters"
                encryptedClassName="encrypted text-[1.2rem] font-primary md:text-[1.75rem]"
                animateOn="view"
                revealDirection="start"
                delay={300}
            />
        </div>
    )
}
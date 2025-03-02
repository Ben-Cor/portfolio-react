import Images from "./atoms/Images";
import SectionTitle from "./atoms/SectionTitle";
import TextBodyRight from "./atoms/TextBodyRight";
import Button from "./atoms/Button";

export default function Career() {
    return (
        <div id="career" className="flex flex-col items-end text-right text-slate-800 max-w-[95%] pr-[3%] py-[15vh] md:py-[20vh]">
            <SectionTitle title={"Career"} />
            <div className="flex flex-col-reverse items-center justify-start gap-[10%] md:flex-row md:w-[90%]">
                <Images className={"w-[300px] mt-20 md:w-[30vw] md:mt-0"} src={"src/images/careerGeo2.png"} alt={'Geometric shapes with a graduation cap shown'} />
                <TextBodyRight text={`I have been working as an Architect and Senior Architect 
                    since 2015 where I have been responsible for managing both teams of architects and 
                    a range of projects of values up to £4 million. I have obtained a variety of qualifications 
                    which include GCSE's, A Levels, a bachelor's and a master's degree in Architecture, and a 
                    diploma in Architectural Professional Practice. In additon, I have been ARB chartered and a 
                    member of the RIBA. Recently, I have also obtained a NCFE Level 2 Certificate in 
                    Understanding Coding. A copy of my C.V. is available to download using the link below.`} />
            </div>
                <a  className="text-2xl p-2 px-4 md:mr-0 mr-[25%] border-slate-800 border-2 rounded-3xl bg-slate-800 text-amber-50" href="src/images/BenCV.pdf" download="Ben Cornell - CV"> 
                    <Button text={'View my C.V.'} />
                </a>
        </div>
    )
}
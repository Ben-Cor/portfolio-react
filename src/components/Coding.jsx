import SectionTitle from "./atoms/SectionTitle";
import TextBodyLeft from "./atoms/TextBodyLeft";


export default function Coding() {
    return (
        <div>
            <div className="flex flex-col items-start text-left pb-[22vh] pt-[17vh] pl-[5%] md:pb-[27vh] md:pt-[17vh]">
                        <SectionTitle title={"Coding"} />
                        <div className="flex flex-col items-start justify-start gap-[10%] w-[95%] md:items-center md:flex-row md:justify-start">
                            <TextBodyLeft text={`During my iO academy bootcamp and throughout my own experiences, I have used a variety of programming and
                                markup languages such as HTML, CSS, JavaScript, SQL, and PHP.
                                In additon, I have utilised several frameworks and libraries such as Tailwind and React.  
                                While undertaking a distance learning course in order to obtain a NCFE Level 2 Certificate in Understanding Coding, 
                                I learnt about the development lifecycle as well as best practice and technical terminology.
                                Below you can see some of the projects I have developed.`} />
                        </div>
                        <div class="py-[5%] max-w-[90%]">
                            <h6 class="md:text-4xl text-2xl my-[5%]">Coding Projects</h6>
                        <div id="projectGrid" class="geoimageRight flex flex-wrap items-center justify-start gap-[5%] md:gap-20 my-2">
                    
                </div>
            </div>
            </div>
        </div>
    )
}
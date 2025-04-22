import ProjectsTable from "./atoms/ProjectsTable";
import SectionTitle from "./atoms/SectionTitle";
import TextBodyLeft from "./atoms/TextBodyLeft";


export default function Coding() {
    return (
        <div>
            <section id="coding" className="flex flex-col items-start text-left pb-[22vh] pt-[17vh] pl-[5%] md:pb-[27vh] md:pt-[17vh]">
                <SectionTitle title={"Coding"} />
                <div className="flex flex-col items-start justify-start gap-[10%] w-[95%] md:items-center md:flex-row md:justify-start">
                    <TextBodyLeft text={`During my iO academy bootcamp and throughout my own experiences, I have used a variety of programming and
                         languages and frameworks such as React, Laravel, MySQL, and PHP.
                        While undertaking a distance learning course in order to obtain a NCFE Level 2 Certificate in Understanding Coding, 
                        I learnt about the development lifecycle as well as best practice and technical terminology.
                        Below you can see some of the projects I have developed - more can be found on my GitHub profile.`} />
                </div>
                <div className="pt-[5%] max-w-[90%]">
                    <h5 className="md:text-4xl text-2xl font-primary text-neutral-200 my-[50px]">Coding Projects</h5>
                    <div id="projectGrid" className="flex flex-wrap items-center justify-start gap-[5%] md:gap-20 my-2">
                        <ProjectsTable />
                    </div>
                </div>
            </section>
        </div>
    )
}
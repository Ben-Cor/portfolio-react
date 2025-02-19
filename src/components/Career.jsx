import Images from "./atoms/Images";
import SectionTitle from "./atoms/SectionTitle";
import TextBodyRight from "./atoms/TextBodyRight";

export default function Career() {
    return (
        <div>
            <SectionTitle title={Career} />
            <TextBodyRight text={`I have been working as an Architect and Senior Architect 
                since 2015 where I have been responsible for managing both teams of architects and 
                a range of projects of values up to £4 million. I have obtained a variety of qualifications 
                which include GCSE's, A Levels, a bachelor's and a master's degree in Architecture, and a 
                diploma in Architectural Professional Practice. In additon, I have been ARB chartered and a 
                member of the RIBA. Recently, I have also obtained a NCFE Level 2 Certificate in 
                Understanding Coding. A copy of my C.V. is available to download using the link below.`} />
            <Images src={src/images/careerGeo2.png} alt={'Geometric shapes with a graduation cap shown'} />
        </div>
    )
}
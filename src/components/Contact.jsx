import Images from "./atoms/Images";
import SectionTitle from "./atoms/SectionTitle";
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    return (
        <div className="flex flex-col items-center text-center pt-[22vh] pb-[15vh] w-[100%] md:pt-[27vh] ">
            <SectionTitle title={'Contact'} />
            <p className="mb-20 text:xl md:text-2xl">If you would like to get in touch, please either send me an email or use one of the socials links below</p>
            <div>
                <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <Images className={"w-[300px] mt-20 md:w-[30vw] md:mt-0"} src={"src/images/Geo1.png"} alt={'Geometric shapes with a graduation cap shown'} />
            
        </div>
    )
}
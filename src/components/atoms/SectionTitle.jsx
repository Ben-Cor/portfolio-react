export default function SectionTitle({title}){

    return(
        <div>
            <h3 className="pt-10 text-[2rem] font-primary mb-[5%] text-blue-700 lg:mb-0 lg:text-[4rem] md:pt-0">{title}
                <span className="animate-blink border-r-[5px] border-blue-700 pl-3"></span>
            </h3>
        </div>
    )
}
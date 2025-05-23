export default function SectionTitle({title}){

    return(
        <div>
            <h3 className="pt-10 text-[2rem] font-primary mb-[5%] text-lime-500 lg:mb-0 lg:text-[4rem] md:pt-0">{title}
                <span className="animate-blink border-r-[5px] border-lime-500 pl-3"></span>
            </h3>
        </div>
    )
}
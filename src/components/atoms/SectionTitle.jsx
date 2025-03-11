export default function SectionTitle({title}){

    return(
        <div>
            <h3 className="pt-10 text-[4rem] font-primary mb-[5%] md:mb-0 md:text-[8rem] md:pt-0">{title}
                <span className="animate-blink border-r-[5px] border-slate-900 pl-3"></span>
            </h3>
        </div>
    )
}
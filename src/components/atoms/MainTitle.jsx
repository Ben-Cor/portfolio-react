export default function MainTitle({title, secondTitle}) {


    return(
        <div>
            <h1 className="text-lg font-primary md:text-[3rem]">{title}</h1>
            <h2 className="text-lg font-primary pt-[2%] md:text-[2rem]">{secondTitle}</h2>
        </div>
    )
}
export default function MainTitle({title, secondTitle}) {
    return(
        <div>
            <h1 className="text-lg md:text-[3rem]">{title}</h1>
            <h2 className="text-lg md:text-[2rem] pt-[5%]">{secondTitle}</h2>
        </div>
    )
}
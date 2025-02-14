export default function Images({src, alt, className}){
    return (
        <img className={className} src={src} alt={alt} />
    )
}
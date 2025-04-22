export default function NavContent(){
    return(
        <nav className="text-right md:block">
            <a href="#about" className="block p-1 m-2 hover:text-neutral-300 hover:bg-slate-800 border-[1px] border-blue-300 bg-neutral-300 z-20 font-primary">About</a>
            <a href="#career" className="block p-1 m-2 hover:text-neutral-300 hover:bg-slate-800 border-[1px] border-blue-300 bg-neutral-300 z-20 font-primary">Career</a>
            <a href="#coding" className="block p-1 m-2 hover:text-neutral-300 hover:bg-slate-800 border-[1px] border-blue-300 bg-neutral-300 z-20 font-primary">Coding</a>
            <a href="#hobbies" className="block p-1 m-2 hover:text-neutral-300 hover:bg-slate-800 border-[1px] border-blue-300 bg-neutral-300 z-20 font-primary">Hobbies</a>
            <a href="#contact" className="block p-1 m-2 hover:text-neutral-300 hover:bg-slate-800 border-[1px] border-blue-300 bg-neutral-300 z-20 font-primary">Contact</a>
        </nav>
    )
}
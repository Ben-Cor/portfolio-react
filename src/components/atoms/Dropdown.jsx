import NavContent from "./NavContent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

export default function Dropdown(){

const [isOpen, setIsOpen] = useState(false);

function handleDropdown (){
    setIsOpen(!isOpen);
}

    return (
        <div id="dropdown" className="md:block pt-6 pl-4" onClick={handleDropdown}>
                <button 
                aria-label="dropdown menu" 
                aria-hidden="true"
                className=" z-50 
                            fixed 
                            right-4 
                            top-6 
                            w-[50px] 
                            h-[50px] 
                            border-2 
                            border-neutral-300 
                            text-neutral-300 
                            bg-slate-800 p-3 rounded-3xl 
                            md:hover:text-slate-800 
                            md:hover:bg-neutral-300">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                {isOpen &&(
                    <div className="fixed right-4 top-18 z-10">
                        <NavContent /> 
                    </div>
                )}
                
        </div>
    )
}
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
        <div id="dropdown" className="hidden md:block py-6 pl-4">
                <button onClick={handleDropdown} className="fixed right-4 top-6 w-[50px] h-[50px] text-amber-100 bg-slate-800 p-3 rounded-3xl">
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
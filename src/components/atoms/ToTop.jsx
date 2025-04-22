import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function(){
    return(
        <div>
            <a href="#top" aria-label="to top of page" aria-hidden="true" className='animate-bounce z-50 fixed bottom-4 right-4 px-4 py-3 border-2 border-neutral-300 text-neutral-300 md:hover:text-slate-800 md:hover:bg-neutral-300 bg-slate-800 h-12 rounded-3xl'>
                <FontAwesomeIcon icon={faArrowUp} />
            </a>
        </div>
    )
}
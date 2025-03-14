import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function(){
    return(
        <div>
            <a href="#top" className='animate-bounce fixed bottom-4 right-4 px-4 py-3 text-amber-100 hover:text-blue-300 bg-slate-800 h-12 rounded-3xl'>
                <FontAwesomeIcon icon={faArrowUp} />
            </a>
        </div>
    )
}
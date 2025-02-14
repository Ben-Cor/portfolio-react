import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function(){
    return(
        <div>
            <a href="#top">
                <FontAwesomeIcon icon={faArrowUp} />
            </a>
        </div>
    )
}
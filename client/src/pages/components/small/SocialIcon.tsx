import { useState } from 'react' ;
import Graphic from './Graphic' ;
import { Size } from '../../../common/types' ;


type Props = {
    link: string,
    link_text: string,
    graphic_desc: string,
    graphic_src: string,
    keep_invert?: boolean
}
const SocialIcon = ({ link, link_text, graphic_desc, graphic_src, keep_invert } : Props) => {

    const [isHover, setHover] = useState(false) ;

    const handleHover = () => {
        setHover(true) ;
    }

    const handleNotHover = () => {
        setHover(false) ;
    }

    return (
        <div className='enclosed ' onMouseOver={handleHover} onMouseLeave={handleNotHover}>
            <a href={link} >
                <Graphic size={Size.Medium} graphic_src={graphic_src} desc={graphic_desc} extra_styles={keep_invert? 'keep-invert' : ''}/>
            </a>
            { isHover ?
                <p className='text-bubble'>{link_text}</p>
                : null
            }
        </div>
    )

}

export default SocialIcon ;
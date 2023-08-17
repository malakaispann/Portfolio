import { useState, memo } from 'react';
import Graphic from './Graphic';
import { Size } from '../../../common/types';


type Props = {
    link: string,
    link_text: string,
    graphic_desc: string,
    graphic_src: string,
    keep_invert?: boolean
}
const SocialIcon = ({ link, link_text, graphic_desc, graphic_src, keep_invert } : Props) => {

    const [isHover, setHover] = useState(false);

    const handleHover = () => {
        setHover(true);
    }

    const handleNotHover = (e: React.MouseEvent) => {

        let target: HTMLElement = e.target as HTMLElement;

        target.classList.add('bounce');

        setHover(false);
    }

    return (
        <div className='enclosed ' onMouseOver={handleHover}  onMouseLeave={e => handleNotHover(e)}>
            <a href={link} >
                <Graphic size={Size.Small} graphic_src={graphic_src} desc={graphic_desc} extra_styles={keep_invert? 'keep-invert' : ''}/>
            </a>
            { isHover ?
                <p className='text-bubble'>{link_text}</p>
                : null
            }
        </div>
    )

}

export default memo(SocialIcon);
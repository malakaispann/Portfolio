import { memo } from 'react';
import { LinkType } from '../../../common/types';
import HyperLink from './HyperLink';

type Props = {
    menuTrigger: boolean
    extra_function?: Function,
}

const NavMenu = ({ menuTrigger, extra_function  }: Props) => {
    
    return (
        <div className='nav'>
            <div className={`content ${menuTrigger ? 'display' : ''}`}>
                
                <div className='hyperlink-container'>
                    <HyperLink type={LinkType.Internal} to='/#about' extra_styles='active' extra_function={extra_function?? undefined}>
                        <p><span className='section-number'> 01.</span> About Me</p>
                    </HyperLink>
                    <HyperLink type={LinkType.Internal} to='/#projects' extra_function={extra_function?? undefined}>
                        <p><span className='section-number'> 02.</span> Projects</p>
                    </HyperLink>
                    <HyperLink type={LinkType.Internal} to='/#contact' extra_function={extra_function?? undefined}>
                        <p><span className='section-number'> 03.</span> Contact</p>
                    </HyperLink>
                </div>
            </div>

        </div>
    )
}

export default memo(NavMenu);
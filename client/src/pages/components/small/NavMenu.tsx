import { memo } from 'react' ;
import { LinkType } from '../../../common/types'
import { useLocation } from 'react-router-dom'
import HyperLink from './HyperLink'
import SocialFeed from './SocialFeed' ;

type Props = {
    menuTrigger: boolean
    extra_function?: Function,
}

const NavMenu = ({ menuTrigger, extra_function  }: Props) => {
    
    let location = useLocation() ;
    return (
        <div className='nav'>
            <div className={`content ${menuTrigger ? 'display' : ''}`}>
                
                <HyperLink type={LinkType.Internal} to='/#About' extra_styles={`${location.pathname === '/' ? 'active' : ''}`} extra_function={extra_function? extra_function: undefined}>
                    About Me
                </HyperLink>
                <HyperLink type={LinkType.Internal} to='/#Experience' extra_styles={`${location.pathname === '/' ? 'active' : ''}`} extra_function={extra_function? extra_function: undefined}>
                    Experience
                </HyperLink>
                <HyperLink type={LinkType.Internal} to='/projects' extra_styles={`${location.pathname === '/projects' ? 'active' : ''}`} extra_function={extra_function? extra_function: undefined}>
                    Projects
                </HyperLink>

                <SocialFeed/>
            </div>

        </div>
    )
}

export default memo(NavMenu) ;
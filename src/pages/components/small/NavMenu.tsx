import { memo } from 'react' ;
import { LinkType } from '../../../common/types'
import HyperLink from './HyperLink'

type Props = {
    menuTrigger: boolean
    extra_function?: Function,
}

const NavMenu = ({ menuTrigger, extra_function  }: Props) => {
    
    return (
        <div className='nav'>
            <div className={`content ${menuTrigger ? 'display' : ''}`}>
                
                <HyperLink type={LinkType.Internal} to='/#About' extra_styles='active' extra_function={extra_function? extra_function: undefined}>
                    About Me
                </HyperLink>
                <HyperLink type={LinkType.Internal} to='/#Experience' extra_function={extra_function? extra_function: undefined}>
                    Experience
                </HyperLink>
                <HyperLink type={LinkType.Internal} to='/#Projects' extra_function={extra_function? extra_function: undefined}>
                    Projects
                </HyperLink>
            </div>

        </div>
    )
}

export default memo(NavMenu) ;
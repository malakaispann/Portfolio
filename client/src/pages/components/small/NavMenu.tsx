import React from 'react'
import { LinkType } from '../../../common/types'
import { useLocation } from 'react-router-dom'
import HyperLink from './HyperLink'

type Props = {
    menuTrigger: boolean
}

const NavMenu = ({ menuTrigger }: Props) => {
    
    let location = useLocation() ;

    return (
        <div className='nav'>
            <div className={`content ${menuTrigger ? 'display' : ''}`}>
                
                <HyperLink type={LinkType.Internal} to='/#Introduction' extra_styles={`${location.pathname === '/' ? 'active' : ''}`}>
                    About Me
                </HyperLink>
                <HyperLink type={LinkType.Internal} to='/#Experience' extra_styles={`${location.pathname === '/' ? 'active' : ''}`}>
                    Experience
                </HyperLink>
                <HyperLink type={LinkType.Internal} to='/projects' extra_styles={`${location.pathname === '/projects' ? 'active' : ''}`}>
                    Projects
                </HyperLink>

            </div>

        </div>
    )
}

export default NavMenu
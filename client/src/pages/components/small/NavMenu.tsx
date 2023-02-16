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

            <div className={`nav content ${menuTrigger ? 'display' : ''}`}>
                
                <HyperLink type={LinkType.Internal} to={"/"} extra_styles={`${location.pathname === "/" ? "active" : ""}`}>
                    Home
                </HyperLink>
                <HyperLink type={LinkType.Internal} to={"/contact"} extra_styles={`${location.pathname === "/contact" ? "active" : ""}`}>
                    Contact
                </HyperLink>
                <HyperLink type={LinkType.Internal} to={"/projects"} extra_styles={`${location.pathname === "/projects" ? "active" : ""}`}>
                    Projects
                </HyperLink>

            </div>

        </div>
    )
}

export default NavMenu
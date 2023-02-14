import React, { useState } from 'react'
import { useThemeContext } from '../../../common/contexts/ThemeContext'
import { LinkType, MenuType } from '../../../common/types'
import HyperLink from './HyperLink'
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/outline'
import { useLocation } from 'react-router-dom'

type Props = {
    type: MenuType
}

const NavMenu = ({ type }: Props) => {
    
    const [menuTrigger, setMenuTrigger] = useState(false) ;
    const { getTheme } = useThemeContext() ;

    let theme = getTheme() ;
    let location = useLocation() ;

    const handleMenuToggle = () => {
        setMenuTrigger(!menuTrigger) ;
    }

    const menuContent = () => {
        return (
            <div className={`${type === MenuType.Full ? "full" : "mobile"} nav ${theme}`}>
                <HyperLink type={LinkType.Internal} to={"/"} extra_styles={`nav ${location.pathname === "/" ? "active" : ""}`}>
                    Home
                </HyperLink>
                <HyperLink type={LinkType.Internal} to={"/contact"} extra_styles={`nav ${location.pathname === "/contact" ? "active" : ""}`}>
                    Contact
                </HyperLink>
                <HyperLink type={LinkType.Internal} to={"/projects"} extra_styles={`nav ${location.pathname === "/projects" ? "active" : ""}`}>
                    Projects
                </HyperLink>
            </div>
        )
    }

    return (
        <div>
            {
                type === MenuType.Mobile &&
                <div className='menu toggle' onClick={handleMenuToggle}> 
                    {
                        !menuTrigger ?
                            <div className={`enclosed ${theme}`}> 
                                <Bars3Icon className={`graphic small ${theme}`} />
                            </div>
                            :
                            <div className={`enclosed ${theme}`}> 
                                <XCircleIcon className={`graphic small ${theme}`} />
                            </div>
                    }
                </div>
            }
            {   ((type === MenuType.Full) || (type === MenuType.Mobile && menuTrigger)) &&
                menuContent()
            }
        </div>
    )
}

export default NavMenu
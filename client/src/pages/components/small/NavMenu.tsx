import React, { useState } from 'react'
import '../../../styles/component_styles.css'
import '../../../styles/section_styles.css'
import { useThemeContext } from '../../../common/contexts/ThemeContext'
import { LinkType, MenuType } from '../../../common/types'
import HyperLink from './HyperLink'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useLocation } from 'react-router-dom'

type Props = {
    type: MenuType
}

const NavMenu = ({ type }: Props) => {
    
    const [menuTrigger, setMenuTrigger] = useState(false) ;
    const [clicked, setClicked] = useState(false) ;
    const { getTheme } = useThemeContext() ;

    let theme = getTheme() ;
    let location = useLocation() ;

    const handleClick = () => {
        setClicked(prevState => {
            return !prevState
        })
    }
    const handleMenuToggle = () => {
        setMenuTrigger(!menuTrigger) ;
    }

    const menuContent = () => {
        return (
            <div className={`${type === MenuType.Full ? 'full' : 'mobile'}`}>
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
        )
    }

    return (
        <div className='nav'>
            {
                type === MenuType.Mobile &&
                <div className='menu toggle' onClick={() => { handleClick() ; handleMenuToggle() ;  }}> 
                    <div className='enclosed'> 
                        {
                            !menuTrigger ?
                                <XMarkIcon className={`graphic small ${clicked? 'rotateRight' : 'sideways'}`} onAnimationEnd={handleClick} />
                                :
                                <XMarkIcon className={`graphic small ${clicked? 'rotateLeft' : 'straight'}`} onAnimationEnd={handleClick} />
                                
                        }
                    </div>
                </div>
            }
            {   ((type === MenuType.Full) || (type === MenuType.Mobile && menuTrigger)) &&
                menuContent()
            }
        </div>
    )
}

export default NavMenu
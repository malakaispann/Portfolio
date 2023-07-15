import React, { useEffect, useState } from 'react'
import Graphic from '../small/Graphic' ;
import { Size } from '../../../common/types'
import NavMenu from '../small/NavMenu' ;
import ThemeSwitcher from '../small/ThemeSwitcher' ;
import { XMarkIcon } from '@heroicons/react/24/outline' ;
import ScrollLock from '../small/ScrollLock' ;


const Header = () => {

    const [menuTrigger, setMenuTrigger] = useState(false) ;
    const [clicked, setClicked] = useState(false) ;

    const handleClick = () => {
        setClicked(prevState => {
            return !prevState
        })
    }
    const handleMenuToggle = () => {
        setMenuTrigger(!menuTrigger) ;

        let bg = document.getElementById('PageContent') ;

        if (bg != null){
            bg.style.filter = !menuTrigger? 'blur(10px)' : 'blur(0)' ;
        }
    }

    // add (dis)appearing effect.
    const [toggle, setToggle] = useState(true) ;
    useEffect(() => {

        // save last page pos; 0 on page load.
        let lastPos = window.pageYOffset ;

        // only toggle header when 15 or more pixels have been scrolled.
        let threshold = 40 ;

        const getScrollDir = () => {
            let currPos = window.pageYOffset ;

            // user scrolling down ? Don't show header.
            let showHeader = currPos > lastPos ? false : true ;

            // user scrolling in a direction already detected? Don't update.
            if ( showHeader !== toggle && ( 
                (currPos - lastPos > threshold) || (currPos - lastPos > -threshold)))
            {
                setToggle(showHeader) ;
            }

            lastPos = currPos ;

            //
        } ;

        window.addEventListener("scroll", getScrollDir) ;

        // remove EL as part of cleanup
        return (() => window.removeEventListener("scroll", getScrollDir)) ;
    }, [ toggle ] ) ; // prevent element reloads when toggle changed.

    return (
        <div className={`header outer ${toggle? 'show' : 'hide'}`}>
            <div className='inner'>
                <div className='logocard'>
                    <Graphic size={Size.Large} graphic_src={'/logos/personal_logo.png'} disable_inversion={true} desc='My Logo' extra_styles='no-resize'/>
                </div>
                < div className='general-flex parent-height'>
                    <NavMenu menuTrigger={menuTrigger}/>
                    <div className='general-flex'>
                        <ThemeSwitcher />
                        <div className='menu toggle' onClick={() => { handleClick() ; handleMenuToggle() ;  }}> 
                            <div className='enclosed'> 
                                {
                                    !menuTrigger ?
                                        <XMarkIcon className={`graphic small invert ${clicked? 'rotateRight' : 'sideways'}`} onAnimationEnd={handleClick} />
                                        :
                                        <div className='parent-height'>
                                            <XMarkIcon className={`graphic small invert ${clicked? 'rotateLeft' : 'straight'}`} onAnimationEnd={handleClick} />
                                            <ScrollLock />
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header ;
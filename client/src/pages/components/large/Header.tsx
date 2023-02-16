import React, { useState } from 'react'
import Graphic from '../small/Graphic' ;
import { Size } from '../../../common/types'
import NavMenu from '../small/NavMenu' ;
import ThemeSwitcher from '../small/ThemeSwitcher' ;
import { XMarkIcon } from '@heroicons/react/24/outline'


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
    }

    return (
        <div className='header outer'>
            <div className='inner'>
                <div className='namecard'>
                    <Graphic size={Size.Large} graphic_src={'/logos/personal_logo.png'} desc='My Logo'/>
                    Malakai Spann
                </div>
                <NavMenu menuTrigger={menuTrigger}/>
                <div className='general-flex'>
                    <ThemeSwitcher />
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
                </div>
            </div>

        </div>
    )
}

export default Header
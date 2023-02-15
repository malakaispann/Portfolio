import React from 'react'
import Graphic from '../small/Graphic' ;
import { MenuType, Size } from '../../../common/types'
import NavMenu from '../small/NavMenu' ;
import ThemeSwitcher from '../small/ThemeSwitcher' ;

const Header = () => {

    return (
        <div className='header outer'>
            <div className='inner'>
                <div className='namecard'>
                    <Graphic size={Size.Large} graphic_src={'/logos/personal_logo.png'} desc='My Logo'/>
                    Malakai Spann
                </div>

                <NavMenu type={MenuType.Full} />
                <div className='general-flex'>
                    <ThemeSwitcher />
                    <NavMenu type={MenuType.Mobile} />
                </div>

            </div>
        </div>
    )
}

export default Header
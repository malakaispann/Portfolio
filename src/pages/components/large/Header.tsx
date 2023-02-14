import React from 'react'
import Graphic from '../small/Graphic' ;
import { MenuType, Size } from '../../../common/types'
import NavMenu from '../small/NavMenu' ;
import ThemeSwitcher from '../small/ThemeSwitcher' ;
import { useThemeContext } from '../../../common/contexts/ThemeContext' ;

const Header = () => {

    const { getTheme } = useThemeContext() ;  

    let theme = getTheme() ;

    return (
        <div className={`header outer ${theme}`}>
            <div className='header inner'>
                <div className={`namecard ${theme}`}>
                    <Graphic size={Size.Large} graphic_src={'/logos/personal_logo.png'} desc='My Logo' extra_styles={`${theme}`}/>
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
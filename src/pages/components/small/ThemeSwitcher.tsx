import React from 'react'
import { useThemeContext } from '../../../common/contexts/ThemeContext' ;
import '../../../styles/component_styles.css'
import { SunIcon } from '@heroicons/react/24/outline'
import { MoonIcon } from '@heroicons/react/24/outline'

/**
 *   @details : Creates a circular graphic inspired by typical light switches. Clicking the graphic causes a site-wide theme update (if necessary).
 */

const ThemeSwitcher = () => {
    const { getTheme, toggleTheme } = useThemeContext() ;
    
    let theme = getTheme() ;
    
    return (
        <div className={`theme_switch outer ${theme}`} onClick={toggleTheme}>
            <div className={'theme_switch inner'}>
                <SunIcon className={`graphic small ${theme}`} />
                <MoonIcon className={`graphic small ${theme}`} />
            </div>
            <div className={`theme_switch selector ${theme}`} />
        </div>
    )
}

export default ThemeSwitcher
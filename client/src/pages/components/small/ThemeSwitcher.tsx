import React, { useState } from 'react'
import { useThemeContext } from '../../../common/contexts/ThemeContext' ;
import { SunIcon } from '@heroicons/react/24/outline'
import { MoonIcon } from '@heroicons/react/24/outline'

/**
 *   @details : Creates a circular graphic inspired by typical light switches. Clicking the graphic causes a site-wide theme update (if necessary).
 */

const ThemeSwitcher = () => {
    const { getTheme, toggleTheme } = useThemeContext() ;
    const [pushed, setPushed] = useState(false) ;
    
    let handleThemeChange = () => {
        setPushed(prevState => {
            return true
        })
    }
    
    return (
        <div className='theme-switch outer' onClick={() => { handleThemeChange() ; toggleTheme() ; }}>
            <div className='inner'>
                <SunIcon className={`graphic small ${getTheme() === 'light' ? 'invert' : ''}`}  />
                <MoonIcon className={`graphic small ${getTheme() === 'light' ? 'invert' : ''}`} />
            </div>
            <div className={`selector ${pushed ? 'slide' : ''}`} />
        </div>
    )
}

export default ThemeSwitcher
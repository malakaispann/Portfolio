import { useState, memo } from 'react'
import { useThemeContext } from '../../../common/contexts/ThemeContext' ;


/**
 *   @details : Creates a circular graphic inspired by typical light switches. Clicking the graphic causes a site-wide theme update (if necessary).
 */

const ThemeSwitcher = () => {
    const { getTheme, toggleTheme } = useThemeContext() ;
    const [pushed, setPushed] = useState(false) ;
    
    let handleThemeChange = () => {
        setPushed(prevState => {
            return true
        }) ;
    }
    
    return (
        <div className='theme-switch outer' onClick={() => { handleThemeChange() ; toggleTheme() ; }} id='Theme-Switch'>
            <div className='inner'>
                <div className={` sun graphic small ${getTheme() === 'light' ? 'invert' : ''}`}/>
                <div className={` moon graphic small ${getTheme() === 'light' ? 'invert' : ''}`} />
            </div>
            <div className={`selector ${pushed ? 'slide' : ''}`} />
        </div>
    )
}

export default memo(ThemeSwitcher) ;
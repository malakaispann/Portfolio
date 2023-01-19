import React from 'react' ;
import { useThemeContext } from '../contexts/ThemeContext' ;
import '../../styles/component_styles.css'

const TestColorSwitcher = () => {
    const { getTheme, toggleTheme } = useThemeContext() ;
    return (
        <div className={"testing " + getTheme()} onClick={ toggleTheme}>
            Test_ColorSwitcher
        </div>
    )
}

export default TestColorSwitcher
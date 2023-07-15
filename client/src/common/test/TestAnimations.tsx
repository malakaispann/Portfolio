import React from 'react'
import TextContainer from '../../pages/components/small/TextContainer'
import { useThemeContext } from '../contexts/ThemeContext'
import '../../styles/component_styles.css'


const TestAnimations = () => {
    const { getTheme, toggleTheme } = useThemeContext() ;
    
    let theme = getTheme() ;
    // Textbox use should not affect animation functionality.
    return (
        <TextContainer id='Animation-Tests'>
            {/* Right - to - Left Animation  */}
            <div className={`theme-switch outer ${theme}`} onClick={toggleTheme}>
                <div className={`theme-switch selector ${theme}`} />
            </div>
        </TextContainer>
    )
}

export default TestAnimations
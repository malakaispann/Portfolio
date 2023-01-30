import React from 'react'
import TextContainer from '../../pages/components/small/TextContainer'
import Graphic from '../../pages/components/small/Graphic'
import { useThemeContext } from '../contexts/ThemeContext'
import '../../styles/component_styles.css'

const TestAnimations = () => {
    const { getTheme, toggleTheme } = useThemeContext() ;
    
    let theme = getTheme() ;
    // Textbox use should not affect animation functionality.
    return (
        <TextContainer title_included={false} >

            {/* Wave Animation */}
            <div className={`text paragraph ${theme} center`}>
            Hey! <Graphic size={"small"} graphic_src={"/icons/hand_wave.png"} desc={"Waving hand."} extra_styles={`hand-wave ${theme}`} />
            </div>

            {/* Right - to - Left Animation  */}
            <div className={`theme_switch outer ${theme}`} onClick={toggleTheme}>
                <div className={`theme_switch selector ${theme}`} />
            </div>
        </TextContainer>
    )
}

export default TestAnimations
import React from 'react'
import TextContainer from '../../pages/components/small/TextContainer'
import { useThemeContext } from '../contexts/ThemeContext'
import '../../styles/component_styles.css'

const TestTextContainer = () => {
    const { getTheme } = useThemeContext() ;

    let theme = getTheme() ;

    return (
        <TextContainer title_included={true} title='Test'>
            <div className={`text paragraph ${theme}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className={`text list ${theme}` }>
                <div className='text list date'> Spring 2023 </div>
                <div className='text list desc'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>    
            </div>
            <div className={`text list ${theme}`}>
                <div className='text list date'> Fall 2023 </div>
                <div className='text list desc'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>    
            </div>
            <div className={`text list ${theme}`}>
                <div className='text list date'> short </div>
                <div className='text list desc'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>    
            </div>
        </TextContainer>
    )
}

export default TestTextContainer
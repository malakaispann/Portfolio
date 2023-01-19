import React from 'react' ;
import '../styles/global_styles.css'
import '../styles/component_styles.css'
import { useThemeContext } from '../common/contexts/ThemeContext' ;
import TestColorSwitcher from '../common/test/TestColorSwitcher' ;
import TestTextContainer from '../common/test/TestTextContainer' ;

function MainContent() {
    const { getTheme } = useThemeContext() ;
    
    let theme = getTheme() ;

    return (
        <div className={'background page-container ' + theme}>
            <div className='content-container'>
                <TestTextContainer/>
                <TestColorSwitcher />
            </div>
        </div>
    )
}

export default MainContent
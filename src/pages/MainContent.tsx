import React from 'react' ;
import '../styles/global_styles.css'
import '../styles/component_styles.css'
import { useThemeContext } from '../common/contexts/ThemeContext' ;
import TestColorSwitcher from '../common/test/TestColorSwitcher' ;


function MainContent() {
    const { getTheme } = useThemeContext() ;
    
    let theme = getTheme() ;

    return (
        <div className={'background page-container ' + theme}>
            <div className='content-container'>
                <TestColorSwitcher />
            </div>
        </div>
    )
}

export default MainContent
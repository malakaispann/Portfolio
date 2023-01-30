import React from 'react' ;
import '../styles/global_styles.css'
import '../styles/component_styles.css'
import { useThemeContext } from '../common/contexts/ThemeContext' ;
import TestThemeSwitcher from '../common/test/TestThemeSwitcher' ;
import TextContainer from './components/small/TextContainer' ;
import TestTextContainer from '../common/test/TestTextContainer' ;
import TestAnimations from '../common/test/TestAnimations' ;
import ThemeSwitcher from './components/small/ThemeSwitcher' ;
import Footer from './components/large/Footer';

function MainContent() {
    const { getTheme } = useThemeContext() ;
    
    let theme = getTheme() ;

    return (
        <div className={`background page-container ${theme}`}>
            <div className='content-container'>
                <ThemeSwitcher />
                <TestAnimations />
                <TextContainer title_included={true} title={""}>

                </TextContainer>
                <TestTextContainer />

            </div>
            <Footer />
        </div>
    )
}

export default MainContent
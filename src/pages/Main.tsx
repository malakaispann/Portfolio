import React from 'react' ;
import '../styles/global_styles.css' ;
import '../styles/component_styles.css' ;
import '../styles/section_styles.css' ;
import { useThemeContext } from '../common/contexts/ThemeContext' ;
import TextContainer from './components/small/TextContainer' ;
import TestTextContainer from '../common/test/TestTextContainer' ;
import TestAnimations from '../common/test/TestAnimations' ;
import ThemeSwitcher from './components/small/ThemeSwitcher' ;
import Footer from './components/large/Footer' ;
import Header from './components/large/Header' ;

function Main() {
    const { getTheme } = useThemeContext() ;
    
    let theme = getTheme() ;

    return (
        <div className={`page-container background ${theme}`}>
            <Header />
            <div className='content-container'>
                <img className='portrait' src={require('./../assets/relaxed_pfp.jpg')} alt={"Relaxed portrait of me."} />
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

export default Main
import React from 'react' ;
import '../styles/global_styles.css' ;
import '../styles/component_styles.css' ;
import '../styles/section_styles.css' ;
import { useThemeContext } from '../common/contexts/ThemeContext' ;
import Graphic from './components/small/Graphic' ;
import { Size } from '../common/types' ;
import Header from './components/large/Header' ;
import Footer from './components/large/Footer' ;
import ContactForm from './components/large/ContactForm' ;
import TextContainer from './components/small/TextContainer' ;



const Contact = () => {
    const { getTheme } = useThemeContext() ;

    let theme = getTheme() ;

    return (
        <div className={`page-container background ${theme}`}>
            <Header />
            <div className='content-container'>
                <TextContainer title_included={true} title='Find Me:' id=''>
                    <div className='socials'>
                        <div className='text subtitle'> Find Me:</div>
                        <a className={`enclosed ${theme}`} href='https://github.com/KayyDVC'>
                            <Graphic size={Size.Small} graphic_src='/logos/github_logo.svg' desc='Link to my Github' extra_styles='no-color'/>
                        </a>
                        <a className={`enclosed ${theme}`} href='https://www.linkedin.com/in/malakaiSpann'>
                            <Graphic size={Size.Small} graphic_src='/logos/linkedIn_logo.svg' desc='Link to my LinkedIn Page' extra_styles='no-color' />
                        </a>
                    </div>
                </TextContainer>
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}

export default Contact
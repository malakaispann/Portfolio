import React from 'react' ;
import '../styles/global_styles.css' ;
import '../styles/component_styles.css' ;
import '../styles/section_styles.css' ;
import { useThemeContext } from '../common/contexts/ThemeContext' ;
import Graphic from './components/small/Graphic' ;



const Contact = () => {
    const { getTheme } = useThemeContext() ;

    let theme = getTheme() ;

    return (
        <div className={`page-container background ${theme}`}>
            <div className='content-container'>
                <div className='socials-container'>
                    <div className='socials'>
                        <div className='text subtitle'> Find Me:</div>
                        <a className={`enclosed ${theme}`} href="https://github.com/KayyDVC">
                            <Graphic size='small' graphic_src='/logos/github_logo.svg' desc='Link to my Github' extra_styles='no-color'/>
                        </a>
                        <a className={`enclosed ${theme}`} href="https://www.linkedin.com/in/malakaistanisclaus">
                            <Graphic size='small' graphic_src='/logos/linkedIn_logo.svg' desc='Link to my LinkedIn Page' extra_styles='no-color' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
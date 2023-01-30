import React from 'react'
import { useThemeContext } from '../../../common/contexts/ThemeContext'
import Graphic from '../small/Graphic'

const Footer = () => {
    const { getTheme } = useThemeContext();

    let theme = getTheme();

    return (
        <div className='footer outer'>
            <div className='footer inner' >
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


                <div className='copyright'>
                    Copyright &copy; {(new Date()).getFullYear()} Malakai Stanisclaus. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer
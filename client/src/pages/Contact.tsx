import React from 'react' ;
import Graphic from './components/small/Graphic' ;
import { Size } from '../common/types' ;
import ContactForm from './components/large/ContactForm' ;
import TextContainer from './components/small/TextContainer' ;



const Contact = () => {

    return (
        <div className='content-container'>
            <TextContainer title_included={true} title='Find Me:' id=''>
                <div className='socials'>
                    <div className='subtitle'> Find Me:</div>
                    <a className='enclosed' href='https://github.com/KayyDVC'>
                        <Graphic size={Size.Small} graphic_src='/logos/github_logo.svg' desc='Link to my Github' extra_styles='no-color'/>
                    </a>
                    <a className='enclosed' href='https://www.linkedin.com/in/malakaiSpann'>
                        <Graphic size={Size.Small} graphic_src='/logos/linkedIn_logo.svg' desc='Link to my LinkedIn Page' extra_styles='no-color' />
                    </a>
                </div>
            </TextContainer>
            <ContactForm />
        </div>
    )
}

export default Contact
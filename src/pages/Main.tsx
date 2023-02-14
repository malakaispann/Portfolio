import React from 'react' ;
import '../styles/global_styles.css' ;
import '../styles/component_styles.css' ;
import '../styles/section_styles.css' ;
import { useThemeContext } from '../common/contexts/ThemeContext' ;
import TextContainer from './components/small/TextContainer' ;
import Footer from './components/large/Footer' ;
import Header from './components/large/Header' ;
import TestTextContainer from '../common/test/TestTextContainer' ;

function Main() {
    const { getTheme } = useThemeContext() ;
    
    let theme = getTheme() ;

    return (
        <div className={`page-container background ${theme}`}>


            <Header />


            <div className='content-container'>

                {/* Intro Section */}

                <TextContainer title_included={false} id='Introduction'>
                    <div className='text paragraph center'>
                        <img className='portrait' src={require('./../assets/other/relaxed_pfp.jpg')} alt={'Relaxed portrait of me.'} />
                    </div>
                    <div className='text paragraph'>
                        Hey! I'm a 4th year Software Engineering major specializing
                        in Front End development.
                    </div>
                    <div className='text subtitle'>
                        Current Interests:
                    </div>
                    <div className='text paragraph indent italic'>
                        database organization, optimization, data visualization, IaaS, full stack development 
                    </div>

                </TextContainer>


                {/* Bio  Section*/}


                <TextContainer title_included={true} title='Bio' id='Biography'>

                    <div className='text list'>
                        <div className='text list date'> Dec 2023 </div>
                        
                    </div>

                </TextContainer>


                <TestTextContainer />
            </div>
            <Footer />
        </div>
    )
}

export default Main
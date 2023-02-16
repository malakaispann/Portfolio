import React from 'react' ;
import TextContainer from './components/small/TextContainer' ;
import TestTextContainer from '../common/test/TestTextContainer' ;

function Main() {
    return (
        <div className='content-container'>

            {/* Intro Section */}

            <TextContainer title_included={false} id='Introduction'>
                <div className='paragraph center'>
                    <img className='portrait' src={require('./../assets/other/relaxed_pfp.jpg')} alt={'Relaxed portrait of me.'} />
                </div>
                <div className='paragraph'>
                        Hey! I'm a 4th year Software Engineering major at Florida Tech specializing
                        in Front End development.
                </div>
                <div className='subtitle'>
                        Current Interests:
                </div>
                <div className='paragraph indent italic'>
                        database organization, optimization, data visualization, IaaS, full stack development 
                </div>

            </TextContainer>


            {/* Bio  Section*/}


            <TextContainer title_included={true} title='Bio' id='Biography'>

                <div className='list'>
                    <div className='date'> 2022 - 2023 </div>
                    <div className='desc'> Software Engineer Intern @Lockheed Martin Space</div>
                </div>

                <div className='list'>
                    <div className='date'> Dec 2023 </div>
                    <div className='desc'> Graduation : B.S. Software Engineering </div>
                </div>

            </TextContainer>


            <TestTextContainer />
        </div>
    )
}

export default Main
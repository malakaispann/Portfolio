import { memo } from 'react' ;
import TextContainer from './components/small/TextContainer' ;
import TestTextContainer from '../common/test/TestTextContainer' ;
import HyperLink from './components/small/HyperLink' ;
import { LinkType } from '../common/types' ;


const Main = () =>  {


    return (
        <div className='content-container' id='PageContent'>
            
            <div className='page-spacer' >

                <TextContainer id='Opening'>
                    <div className='general-flex' id='Portrait'>
                        <div className='portrait' />
                    </div>
                    <div>
                        <p id='Greeting'> Hello <span className='hand-wave'>👋🏽</span>, my name is</p>
                        <p id='Name'>Malakai Spann </p>
                        <p className='subtitle' id='Occupation1'> Developer,</p>
                        <p className='subtitle' id='Occupation2'> Expert Google Search User,</p>
                        <p className='subtitle' id='Occupation3'> Tech Enthusiast</p>

                        <p className='paragraph' id='Introduction'>
                            I'm a 4th year Computer Science major at <HyperLink type={LinkType.External} to='https://www.fit.edu/'> Florida Tech </HyperLink> focused
                            on software development and data processing. In short, I make cool stuff.
                        </p>

                        <div id='Interests'>
                            <div className='subtitle'>
                                <p>Current Interests:</p>
                            </div>

                            <div className='paragraph indent italic'>
                                <p> application development (mobile & web), data processing, data visualization, information assurance</p>
                            </div>
                        </div>
                        <div className='list' id='Graduation-Date'>
                            <p className='date'> Dec 2023 </p>
                            <p className='desc'> Graduation : B.S. Computer Science </p>
                        </div>
                    </div>
                </TextContainer>

            </div>

            <TestTextContainer/>

            <TextContainer id='Experience' >
                <p className='title'> Professional Experience</p>
                <div className='list'>
                    <p className='date'> 2019 - 2023 </p>

                    <div className='desc'>  
                        <p>Studied at Florida Institute of Technology. Bachelor of Science, Computer Science.
                        Coursework included a wide range of theoretical/practical courses such as:</p>
                        <ul className='sublist'> 
                            <li> Analysis of Algorithms </li>
                            <li> Computer Networks </li>
                            <li> Introduction to Cyber Security </li>
                            <li> Software Design Methods </li>
                        </ul>
                    </div>
                    
                </div>
                <div className='list'>
                    <p className='date'> 2022 - 2023</p>
                    <div className='desc'> <p>Software Engineer Intern @ Lockheed Martin. Duties included:</p>
                        <ul className='sublist'> 
                            <li> designing and implementing software for safety-critical systems </li>
                            <li> testing software using simulation environments </li>
                            <li> generating software artifacts for requirement verification</li>
                            <li> collaborating with internal groups to develop complete systems </li>
                            <li> communicating tasks, challenges, and progress to stakeholders on a regular basis</li>
                        </ul>
                    </div>
                </div>

                <div className='paragraph italic'>
                    <p>* Check out my <HyperLink type={LinkType.Internal} to='/projects'> 
                    projects page </HyperLink> for what I've been doing in the meantime. </p>
                </div>

            </TextContainer>

        </div>
    )
}

export default memo(Main)
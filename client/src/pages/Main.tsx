import React from 'react' ;
import TextContainer from './components/small/TextContainer' ;
import TestTextContainer from '../common/test/TestTextContainer' ;
import HyperLink from './components/small/HyperLink' ;
import { LinkType } from '../common/types' ;
import SocialIcon from './components/small/SocialIcon' ;

function Main() {
    return (
        <div className='content-container' id='PageContent'>
            
            <div className='page-spacer' id='About'>
                {/* Intro Section */}

                <div className='general-flex'>
                    <img className='portrait' src={require('./../assets/other/relaxed_pfp.jpg')} alt='Relaxed portrait of me.' />
                </div>

                <TextContainer title='Malakai Spann' id='Introduction'>
                    <p className='subtitle'> Developer,</p>
                    <p className='subtitle'> Expert Google Search User,</p>
                    <p className='subtitle'> Tech Enthusiast</p>

                    <p className='paragraph'>
                        Hey! I'm a 4th year Computer Science major at Florida Tech focused
                        on software development and data processing. My future plans include continuing
                        my studies and expanding further into artificial intelligence, information assurance, and full-stack development.
                    </p>

                    <div className='subtitle'>
                        <p>Current Interests:</p>
                    </div>

                    <div className='paragraph indent italic'>
                        <p> application development (mobile & web), data processing, data visualization, information assurance</p>
                    </div>

                    <div className='list'>
                        <p className='date'> Dec 2023 </p>
                        <p className='desc'> Graduation : B.S. Computer Science </p>
                    </div>

                </TextContainer>

                <div className='socials' id='Socials'>
                    <SocialIcon link='https://github.com/KayDVC' link_text='@KayDVC' graphic_src='/logos/github-mark.png' graphic_desc='Link to my Github account.' keep_invert={true}/>
                    <SocialIcon link='mailto:MalakaiSpann@gmail.com' link_text='MalakaiSpann@gmail.com' graphic_src='/logos/gmail.png' graphic_desc='Link to my email.'/>
                    <SocialIcon link='https://linkedin.com/in/malakaispann' link_text='Malakai Spann' graphic_src='/logos/In-Blue.png' graphic_desc='Link to my LinkedIn account.'/>
                </div>

            </div>

            <TestTextContainer/>

            <TextContainer id='Experience' title='Professional Experience' >
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

export default Main
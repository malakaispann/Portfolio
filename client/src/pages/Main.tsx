import { memo } from 'react' ;
import TextContainer from './components/small/TextContainer' ;
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
                        <p id='Greeting'> Hey <span className='hand-wave'>👋🏽</span>, my name is</p>
                        <p id='Name'>Malakai Spann </p>
                        <p className='subtitle' id='Occupation1'> Developer,</p>
                        <p className='subtitle' id='Occupation2'> Expert Google Search User,</p>
                        <p className='subtitle' id='Occupation3'> Tech Enthusiast</p>

                        <p className='paragraph' id='Introduction'>
                            I'm a 4th year Computer Science major at <HyperLink type={LinkType.External} to='https://www.fit.edu/'> Florida Tech </HyperLink> focused
                            on software development and data processing. In short, I like to use and make cool stuff.
                        </p>

                        <div id='Interests'>
                            <div className='subtitle'>
                                <p>Current Interests:</p>
                            </div>

                            <div className='paragraph '>
                                <p className='indent italic'> application development (mobile & web), artificial intelligence, data visualization, information assurance</p>
                            </div>
                        </div>
                        <div className='list' id='Graduation-Date'>
                            <p className='date'> Dec 2023 </p>
                            <p className='desc'> Graduation : B.S. Computer Science </p>
                        </div>
                    </div>
                </TextContainer>

            </div>

            <TextContainer id="About">
                <div className='title'> About Me </div>
                <div className='paragraph'>
                    <p>
                        My interest in computers started around 2007 when I was gifted my first game system.
                        I enjoyed researching mechanics, testing new builds, competing with friends, and taking on 
                        challenging objectives. The possibilities were only as limited as my dedication.
                    </p>
                </div>
                <div className='paragraph'>
                    <p>
                        Since then, I've continued chasing my passion by learning software development. As a college student,
                        I've completed rigorous coursework while taking on projects to apply the knowledge gained in a practical 
                        environment. In addition, I've gained professional experience developing scalable, secure software and 
                        communicating with clients, teams, and users working for a
                        <HyperLink type={LinkType.External} to='https://www.lockheedmartin.com/en-us/who-we-are.html' > world-renowned Aerospace and Defense corporation.</HyperLink>
                    </p>
                </div>


            </TextContainer>

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
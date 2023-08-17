import { memo } from 'react'; 
import TextContainer from "../small/TextContainer";
import Skills from "./Skills";
import HyperLink from "../small/HyperLink";
import { LinkType } from "../../../common/types";


const About = () => {

    return (
        <div className='page-spacer' id='about'>
            <TextContainer>
                <div>
                    <div className='general-flex' id='Portrait'>
                        <div className='portrait' />
                    </div>
                    <div className='title'> About Me </div>
                    <p className='paragraph'>
                        I became interested in the world of software in 2012 after finding a modding forum for Fallout New Vegas.
                        Since then, I've continued learning all software has to teach with the same curiosity that initially roped me in.
                    </p>
                    <div className='paragraph'>
                        <p>
                            Currently, I'm designing, developing, and testing safety-critical software at a <HyperLink type={LinkType.External} 
                                to='https://www.lockheedmartin.com/en-us/who-we-are.html'>world-renowned Aerospace and Defense corporation.</HyperLink>
                        </p>
                    </div>
                    <div className='paragraph'>
                        <p>
                            When I'm not working, I can usually be found hacking away at the mountain of <HyperLink type={LinkType.Internal} to='/#projects' >
                            personal projects</HyperLink> I've started, playing video games, 
                            re-watching the same 10 movies/tv shows I always watch, or refilling my cup of coffee.
                        </p>
                    </div>
                    <div id='Interests'>
                        <div className='subtitle'>
                            <p>Current Interests:</p>
                        </div>
                        <div className='paragraph'>
                            <p className='indent italic'> general development, full-stack development, artificial intelligence, systems engineering</p>
                        </div>
                        <Skills />
                    </div>
                </div>
            </TextContainer>
        </div>

    )
}

export default memo(About);
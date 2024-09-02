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
                            In my last role, I designed, developed, and tested safety-critical software for the <HyperLink type={LinkType.External} 
                                to='https://news.lockheedmartin.com/2022-03-01-Lockheed-Martin-Selects-Mission-Payload-Providers-for-Missile-Warning-Satellite-System'>
                                latest and most advanced line of space-based missile warning systems</HyperLink> at 
                            a world-renowned Aerospace and Defense corporation.
                            I'm currently doing some super secret spy stuff at one of the 3-letter agencies <span className='italic'>(psst, 
                            the actual description of what I do is pending review; check back for updates)</span>.
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
                            <p className='indent italic'> software-hardware development, embedded development, developer operations (devops), artificial intelligence, systems engineering</p>
                        </div>
                        <Skills />
                    </div>
                </div>
            </TextContainer>
        </div>

    )
}

export default memo(About);
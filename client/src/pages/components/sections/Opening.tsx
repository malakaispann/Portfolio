import { memo } from "react";
import TextContainer from "../small/TextContainer";
import SocialFeed from "../small/SocialFeed";
import HyperLink from "../small/HyperLink";
import { LinkType } from "../../../common/types";


const Opening = () => {

    return (

        <div className='page-spacer' id='opening' >
            <TextContainer>
                <div>
                    <p id='Greeting'> Hey <span className='hand-wave'>👋🏽</span>, my name is</p>
                    <p id='Name'>Malakai Spann </p>
                    <p className='subtitle' id='Occupation1'> Developer,</p>
                    <p className='subtitle' id='Occupation2'> Expert Google Search User,</p>
                    <p className='subtitle' id='Occupation3'> Tech Enthusiast</p>

                    <p className='paragraph' id='Introduction'>
                        I'm a 4th-year Computer Science major at <HyperLink type={LinkType.External} to='https://www.fit.edu/'> Florida Tech</HyperLink> focused
                        on software development and data science. In short, I like to make and use cool stuff.
                    </p>

                    <div className='list' id='Graduation-Date'>
                        <p className='date'> Dec 2023 </p>
                        <p className='desc'> Graduation : B.S. Computer Science </p>
                    </div>

                    <SocialFeed />
                </div>
            </TextContainer>
        </div>

    )
}

export default memo(Opening);
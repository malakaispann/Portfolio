import React from 'react'
import TextContainer from '../../pages/components/small/TextContainer'
import '../../styles/component_styles.css'

const TestTextContainer = () => {
    return (
        <TextContainer title='Test' id='Text-Test'>
            <div className='paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className='text list'>
                <div className='date'> Spring 2023 </div>
                <div className='desc'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>    
            </div>
            <div className='list'>
                <div className='date'> Fall 2023 </div>
                <div className='desc'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>    
            </div>
            <div className='list'>
                <div className='date'> short </div>
                <div className='desc'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>    
            </div>
        </TextContainer>
    )
}

export default TestTextContainer
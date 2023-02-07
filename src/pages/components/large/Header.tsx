import React from 'react'
import Graphic from '../small/Graphic'

const Header = () => {
    return (
        <div className='header outer'>
            <div className='header inner'>
                <div>
                    <Graphic size='large' graphic_src={'/logos/personal_logo.png'} desc='My Logo'/>
                </div>
            </div>
        </div>
    )
}

export default Header
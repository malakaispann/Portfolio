import React from 'react'


const Footer = () => {

    return (
        <div className='footer outer'>
            <div className='footer inner' >
                <div className='copyright'>
                    Copyright &copy; {(new Date()).getFullYear()} Malakai Stanisclaus. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'


const Footer = () => {

    return (
        <div className='footer outer'>
            <div className='inner' >
                <div className='copyright'>
                    Copyright &copy; {(new Date()).getFullYear()} Malakai Spann. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer
import React, { useEffect } from 'react'

// A simple utility that when rendered, prevents scrolling. 
// Returns scrolling ability upon removal.

const ScrollLock = () => {

    useEffect(() => {
        document.body.style.overflow = 'hidden' ;
        return () => { document.body.style.overflow = 'scroll' } ;
    }) ;

    return (
        <div className='empty'></div>
    )
}

export default ScrollLock
import React from 'react'
import { useThemeContext } from '../common/contexts/ThemeContext'
import Footer from './components/large/Footer' ;
import Header from './components/large/Header' ;

const Projects = () => {
    const { getTheme } = useThemeContext() ;

    let theme = getTheme() ;

    return (
        <div className={`page-container background ${theme}`}>
            <Header />
            <div className='content-container'>
                Under Construction!
            </div>
            <Footer />
        </div>
    )
}

export default Projects
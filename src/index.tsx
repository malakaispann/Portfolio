// React-specific
import React from 'react' ;
import ReactDOM from 'react-dom/client' ;

// Global CSS
import './styles/global_styles.css'

// Pages
import LandingPage from './pages/landing_page' ;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
) ;
root.render(
    <React.StrictMode>
        <div className='site-container'>
            <LandingPage />
        </div>
    </React.StrictMode>
) ;


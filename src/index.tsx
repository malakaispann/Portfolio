// React-specific
import React from 'react' ;
import ReactDOM from 'react-dom/client' ;

// Global CSS
import './styles/global_styles.css'

// Contexts
import { ThemeContextProvider } from './common/contexts/ThemeContext';

// Pages
import MainContent from './pages/MainContent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
) ;
root.render(
    <React.StrictMode>
        <ThemeContextProvider> 
            <div className='site-container'>
            <MainContent />
            </div>
        </ThemeContextProvider>
    </React.StrictMode>
) ;


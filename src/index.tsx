// React-specific
import React from 'react' ;
import ReactDOM from 'react-dom/client' ;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Global CSS
import './styles/global_styles.css'

// Contexts
import { ThemeContextProvider } from './common/contexts/ThemeContext' ;

// Pages
import Main from './pages/Main' ;
import SiteLayout from './common/SiteLayout' ;
import Contact from './pages/Contact' ;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
) ;
root.render(
    <React.StrictMode>
        <Router>
            <ThemeContextProvider> 
                <div className='site-container'>
                    <Routes>
                        <Route path='/' element={<SiteLayout/>}>
                            <Route index element={<Main />} />
                            <Route path='contact' element={<Contact/>} />
                        </Route>
                    </Routes>
                </div>
            </ThemeContextProvider>
        </Router>
    </React.StrictMode>
) ;


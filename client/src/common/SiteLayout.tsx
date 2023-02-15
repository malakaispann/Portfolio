import { Outlet } from "react-router-dom"
import { useThemeContext } from "./contexts/ThemeContext"
import '../styles/global_styles.css'
import '../styles/section_styles.css'
import '../styles/component_styles.css'
import '../styles/animations.css'
import Header from "../pages/components/large/Header"
import Footer from "../pages/components/large/Footer"

const SiteLayout = () => {
    const { getTheme } = useThemeContext() ;

    let theme = getTheme() ;

    return (
        <div className={`page-container background ${theme}`}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default SiteLayout
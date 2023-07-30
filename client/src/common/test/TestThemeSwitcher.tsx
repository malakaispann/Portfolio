import { useThemeContext } from '../contexts/ThemeContext' ;
import '../../styles/component_styles.css'

const TestThemeSwitcher = () => {
    const { getTheme, toggleTheme } = useThemeContext() ;
    return (
        <div className={'testing ' + getTheme()} onClick={ toggleTheme}>
            TestThemeSwitch
        </div>
    )
}

export default TestThemeSwitcher
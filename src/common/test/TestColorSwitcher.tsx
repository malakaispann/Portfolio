import React, { useContext } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../../styles/component_styles.css'

const TestColorSwitcher = () => {
    const { getTheme, toggleTheme } = useTheme();
    return (
        <div className={"testing " + getTheme()}>
            Test_ColorSwitcher
            <button onClick={toggleTheme}></button>
        </div>
  )
}

export default TestColorSwitcher
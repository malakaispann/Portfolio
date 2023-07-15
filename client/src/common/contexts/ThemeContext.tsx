import React, { createContext, useContext, useState } from 'react' ;


/**
 *   @details : Creates a sharable state across the entire app to control the current theme.
 */
export const ThemeContext = createContext<any>(null) ;

type Props = {
    children?: React.ReactNode, 
}

enum Mode{
    Light,
    Dark,
}

export const ThemeContextProvider = ({ children }: Props) => {

    const [theme, setTheme] = useState(Mode.Light) ;

    const toggleTheme = () => {
        if (theme === Mode.Light) {
            setTheme(Mode.Dark) ;
        } else {
            setTheme(Mode.Light) ;
        }
    }

    const getTheme = () => {
        return theme===Mode.Light ? 'light' : 'dark'
    }
    
    return (
        <ThemeContext.Provider value={{ theme,
            setTheme,
            toggleTheme,
            getTheme, }}> {children} </ThemeContext.Provider>
    ) 
}

export const useThemeContext = () => useContext(ThemeContext) ;
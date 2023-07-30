import React, { createContext, useContext, useState } from 'react' ;


/**
 *   @details : Creates a sharable state across the entire app to control the current theme.
 */
export const ThemeContext = createContext<any>(null) ;

type Props = {
    children?: React.ReactNode, 
}

enum Mode{
    Light ,
    Dark ,
}

export const ThemeContextProvider = ({ children }: Props) => {

    // get user theme preference.
    let dark_pref = window.matchMedia('(prefers-color-scheme: dark)') ;
    const [theme, setTheme] = useState(dark_pref.matches ? Mode.Dark : Mode.Light) ;


    const getTheme = () => {
        return theme===Mode.Light ? 'light' : 'dark'
    }

    const toggleTheme = () => {
        
        setTheme(() => {
            let newTheme = theme === Mode.Light ? Mode.Dark : Mode.Light ;

            setBackground(newTheme) ;
            return newTheme ;
        })
    }
    
    const setBackground = (newTheme:Mode) => {

        if (newTheme === Mode.Light){
            document.body.style["background"] = "#FFFFFF" ;
        } else {
            document.body.style["background"] = "#222222" ;
        }
    }

    setBackground(theme) ;

    return (
        <ThemeContext.Provider value={{ theme,
            setTheme,
            toggleTheme,
            getTheme }}> {children} </ThemeContext.Provider>
    ) 
}

export const useThemeContext = () => useContext(ThemeContext) ;
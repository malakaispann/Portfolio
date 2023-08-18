import React, { createContext, useContext, useState } from 'react';


/**
 *   @details : Creates a sharable state across the entire app to control the current theme.
 */
export const ThemeContext = createContext<any>(null);

type Props = {
    children?: React.ReactNode, 
}

enum Mode{
    Light = 'light',
    Dark = 'dark' ,
}

export const ThemeContextProvider = ({ children }: Props) => {

    // get user theme preference.
    let theme_pref = (localStorage.getItem("lastTheme") as Mode);
    theme_pref = theme_pref === undefined ? window.matchMedia('(prefers-color-scheme: dark)').matches? Mode.Dark : Mode.Light : theme_pref;
    const [theme, setTheme] = useState(theme_pref);


    const getTheme = () => {
        return theme;
    }

    const toggleTheme = () => {
        
        setTheme(() => {
            let newTheme = theme === Mode.Light ? Mode.Dark : Mode.Light;
            localStorage.setItem("lastTheme", newTheme)

            setBackground(newTheme);
            return newTheme;
        })
    }
    
    const setBackground = (newTheme:Mode) => {

        if (newTheme === Mode.Light){
            document.body.style['background'] = '#FFFFFF';
        } else {
            document.body.style['background'] = '#222222';
        }
    }

    setBackground(theme);

    return (
        <ThemeContext.Provider value={{ theme,
            setTheme,
            toggleTheme,
            getTheme }}> {children} </ThemeContext.Provider>
    ) 
}

export const useThemeContext = () => useContext(ThemeContext);
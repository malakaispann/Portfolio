import React from 'react'
import { useThemeContext } from '../../../common/contexts/ThemeContext'
import './../../../styles/component_styles.css'
import './../../../styles/section_styles.css'

/**
 *   @details : Creates a flexible container for text (and other content). 
 * 
 *   @Required
 *   @param[in] title_included: true if there is a title for the text.
 * 
 *   @Optional
 *   @param[in] title: the subheading to display at the top of the container.
 *   @param[in] children: other html/react elements to be displayed within container.
 */

type Props = {
    title_included: boolean,
    title?: string,
    children?: React.ReactNode;
}

const TextContainer = ({ title_included, title, children }: Props) => {
    const { getTheme } = useThemeContext() ;
    let theme = getTheme() ;
    return (
        <div className='textbox-container'>
            { title_included === true ?
                <div className={`text title ${theme}` }>
                    {title}
                </div>
                : null }
            {children}
        </div>
    )
}

export default TextContainer
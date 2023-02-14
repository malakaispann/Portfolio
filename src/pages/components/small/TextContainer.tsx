import React from 'react'
import { useThemeContext } from '../../../common/contexts/ThemeContext'
import './../../../styles/component_styles.css'
import './../../../styles/section_styles.css'

/**
 *   @details : Creates a flexible container for text (and other content). 
 * 
 *   @Required
 *   @param[in] title_included: true if there is a title for the text.
 *   @param[in] id:             unique identifier for the section.
 * 
 *   @Optional
 *   @param[in] title:    the subheading to display at the top of the container.
 *   @param[in] children: other html/react elements to be displayed within container.
 */

type Props = {
    title_included: boolean,
    title?: string,
    id: string,
    children?: React.ReactNode;
}

const TextContainer = ({ title_included, title, id, children }: Props) => {
    const { getTheme } = useThemeContext() ;
    let theme = getTheme() ;
    return (
        <div className={`textbox-container text ${theme}`} id={id}>
            { title_included === true ?
                <div className={`text title` }>
                    {title}
                </div>
                : null }
            {children}
        </div>
    )
}

export default TextContainer